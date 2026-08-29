/* IVA v2 — data store: state, validation, seed, migration, snapshots */
"use strict";

const Store = {
  KEY: "iva-data-v2",
  LEGACY_KEY: "iva-vanilla-data",
  SETTINGS_KEY: "iva-settings",
  SCHEMA: 2,

  state: null,
  settings: { lang: "fa", theme: "light", currency: "toman", name: "" },

  /* ------------ persistence ------------ */
  loadSettings() {
    try {
      const raw = JSON.parse(localStorage.getItem(Store.SETTINGS_KEY));
      if (raw && typeof raw === "object") Store.settings = { ...Store.settings, ...raw };
    } catch (e) { console.warn("IVA: settings unreadable, using defaults"); }
    if (Store.settings.theme !== "dark" && Store.settings.theme !== "light" && Store.settings.theme !== "system") Store.settings.theme = "light";
    if (Store.settings.currency !== "toman" && Store.settings.currency !== "rial") Store.settings.currency = "toman";
    if (Store.settings.lang !== "fa" && Store.settings.lang !== "en") Store.settings.lang = "fa";
    return Store.settings;
  },
  saveSettings() {
    try { localStorage.setItem(Store.SETTINGS_KEY, JSON.stringify(Store.settings)); }
    catch (e) { console.warn("IVA: settings persist failed", e); }
  },

  load() {
    let data = null;
    try { data = JSON.parse(localStorage.getItem(Store.KEY)); } catch (e) { console.warn("IVA: data corrupted, recovering"); }
    if (data && data.version === Store.SCHEMA) { Store.state = Store.sanitize(data); return Store.state; }
    const legacy = Store.migrateLegacy();
    if (legacy) { Store.state = legacy; Store.save(); return Store.state; }
    Store.state = Store.seed(); Store.save(); return Store.state;
  },
  save() {
    try { localStorage.setItem(Store.KEY, JSON.stringify(Store.state)); }
    catch (e) { console.warn("IVA: data persist failed", e); }
  },

  /* ------------ undo snapshots ------------ */
  snapshot() { return JSON.stringify(Store.state); },
  restore(snap) {
    try { Store.state = JSON.parse(snap); Store.save(); return true; } catch (e) { return false; }
  },

  /* ------------ validation ------------ */
  num(v, fallback = 0) { const n = Number(v); return Number.isFinite(n) ? n : fallback; },
  sanitize(d) {
    const knownCats = new Set(Object.keys(window.IVA.i18n.CATEGORY_MAP));
    const knownAccTypes = new Set(Object.keys(window.IVA.i18n.ACCOUNT_TYPE_MAP));
    const accIds = new Set();
    const accounts = [];
    if (Array.isArray(d.accounts)) {
      for (const a of d.accounts) {
        if (!a || typeof a.name !== "string" || !a.name.trim()) continue;
        const id = String(a.id || U.uid());
        accIds.add(id);
        accounts.push({
          id, name: a.name.slice(0, 60), type: knownAccTypes.has(a.type) ? a.type : "bank",
          balance: Store.num(a.balance), color: /^#[0-9a-f]{6}$/i.test(a.color || "") ? a.color : "#6756e8",
          note: typeof a.note === "string" ? a.note.slice(0, 140) : ""
        });
      }
    }
    const fallbackAcc = accounts[0] ? accounts[0].id : null;
    const transactions = [];
    if (Array.isArray(d.transactions)) {
      for (const t of d.transactions) {
        if (!t || typeof t.title !== "string" || !t.title.trim()) continue;
        const type = t.type === "income" ? "income" : "expense";
        const amount = Math.abs(Store.num(t.amount, 0)) * (type === "expense" ? -1 : 1);
        if (amount === 0) continue;
        transactions.push({
          id: String(t.id || U.uid()),
          title: t.title.slice(0, 80),
          type,
          amount,
          category: knownCats.has(t.category) ? t.category : (type === "income" ? "incomeOther" : "other"),
          accountId: accIds.has(String(t.accountId)) ? String(t.accountId) : fallbackAcc,
          date: /^\d{4}-\d{2}-\d{2}$/.test(t.date) ? t.date : U.isoToday(),
          note: typeof t.note === "string" ? t.note.slice(0, 140) : ""
        });
      }
    }
    const budgets = [];
    if (Array.isArray(d.budgets)) {
      const used = new Set();
      for (const b of d.budgets) {
        if (!b || typeof b.name !== "string" || !b.name.trim()) continue;
        const cat = knownCats.has(b.category) ? b.category : "other";
        if (used.has(cat)) continue; used.add(cat);
        if (Store.num(b.amount) <= 0) continue;
        budgets.push({
          id: String(b.id || U.uid()), name: b.name.slice(0, 60), category: cat,
          amount: Store.num(b.amount),
          color: /^#[0-9a-f]{6}$/i.test(b.color || "") ? b.color : (window.IVA.i18n.CATEGORY_MAP[cat] ? window.IVA.i18n.CATEGORY_MAP[cat].color : "#6756e8")
        });
      }
    }
    const goals = [];
    if (Array.isArray(d.goals)) {
      for (const g of d.goals) {
        if (!g || typeof g.name !== "string" || !g.name.trim()) continue;
        if (Store.num(g.target) <= 0) continue;
        goals.push({
          id: String(g.id || U.uid()), name: g.name.slice(0, 60),
          target: Store.num(g.target), saved: U.clamp(Store.num(g.saved), 0, Store.num(g.target)),
          deadline: /^\d{4}-\d{2}-\d{2}$/.test(g.deadline) ? g.deadline : "",
          color: /^#[0-9a-f]{6}$/i.test(g.color || "") ? g.color : "#6756e8"
        });
      }
    }
    const debts = [];
    if (Array.isArray(d.debts)) {
      for (const x of d.debts) {
        if (!x || typeof x.name !== "string" || !x.name.trim()) continue;
        if (Store.num(x.amount) === 0) continue;
        debts.push({
          id: String(x.id || U.uid()), name: x.name.slice(0, 60),
          kind: x.kind === "credit" ? "credit" : "debt",
          amount: Math.abs(Store.num(x.amount)),
          dueDate: /^\d{4}-\d{2}-\d{2}$/.test(x.dueDate) ? x.dueDate : "",
          settled: !!x.settled,
          note: typeof x.note === "string" ? x.note.slice(0, 140) : ""
        });
      }
    }
    return { version: Store.SCHEMA, transactions, accounts, budgets, goals, debts };
  },

  /* ------------ v1 → v2 migration ------------ */
  _catMap: { "خوراک": "food", "مسکن": "housing", "حمل‌ونقل": "transport", "قبوض": "bills", "سلامت": "health", "تفریح": "fun", "خرید": "shopping", "آموزش": "edu", "سایر": "other", "درآمد": "salary" },
  migrateLegacy() {
    let old = null;
    try { old = JSON.parse(localStorage.getItem(Store.LEGACY_KEY)); } catch (e) { return null; }
    if (!old || !Array.isArray(old.transactions)) return null;
    const colorOf = k => (window.IVA.i18n.CATEGORY_MAP[k] || { color: "#6756e8" }).color;
    const accounts = (old.accounts || []).map((a, i) => ({
      id: String(a.id || "m" + i), name: String(a.name || "حساب").slice(0, 60),
      type: /کارت/i.test(a.name || "") ? "card" : /نقد/i.test(a.name || "") ? "cash" : "bank",
      balance: Store.num(a.amount),
      color: /^#[0-9a-f]{6}$/i.test(a.color || "") ? a.color : "#6756e8", note: ""
    }));
    const accByName = new Map(accounts.map(a => [a.name, a.id]));
    const transactions = (old.transactions || []).map((t, i) => {
      // v1 sometimes kept signed amounts and sometimes unsigned + type; trust the
      // explicit type first and use the sign only as a fallback for legacy rows
      const type = t.type === "income" || t.type === "expense" ? t.type : (Store.num(t.amount) > 0 ? "income" : "expense");
      const catRaw = String(t.category || "");
      const isIncome = type === "income";
      const category = Store._catMap[catRaw] || (isIncome ? "salary" : "other");
      return {
        id: String(t.id || "t" + i), title: String(t.title || "-").slice(0, 80), type,
        category, accountId: accByName.get(String(t.account || "")) || (accounts[0] && accounts[0].id),
        date: U.isoToday(), note: ""
      };
    }).map(t => ({ ...t, amount: 0, date: U.isoToday() })).map((t, i) => {
      const orig = (old.transactions || [])[i] || {};
      return { ...t, amount: Math.abs(Store.num(orig.amount)) * (t.type === "expense" ? -1 : 1) };
    });
    const budgets = (old.budgets || []).map((b, i) => {
      const cat = Store._catMap[String(b.name || "")] || "other";
      return { id: String(b.id || "b" + i), name: String(b.name).slice(0, 60), category: cat, amount: Store.num(b.amount), color: colorOf(cat) };
    }).filter(b => b.amount > 0);
    const goals = (old.goals || []).map((g, i) => {
      const target = Store.num(g.amount);
      const savedMatch = String(g.meta || "").replace(/[۰-۹]/g, d => String("۰۱۲۳۴۵۶۷۸۹".indexOf(d))).match(/([\d,٬]+)/);
      const saved = savedMatch ? U.clamp(Number(savedMatch[1].replace(/[^\d]/g, "")), 0, target) : Math.round(target * 0.6);
      return { id: String(g.id || "g" + i), name: String(g.name).slice(0, 60), target, saved, deadline: "", color: /^#[0-9a-f]{6}$/i.test(g.color || "") ? g.color : "#6756e8" };
    }).filter(g => g.target > 0);
    const debts = (old.debts || []).map((x, i) => ({
      id: String(x.id || "d" + i), name: String(x.name).slice(0, 60),
      kind: Store.num(x.amount) < 0 ? "debt" : "credit",
      amount: Math.abs(Store.num(x.amount)), dueDate: "", settled: false,
      note: String(x.meta || "").slice(0, 140)
    })).filter(x => x.amount > 0);
    return Store.sanitize({ version: 2, transactions, accounts, budgets, goals, debts });
  },

  /* ------------ realistic seed (dates relative to today) ------------ */
  seed() {
    const today = new Date();
    const day = n => { const d = new Date(today); d.setDate(d.getDate() - n); return U.toISO(d); };
    const mk = monthsBack => { const d = new Date(today); d.setMonth(d.getMonth() - monthsBack); return U.toISO(d); };
    const acc1 = "acc-saman", acc2 = "acc-melat", acc3 = "acc-cash", acc4 = "acc-save";
    const tx = [];
    let id = 1;
    const T = (titleKey, cat, acc, amount, date, note) => tx.push({ id: "s" + (id++), title: U.t("seed." + titleKey), type: amount > 0 ? "income" : "expense", category: cat, accountId: acc, amount, date, note: note || "" });

    // 6 months of recurring reality
    for (let m = 5; m >= 0; m--) {
      const back = m * 30;
      T("tx1", "salary", acc1, 48500000, mk(m), "");
      T("tx3", "housing", acc1, -12000000, mk(m), "");
      T("tx2", "food", acc2, -1180000 - m * 40000, day(back + 2), "");
      T("tx2", "food", acc2, -640000, day(back + 9), "");
      T("tx2", "food", acc3, -320000, day(back + 15), "");
      T("tx11", "bills", acc2, -420000, day(back + 1), "");
      T("tx5", "bills", acc2, -310000, day(back + 4), "");
      T("tx6", "transport", acc2, -180000, day(back + 3), "");
      T("tx6", "transport", acc3, -95000, day(back + 12), "");
      T("tx7", "fun", acc3, -260000, day(back + 6), "");
      T("tx14", "transport", acc2, -350000, day(back + 18), "");
      if (m % 2 === 0) T("tx4", "freelance", acc4, 9200000 + m * 350000, day(back + 10), "");
      if (m % 3 === 1) T("tx12", "fun", acc3, -750000, day(back + 21), "");
      if (m === 2 || m === 4) T("tx13", "health", acc3, -480000, day(back + 13), "");
      if (m === 1) T("tx15", "shopping", acc2, -1850000, day(back + 8), "");
      if (m === 3) T("tx16", "edu", acc2, -1400000, day(back + 16), "");
      if (m === 0) T("tx9", "food", acc3, -410000, day(0), "");
    }
    T("tx8", "invest", acc4, 5000000, day(3), "");

    return Store.sanitize({
      version: 2,
      accounts: [
        { id: acc1, name: U.t("seed.acc1"), type: "bank", balance: 82540000, color: "#6756e8", note: "" },
        { id: acc2, name: U.t("seed.acc2"), type: "card", balance: 38750000, color: "#2f9df4", note: "۲۰۹۸" },
        { id: acc3, name: U.t("seed.acc3"), type: "cash", balance: 5550000, color: "#10bfa4", note: "" },
        { id: acc4, name: U.t("seed.acc4"), type: "savings", balance: 163500000, color: "#f1b83f", note: "" }
      ],
      transactions: tx,
      budgets: [
        { id: "b1", name: U.t("seed.bud1"), category: "food", amount: 8000000, color: "#10bfa4" },
        { id: "b2", name: U.t("seed.bud2"), category: "housing", amount: 15000000, color: "#6756e8" },
        { id: "b3", name: U.t("seed.bud3"), category: "transport", amount: 4500000, color: "#ff9871" },
        { id: "b4", name: U.t("seed.bud4"), category: "fun", amount: 3000000, color: "#8f6ef2" },
        { id: "b5", name: U.t("seed.bud5"), category: "bills", amount: 2000000, color: "#f1b83f" }
      ],
      goals: [
        { id: "g1", name: U.t("seed.goal1"), target: 200000000, saved: 136000000, deadline: (() => { const d = new Date(today); d.setMonth(d.getMonth() + 8); return U.toISO(d); })(), color: "#6756e8" },
        { id: "g2", name: U.t("seed.goal2"), target: 90000000, saved: 54000000, deadline: (() => { const d = new Date(today); d.setMonth(d.getMonth() + 5); return U.toISO(d); })(), color: "#10bfa4" },
        { id: "g3", name: U.t("seed.goal3"), target: 150000000, saved: 112500000, deadline: "", color: "#0fb5d6" }
      ],
      debts: [
        { id: "d1", name: U.t("seed.debt1"), kind: "debt", amount: 6800000, dueDate: (() => { const d = new Date(today); d.setDate(d.getDate() + 12); return U.toISO(d); })(), settled: false, note: U.t("common.month") },
        { id: "d2", name: U.t("seed.debt2"), kind: "credit", amount: 12500000, dueDate: (() => { const d = new Date(today); d.setDate(d.getDate() + 20); return U.toISO(d); })(), settled: false, note: "" },
        { id: "d3", name: U.t("seed.debt3"), kind: "debt", amount: 4200000, dueDate: (() => { const d = new Date(today); d.setDate(d.getDate() + 5); return U.toISO(d); })(), settled: false, note: "3" }
      ]
    });
  }
};

window.IVA.store = Store;
