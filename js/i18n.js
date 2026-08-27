/* IVA v2 — Full bilingual dictionary (fa/en) */
"use strict";

const I18N = {
  version: 2,

  fa: {
    "app.name": "آیوا", "app.tagline": "IVA FINANCE", "app.slogan": "پولت را بفهم، آینده‌ات را بساز.",
    "app.welcomeTitle": "به پلتفرم IVA خوش آمدید 👋", "app.welcomeSub": "کنترل کامل زندگی مالی، ساده و امن.",

    "a11y.skip": "پرش به محتوای اصلی",

    "nav.overview": "نمای کلی", "nav.transactions": "تراکنش‌ها", "nav.accounts": "حساب‌ها",
    "nav.budgets": "بودجه‌ها", "nav.goals": "اهداف", "nav.debts": "بدهی و طلب",
    "nav.reports": "گزارش‌ها", "nav.settings": "تنظیمات", "nav.more": "بیشتر",

    "common.add": "افزودن", "common.edit": "ویرایش", "common.delete": "حذف", "common.save": "ذخیره",
    "common.cancel": "انصراف", "common.confirm": "تأیید", "common.close": "بستن", "common.search": "جستجو",
    "common.all": "همه", "common.today": "امروز", "common.yesterday": "دیروز", "common.tomorrow": "فردا",
    "common.toman": "تومان", "common.rial": "ریال", "common.amount": "مبلغ", "common.title": "عنوان",
    "common.date": "تاریخ", "common.category": "دسته", "common.account": "حساب", "common.type": "نوع",
    "common.note": "یادداشت", "common.optional": "اختیاری", "common.more": "بیشتر", "common.actions": "عملیات",
    "common.undo": "برگردان", "common.done": "انجام شد", "common.total": "جمع کل", "common.remaining": "باقی‌مانده",
    "common.viewAll": "مشاهده همه", "common.month": "ماه", "common.legend": "راهنما", "common.kind": "نوع",
    "common.name": "نام", "common.balance": "موجودی", "common.color": "رنگ", "common.loading": "در حال بارگذاری…",
    "common.showMore": "نمایش بیشتر", "common.thisMonth": "این ماه", "common.lastMonth": "ماه قبل",
    "common.deadline": "مهلت", "common.progress": "پیشرفت", "common.spent": "مصرف‌شده", "common.limit": "سقف",
    "common.over": "بیش از سقف", "common.saved": "پس‌اندازشده", "common.target": "هدف", "common.addFunds": "افزودن پس‌انداز",
    "common.noData": "داده‌ای نیست", "common.count": "تعداد", "common.currency": "واحد پول", "common.language": "زبان",
    "common.theme": "پوسته", "common.invalidAmount": "مبلغ معتبر وارد کنید", "common.invalidTitle": "عنوان را وارد کنید (حداقل ۲ حرف)",
    "common.download": "دانلود", "common.restore": "بازیابی",

    "action.newTx": "تراکنش جدید", "action.toggleTheme": "تغییر پوسته روشن/تاریک", "action.toggleLang": "Switch to English",
    "action.install": "نصب اپلیکیشن", "action.exportCsv": "خروجی CSV", "action.exportJson": "دانلود پشتیبان JSON",
    "action.importJson": "بازیابی از پشتیبان", "action.reset": "بازنشانی داده‌های نمونه",

    "tx.title": "تمام تراکنش‌ها", "tx.sub": "جستجو، فیلتر، مدیریت و خروجی اطلاعات",
    "tx.searchPh": "جستجو در تراکنش‌ها…", "tx.expense": "هزینه", "tx.income": "درآمد",
    "tx.none": "تراکنشی یافت نشد", "tx.noneHint": "فیلترها را تغییر دهید یا تراکنش جدیدی ثبت کنید.",
    "tx.sort": "مرتب‌سازی", "tx.sort.dateDesc": "تازه‌ترین", "tx.sort.dateAsc": "قدیمی‌ترین", "tx.sort.amountDesc": "بزرگ‌ترین مبلغ", "tx.sort.amountAsc": "کوچک‌ترین مبلغ",
    "tx.filterType": "نوع:", "tx.filterCat": "دسته:", "tx.filterAcc": "حساب:", "tx.filterMonth": "ماه:",
    "tx.in": "ورودی", "tx.out": "خروجی", "tx.addFirst": "اولین تراکنش را ثبت کنید",
    "tx.deleted": "تراکنش حذف شد", "tx.saved": "تراکنش ذخیره شد", "tx.updated": "تراکنش به‌روزرسانی شد",
    "tx.dateLabel": "تاریخ (میلادی — به شمسی نمایش داده می‌شود)", "tx.notePh": "یادداشت اختیاری…",

    "form.tx": "ثبت تراکنش", "form.txEdit": "ویرایش تراکنش", "form.account": "حساب جدید", "form.accountEdit": "ویرایش حساب",
    "form.budget": "بودجه جدید", "form.budgetEdit": "ویرایش بودجه", "form.goal": "هدف جدید", "form.goalEdit": "ویرایش هدف",
    "form.debt": "ثبت بدهی/طلب", "form.debtEdit": "ویرایش بدهی/طلب", "form.funds": "افزودن به پس‌انداز",
    "form.fundsPh": "مبلغ افزوده…",

    "acc.title": "حساب‌ها و کیف پول‌ها", "acc.sub": "بانک، کارت، کیف پول و وجه نقد",
    "acc.totalBalance": "مجموع دارایی", "acc.txThisMonth": "تراکنش این ماه", "acc.none": "هنوز حسابی نساخته‌اید",
    "acc.deleted": "حساب حذف شد", "acc.saved": "حساب ذخیره شد", "acc.updated": "حساب به‌روزرسانی شد",
    "acc.deleteCascade": "این حساب {n} تراکنش دارد؛ با حذف حساب، آن تراکنش‌ها هم حذف می‌شوند.",
    "acc.bank": "حساب بانکی", "acc.card": "کارت بانکی", "acc.cash": "وجه نقد", "acc.savings": "پس‌انداز", "acc.wallet": "کیف پول",
    "acc.openingBalance": "موجودی",

    "bud.title": "بودجه‌بندی دسته‌ها", "bud.sub": "سقف هزینه هر دسته را کنترل کنید",
    "bud.spentOf": "{a} از {b}", "bud.left": "{a} باقی مانده", "bud.overBy": "{a} بیش از سقف!",
    "bud.none": "بودجه‌ای تعریف نشده", "bud.deleted": "بودجه حذف شد", "bud.saved": "بودجه ذخیره شد", "bud.updated": "بودجه به‌روزرسانی شد",
    "bud.usage": "مصرف بودجه",

    "goal.title": "اهداف مالی", "goal.sub": "برای رویاها برنامه مالی بسازید",
    "goal.none": "هدفی تعریف نشده", "goal.deleted": "هدف حذف شد", "goal.saved": "هدف ذخیره شد", "goal.updated": "هدف به‌روزرسانی شد",
    "goal.eta": "با این روند حدود {n} ماه دیگر", "goal.reached": "🎉 تبریک! به این هدف رسیدی", "goal.fundsAdded": "به پس‌انداز اضافه شد",
    "goal.daysLeft": "{n} روز مانده", "goal.overdue": "مهلت گذشته",

    "debt.title": "بدهی‌ها و مطالبات", "debt.sub": "اقساط، بدهی و طلب‌ها را دنبال کنید",
    "debt.debt": "بدهی", "debt.credit": "طلب", "debt.totalDebt": "جمع بدهی", "debt.totalCredit": "جمع طلب", "debt.net": "خالص",
    "debt.dueIn": "{n} روز مانده", "debt.dueToday": "سررسید امروز!", "debt.overdue": "{n} روز گذشته",
    "debt.none": "چیزی ثبت نشده", "debt.settled": "تسویه‌شده", "debt.markSettled": "علامت‌گذاری تسویه", "debt.unsettle": "بازگشت به تسویه‌نشده",
    "debt.deleted": "حذف شد", "debt.saved": "ذخیره شد", "debt.updated": "به‌روزرسانی شد", "debt.youOwe": "بدهکار هستی", "debt.oweYou": "طلب داری",

    "rep.title": "گزارش‌های مالی", "rep.sub": "تحلیل واقعی درآمد، هزینه و روند دارایی",
    "rep.range": "بازه", "rep.months": "{n} ماه", "rep.cashflow": "جریان نقدی", "rep.cashflowSub": "درآمد و هزینه ماهانه",
    "rep.breakdown": "تقسیم هزینه‌ها", "rep.breakdownSub": "سهم دسته‌ها در هزینه‌های این ماه",
    "rep.trend": "روند خالص", "rep.trendSub": "انباشت خالص ماهانه (درآمد − هزینه)",
    "rep.topCats": "دسته‌های پرهزینه", "rep.topCatsSub": "بیشترین مصرف در بازه انتخابی",
    "rep.budgetUsage": "وضعیت بودجه‌ها", "rep.budgetUsageSub": "مصرف نسبت به سقف در این ماه",
    "rep.summary": "خلاصه عملکرد", "rep.savingsRate": "نرخ پس‌انداز", "rep.avgDaily": "میانگین هزینه روزانه",
    "rep.biggest": "بزرگ‌ترین هزینه", "rep.projection": "پیش‌بینی پایان ماه", "rep.netWorth": "دارایی خالص",
    "rep.share": "سهم", "rep.amount": "مبلغ",

    "ov.netWorth": "دارایی خالص", "ov.income": "درآمد این ماه", "ov.expense": "هزینه این ماه", "ov.savings": "پس‌انداز ماه",
    "ov.quick": "دسترسی سریع", "ov.recent": "تراکنش‌های اخیر", "ov.cashflow": "جریان نقدی", "ov.cashflowSub": "شش ماه اخیر",
    "ov.insights": "تحلیل هوشمند آیوا", "ov.insightsSub": "بر پایه داده‌های واقعی شما",
    "ov.mom": "نسبت به ماه قبل", "ov.noChange": "بدون تغییر", "ov.budgetsMini": "بودجه‌های پرمصرف", "ov.goalsMini": "نزدیک‌ترین به هدف",

    "set.title": "تنظیمات", "set.sub": "شخصی‌سازی، ظاهر و داده‌ها", "set.profile": "پروفایل", "set.appearance": "ظاهر",
    "set.data": "داده‌ها", "set.about": "درباره برنامه", "set.displayName": "نام نمایشی",
    "set.displayNameHint": "فقط روی همین دستگاه ذخیره می‌شود", "set.changeName": "تغییر نام",
    "set.themeLight": "روشن", "set.themeDark": "تاریک", "set.themeSystem": "سیستم",
    "set.currencyHint": "مبالغ بر مبنای تومان ذخیره می‌شوند", "set.backupHint": "دریافت تمام اطلاعات به‌صورت JSON",
    "set.importHint": "بازیابی از فایل پشتیبان JSON", "set.resetHint": "بازگشت به داده‌های نمونه اولیه",
    "set.resetConfirmTitle": "بازنشانی داده‌ها؟", "set.resetConfirmBody": "همه تراکنش‌ها، حساب‌ها، بودجه‌ها، اهداف و بدهی‌ها به حالت نمونه برمی‌گردند. این عمل قابل برگشت است (دکمه برگردان).",
    "set.importConfirmTitle": "بازیابی پشتیبان؟", "set.importConfirmBody": "داده‌های فعلی با محتوای فایل پشتیبان جایگزین می‌شوند.",
    "set.shortcuts": "میان‌برهای صفحه‌کلید", "set.scNew": "ثبت تراکنش جدید", "set.scSearch": "پرش به جستجو",
    "set.scTheme": "تغییر پوسته", "set.scClose": "بستن پنجره", "set.privacy": "حریم خصوصی",
    "set.privacyBody": "هیچ داده‌ای از دستگاه شما خارج نمی‌شود؛ همه‌چیز در LocalStorage همین مرورگر ذخیره است.",
    "set.version": "نسخه", "set.license": "مجوز MIT · متن‌باز", "set.offline": "آفلاین (PWA)", "set.offlineOk": "فعال",
    "set.importDone": "پشتیبان بازیابی شد", "set.importBad": "فایل پشتیبان معتبر نیست", "set.nameSaved": "نام ذخیره شد",
    "set.installed": "برنامه نصب شد!", "set.installHint": "IVA را مثل یک اپ واقعی نصب کنید",

    "del.txTitle": "حذف تراکنش؟", "del.txBody": "«{t}» حذف می‌شود و موجودی حساب اصلاح خواهد شد.",
    "del.accTitle": "حذف حساب؟", "del.budTitle": "حذف بودجه؟", "del.goalTitle": "حذف هدف؟", "del.debtTitle": "حذف بدهی/طلب؟",
    "del.body": "«{t}» برای همیشه حذف می‌شود. با «برگردان» می‌توانید فوراً بازش گردانید.",

    "welcome.hello": "به پلتفرم حسابداری آیوا خوش آمدید",
    "welcome.ask": "دوست دارید با چه نامی صدایتان کنیم؟",
    "welcome.privacy": "این نام فقط روی دستگاه شما ذخیره می‌شود و هر زمان از تنظیمات قابل تغییر است.",
    "welcome.name": "نام شما", "welcome.namePh": "مثلاً آرمان", "welcome.start": "شروع مدیریت مالی",

    "health.title": "سلامت مالی", "health.great": "عالی", "health.good": "خوب", "health.ok": "متوسط", "health.poor": "ضعیف",
    "health.desc": "نرخ پس‌انداز {sr}٪ · پایه‌ی نمره: پس‌انداز، بودجه، بدهی",
    "health.saveRate": "نرخ پس‌انداز",

    "ins.topCat": "بیشترین هزینه این ماه دسته «{c}» با {a} است.",
    "ins.overBudget": "بودجه «{b}» به {p}٪ سقف رسیده؛ فقط {a} باقی مانده.",
    "ins.savingRate": "نرخ پس‌انداز این ماه {p}٪ است ({t} نسبت به ماه قبل).",
    "ins.goalEta": "با متوسط پس‌انداز ماهانه {m}، حدود {n} ماه دیگر به «{g}» می‌رسی.",
    "ins.biggest": "بزرگ‌ترین هزینه ماه «{t}» به مبلغ {a} بوده است.",
    "ins.noIncome": "این ماه هنوز درآمدی ثبت نکرده‌ای.",
    "ins.title": "نکته {n}",

    "chart.income": "درآمد", "chart.expense": "هزینه", "chart.net": "خالص", "chart.other": "سایر",
    "chart.noData": "داده‌ای برای نمایش نیست",

    "toast.savedNoUndo": "ذخیره شد", "toast.resetDone": "داده‌ها بازنشانی شد", "toast.welcome": "خوش آمدی {n}!",
    "toast.themeLight": "پوسته روشن", "toast.themeDark": "پوسته تاریک", "toast.langChanged": "زبان تغییر کرد",

    "footer.slogan": "آیوا؛ پولت را بفهم، آینده‌ات را بساز.",

    "cat.food": "خوراک", "cat.housing": "مسکن", "cat.transport": "حمل‌ونقل", "cat.bills": "قبوض",
    "cat.health": "سلامت", "cat.fun": "تفریح", "cat.shopping": "خرید", "cat.edu": "آموزش", "cat.other": "سایر",
    "cat.salary": "حقوق", "cat.freelance": "فریلنس", "cat.invest": "سرمایه‌گذاری", "cat.gift": "هدیه", "cat.incomeOther": "درآمد سایر",

    "seed.acc1": "حساب بانکی سامان", "seed.acc2": "کارت ملت", "seed.acc3": "کیف پول نقدی", "seed.acc4": "صندوق پس‌انداز",
    "seed.tx1": "حقوق ماهانه", "seed.tx2": "خرید سوپرمارکت", "seed.tx3": "اجاره خانه", "seed.tx4": "پروژه فریلنسری",
    "seed.tx5": "قبض اینترنت", "seed.tx6": "اسنپ", "seed.tx7": "کافه", "seed.tx8": "سرمایه‌گذاری ماهانه", "seed.tx9": "خرید میوه",
    "seed.tx10": "باشگاه", "seed.tx11": "شارژ موبایل", "seed.tx12": "هدیه تولد", "seed.tx13": "دوای داروخانه", "seed.tx14": "بنزین",
    "seed.tx15": "خرید لباس", "seed.tx16": "دوره آنلاین", "seed.bud1": "خوراک", "seed.bud2": "مسکن", "seed.bud3": "حمل‌ونقل",
    "seed.bud4": "تفریح", "seed.bud5": "قبوض", "seed.goal1": "سفر به ژاپن", "seed.goal2": "خرید لپ‌تاپ",
    "seed.goal3": "صندوق اضطراری", "seed.debt1": "قسط وام مسکن", "seed.debt2": "طلب از علی", "seed.debt3": "قسط خرید لپ‌تاپ"
  },

  en: {
    "app.name": "IVA", "app.tagline": "IVA FINANCE", "app.slogan": "Understand your money, build your future.",
    "app.welcomeTitle": "Welcome to IVA 👋", "app.welcomeSub": "Complete control of your money, simple and private.",

    "a11y.skip": "Skip to main content",

    "nav.overview": "Overview", "nav.transactions": "Transactions", "nav.accounts": "Accounts",
    "nav.budgets": "Budgets", "nav.goals": "Goals", "nav.debts": "Debts & Loans",
    "nav.reports": "Reports", "nav.settings": "Settings", "nav.more": "More",

    "common.add": "Add", "common.edit": "Edit", "common.delete": "Delete", "common.save": "Save",
    "common.cancel": "Cancel", "common.confirm": "Confirm", "common.close": "Close", "common.search": "Search",
    "common.all": "All", "common.today": "Today", "common.yesterday": "Yesterday", "common.tomorrow": "Tomorrow",
    "common.toman": "Toman", "common.rial": "Rial", "common.amount": "Amount", "common.title": "Title",
    "common.date": "Date", "common.category": "Category", "common.account": "Account", "common.type": "Type",
    "common.note": "Note", "common.optional": "optional", "common.more": "More", "common.actions": "Actions",
    "common.undo": "Undo", "common.done": "Done", "common.total": "Total", "common.remaining": "Remaining",
    "common.viewAll": "View all", "common.month": "Month", "common.legend": "Legend", "common.kind": "Kind",
    "common.name": "Name", "common.balance": "Balance", "common.color": "Color", "common.loading": "Loading…",
    "common.showMore": "Show more", "common.thisMonth": "This month", "common.lastMonth": "Last month",
    "common.deadline": "Deadline", "common.progress": "Progress", "common.spent": "Spent", "common.limit": "Limit",
    "common.over": "Over limit", "common.saved": "Saved", "common.target": "Target", "common.addFunds": "Add funds",
    "common.noData": "No data", "common.count": "Count", "common.currency": "Currency", "common.language": "Language",
    "common.theme": "Theme", "common.invalidAmount": "Enter a valid amount", "common.invalidTitle": "Enter a title (min 2 chars)",
    "common.download": "Download", "common.restore": "Restore",

    "action.newTx": "New transaction", "action.toggleTheme": "Toggle light/dark theme", "action.toggleLang": "تغییر به فارسی",
    "action.install": "Install app", "action.exportCsv": "Export CSV", "action.exportJson": "Download JSON backup",
    "action.importJson": "Restore from backup", "action.reset": "Reset to sample data",

    "tx.title": "All transactions", "tx.sub": "Search, filter, manage and export",
    "tx.searchPh": "Search transactions…", "tx.expense": "Expense", "tx.income": "Income",
    "tx.none": "No transactions found", "tx.noneHint": "Change the filters or add a new transaction.",
    "tx.sort": "Sort", "tx.sort.dateDesc": "Newest", "tx.sort.dateAsc": "Oldest", "tx.sort.amountDesc": "Largest amount", "tx.sort.amountAsc": "Smallest amount",
    "tx.filterType": "Type:", "tx.filterCat": "Category:", "tx.filterAcc": "Account:", "tx.filterMonth": "Month:",
    "tx.in": "In", "tx.out": "Out", "tx.addFirst": "Add your first transaction",
    "tx.deleted": "Transaction deleted", "tx.saved": "Transaction saved", "tx.updated": "Transaction updated",
    "tx.dateLabel": "Date (Gregorian — shown in Jalali)", "tx.notePh": "Optional note…",

    "form.tx": "New transaction", "form.txEdit": "Edit transaction", "form.account": "New account", "form.accountEdit": "Edit account",
    "form.budget": "New budget", "form.budgetEdit": "Edit budget", "form.goal": "New goal", "form.goalEdit": "Edit goal",
    "form.debt": "Debt / receivable", "form.debtEdit": "Edit debt / receivable", "form.funds": "Add to savings",
    "form.fundsPh": "Amount to add…",

    "acc.title": "Accounts & wallets", "acc.sub": "Bank, cards, wallets and cash",
    "acc.totalBalance": "Total assets", "acc.txThisMonth": "Tx this month", "acc.none": "No accounts yet",
    "acc.deleted": "Account deleted", "acc.saved": "Account saved", "acc.updated": "Account updated",
    "acc.deleteCascade": "This account has {n} transactions; deleting it removes them too.",
    "acc.bank": "Bank account", "acc.card": "Bank card", "acc.cash": "Cash", "acc.savings": "Savings", "acc.wallet": "Wallet",
    "acc.openingBalance": "Balance",

    "bud.title": "Category budgets", "bud.sub": "Keep spending caps under control",
    "bud.spentOf": "{a} of {b}", "bud.left": "{a} left", "bud.overBy": "{a} over limit!",
    "bud.none": "No budgets defined", "bud.deleted": "Budget deleted", "bud.saved": "Budget saved", "bud.updated": "Budget updated",
    "bud.usage": "Budget usage",

    "goal.title": "Financial goals", "goal.sub": "Plan your dreams with real numbers",
    "goal.none": "No goals defined", "goal.deleted": "Goal deleted", "goal.saved": "Goal saved", "goal.updated": "Goal updated",
    "goal.eta": "≈ {n} months at this pace", "goal.reached": "🎉 Congrats! Goal reached", "goal.fundsAdded": "Funds added",
    "goal.daysLeft": "{n} days left", "goal.overdue": "Past deadline",

    "debt.title": "Debts & receivables", "debt.sub": "Track installments, debts and credits",
    "debt.debt": "Debt", "debt.credit": "Receivable", "debt.totalDebt": "Total debt", "debt.totalCredit": "Total credit", "debt.net": "Net",
    "debt.dueIn": "{n} days left", "debt.dueToday": "Due today!", "debt.overdue": "{n} days overdue",
    "debt.none": "Nothing recorded", "debt.settled": "Settled", "debt.markSettled": "Mark settled", "debt.unsettle": "Mark unsettled",
    "debt.deleted": "Deleted", "debt.saved": "Saved", "debt.updated": "Updated", "debt.youOwe": "You owe", "debt.oweYou": "Owed to you",

    "rep.title": "Financial reports", "rep.sub": "Real analysis of income, spending and net trend",
    "rep.range": "Range", "rep.months": "{n} months", "rep.cashflow": "Cash flow", "rep.cashflowSub": "Monthly income and expenses",
    "rep.breakdown": "Expense breakdown", "rep.breakdownSub": "Category share of this month's spending",
    "rep.trend": "Net trend", "rep.trendSub": "Cumulative net (income − expenses)",
    "rep.topCats": "Top categories", "rep.topCatsSub": "Highest spending in the selected range",
    "rep.budgetUsage": "Budget status", "rep.budgetUsageSub": "Spending vs limit this month",
    "rep.summary": "Performance summary", "rep.savingsRate": "Savings rate", "rep.avgDaily": "Avg daily spend",
    "rep.biggest": "Biggest expense", "rep.projection": "Month-end projection", "rep.netWorth": "Net worth",
    "rep.share": "Share", "rep.amount": "Amount",

    "ov.netWorth": "Net worth", "ov.income": "Income this month", "ov.expense": "Expenses this month", "ov.savings": "Monthly savings",
    "ov.quick": "Quick access", "ov.recent": "Recent transactions", "ov.cashflow": "Cash flow", "ov.cashflowSub": "Last six months",
    "ov.insights": "IVA smart insights", "ov.insightsSub": "Based on your real data",
    "ov.mom": "vs last month", "ov.noChange": "No change", "ov.budgetsMini": "Most-used budgets", "ov.goalsMini": "Closest to target",

    "set.title": "Settings", "set.sub": "Personalization, appearance and data", "set.profile": "Profile", "set.appearance": "Appearance",
    "set.data": "Data", "set.about": "About", "set.displayName": "Display name",
    "set.displayNameHint": "Stored only on this device", "set.changeName": "Change name",
    "set.themeLight": "Light", "set.themeDark": "Dark", "set.themeSystem": "System",
    "set.currencyHint": "Amounts are stored in Toman", "set.backupHint": "Download everything as JSON",
    "set.importHint": "Restore from a JSON backup file", "set.resetHint": "Return to the original sample data",
    "set.resetConfirmTitle": "Reset data?", "set.resetConfirmBody": "All transactions, accounts, budgets, goals and debts return to sample values. You can Undo right after.",
    "set.importConfirmTitle": "Restore backup?", "set.importConfirmBody": "Current data will be replaced by the backup file contents.",
    "set.shortcuts": "Keyboard shortcuts", "set.scNew": "New transaction", "set.scSearch": "Jump to search",
    "set.scTheme": "Toggle theme", "set.scClose": "Close dialog", "set.privacy": "Privacy",
    "set.privacyBody": "Nothing leaves your device; everything stays in this browser's LocalStorage.",
    "set.version": "Version", "set.license": "MIT license · Open source", "set.offline": "Offline (PWA)", "set.offlineOk": "Active",
    "set.importDone": "Backup restored", "set.importBad": "Invalid backup file", "set.nameSaved": "Name saved",
    "set.installed": "App installed!", "set.installHint": "Install IVA like a native app",

    "del.txTitle": "Delete transaction?", "del.txBody": "“{t}” will be deleted and the account balance corrected.",
    "del.accTitle": "Delete account?", "del.budTitle": "Delete budget?", "del.goalTitle": "Delete goal?", "del.debtTitle": "Delete debt/receivable?",
    "del.body": "“{t}” will be removed. You can immediately Undo.",

    "welcome.hello": "Welcome to IVA Finance",
    "welcome.ask": "What should we call you?",
    "welcome.privacy": "The name is stored only on your device and can be changed anytime in Settings.",
    "welcome.name": "Your name", "welcome.namePh": "e.g. Arman", "welcome.start": "Start managing my money",

    "health.title": "Financial health", "health.great": "Excellent", "health.good": "Good", "health.ok": "Fair", "health.poor": "Weak",
    "health.desc": "Savings rate {sr}% · score: savings, budgets, debt",
    "health.saveRate": "Savings rate",

    "ins.topCat": "“{c}” is your top category this month at {a}.",
    "ins.overBudget": "Budget “{b}” is at {p}% of its cap; only {a} left.",
    "ins.savingRate": "This month's savings rate is {p}% ({t} vs last month).",
    "ins.goalEta": "Saving {m} monthly, you'll reach “{g}” in about {n} months.",
    "ins.biggest": "Your biggest expense this month was “{t}” at {a}.",
    "ins.noIncome": "No income recorded this month yet.",
    "ins.title": "Insight {n}",

    "chart.income": "Income", "chart.expense": "Expenses", "chart.net": "Net", "chart.other": "Other",
    "chart.noData": "No data to display",

    "toast.savedNoUndo": "Saved", "toast.resetDone": "Data reset", "toast.welcome": "Welcome, {n}!",
    "toast.themeLight": "Light theme", "toast.themeDark": "Dark theme", "toast.langChanged": "Language changed",

    "footer.slogan": "IVA — understand your money, build your future.",

    "cat.food": "Groceries", "cat.housing": "Housing", "cat.transport": "Transport", "cat.bills": "Bills",
    "cat.health": "Health", "cat.fun": "Entertainment", "cat.shopping": "Shopping", "cat.edu": "Education", "cat.other": "Other",
    "cat.salary": "Salary", "cat.freelance": "Freelance", "cat.invest": "Investment", "cat.gift": "Gift", "cat.incomeOther": "Other income",

    "seed.acc1": "Saman Bank Account", "seed.acc2": "Mellat Card", "seed.acc3": "Cash Wallet", "seed.acc4": "Savings Fund",
    "seed.tx1": "Monthly salary", "seed.tx2": "Supermarket", "seed.tx3": "Rent", "seed.tx4": "Freelance project",
    "seed.tx5": "Internet bill", "seed.tx6": "Ride hailing", "seed.tx7": "Café", "seed.tx8": "Monthly investment", "seed.tx9": "Fruits",
    "seed.tx10": "Gym", "seed.tx11": "Mobile top-up", "seed.tx12": "Birthday gift", "seed.tx13": "Pharmacy", "seed.tx14": "Fuel",
    "seed.tx15": "Clothes", "seed.tx16": "Online course", "seed.bud1": "Groceries", "seed.bud2": "Housing", "seed.bud3": "Transport",
    "seed.bud4": "Entertainment", "seed.bud5": "Bills", "seed.goal1": "Trip to Japan", "seed.goal2": "New laptop",
    "seed.goal3": "Emergency fund", "seed.debt1": "Mortgage installment", "seed.debt2": "Credit from Ali", "seed.debt3": "Laptop installment"
  }
};

/* Category / account metadata shared by the app */
const CATEGORIES = {
  expense: [
    { key: "food", color: "#10bfa4", icon: "food" },
    { key: "housing", color: "#6756e8", icon: "home" },
    { key: "transport", color: "#ff9871", icon: "truck" },
    { key: "bills", color: "#f1b83f", icon: "zap" },
    { key: "health", color: "#ef5d8f", icon: "heart" },
    { key: "fun", color: "#8f6ef2", icon: "music" },
    { key: "shopping", color: "#2f9df4", icon: "bag" },
    { key: "edu", color: "#0fb5d6", icon: "book" },
    { key: "other", color: "#8892a6", icon: "dot" }
  ],
  income: [
    { key: "salary", color: "#10bfa4", icon: "briefcase" },
    { key: "freelance", color: "#6756e8", icon: "code" },
    { key: "invest", color: "#0fb5d6", icon: "trend" },
    { key: "gift", color: "#f1b83f", icon: "gift" },
    { key: "incomeOther", color: "#8892a6", icon: "dot" }
  ]
};
const CATEGORY_MAP = Object.fromEntries([...CATEGORIES.expense, ...CATEGORIES.income].map(c => [c.key, c]));

const ACCOUNT_TYPES = [
  { key: "bank", color: "#6756e8", icon: "bank" },
  { key: "card", color: "#2f9df4", icon: "card" },
  { key: "cash", color: "#10bfa4", icon: "wallet" },
  { key: "savings", color: "#f1b83f", icon: "dollar" },
  { key: "wallet", color: "#ff9871", icon: "wallet" }
];
const ACCOUNT_TYPE_MAP = Object.fromEntries(ACCOUNT_TYPES.map(a => [a.key, a]));

const COLOR_SWATCHES = ["#6756e8", "#10bfa4", "#2f9df4", "#f1b83f", "#ef5d8f", "#ff9871", "#8f6ef2", "#0fb5d6", "#8892a6"];

window.IVA = window.IVA || {};
window.IVA.i18n = { I18N, CATEGORIES, CATEGORY_MAP, ACCOUNT_TYPES, ACCOUNT_TYPE_MAP, COLOR_SWATCHES };
