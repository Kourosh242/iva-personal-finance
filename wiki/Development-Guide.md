# 🛠️ راهنمای توسعه | Development Guide

> **🇮🇷 فارسی** | [🇬🇧 English](#-development-guide-english)

---

## 🇮🇷 راهنمای توسعه‌دهندگان

این راهنما برای کسانی است که می‌خواهند در توسعه IVA مشارکت کنند یا ساختار کد را درک کنند.

---

### 🏗 معماری کد

IVA یک **اپلیکیشن تک صفحه‌ای (SPA)** است که از معماری ماژولار استفاده می‌کند. ترتیب بارگذاری در `index.html`:

```
index.html  →  بارگذاری ماژول‌ها به ترتیب
   │
   ├── js/i18n.js     📖 دیکشنری و متادیتا
   ├── js/utils.js    🔧 ابزارهای عمومی
   ├── js/store.js    💾 ذخیره‌ساز و وضعیت
   ├── js/charts.js   📊 موتور نمودار
   ├── js/tools.js    🧰 جعبه‌ابزار مالی
   ├── js/jdate.js    📅 تقویم شمسی
   └── js/app.js      🚀 روتر، صفحات، اکشن‌ها
```

### 📦 ماژول i18n.js

مسئول **دوزبانه‌سازی** کامل برنامه:

- دیکشنری کامل فارسی و انگلیسی (`I18N.fa` و `I18N.en`)
- متادیتای دسته‌ها (`CATEGORIES`, `CATEGORY_MAP`)
- متادیتای نوع حساب‌ها (`ACCOUNT_TYPES`, `ACCOUNT_TYPE_MAP`)
- رنگ‌های انتخابی (`COLOR_SWATCHES`)

```javascript
U.t("key.name")                    // ترجمه ساده
U.t("key.withParam", { n: value }) // ترجمه با پارامتر
```

### 🔧 ماژول utils.js

| تابع | توضیح |
|------|-------|
| `U.esc(s)` | جلوگیری از XSS با escape کاراکترهای HTML |
| `U.uid()` | تولید شناسه یکتا |
| `U.group(n)` | فرمت اعداد با جداکننده هزارگان |
| `U.money(n)` | فرمت مبلغ با واحد پول |
| `U.compact(n)` | نمایش فشرده اعداد |
| `U.t(key, params)` | ترجمه با fallback به فارسی |
| `U.dateLabel(iso)` | نمایش تاریخ شمسی |
| `U.monthLabel(key)` | نام ماه شمسی |
| `U.icon(name, size)` | آیکون SVG خطی |

### 💾 ماژول store.js

مدیریت **وضعیت و ذخیره‌سازی**:

- `Store.state`: وضعیت اصلی برنامه (تراکنش‌ها، حساب‌ها، بودجه‌ها، اهداف، بدهی‌ها، یادداشت‌ها)
- `Store.settings`: تنظیمات کاربر (زبان، تم، واحد پول، نام)
- `Store.load()`: بارگذاری داده + **مهاجرت v1/v2 → v3**
- `Store.sanitize(data)`: اعتبارسنجی و پاک‌سازی کامل داده‌ها
- `Store.seed()`: دادهٔ خالی
- `Store.seedDemo()`: دادهٔ دمو (۶ ماه و...)
- `Store.snapshot()` / `Store.restore()`: پشتیبانی از Undo

**طرحوارهٔ داده (نسخه ۳):**
```javascript
{
  version: 3,
  transactions: [{ id, title, type, amount, category, accountId, date, note }],
  accounts: [{ id, name, type, balance, color, note, cardNumber }],
  budgets: [{ id, name, category, amount, color }],
  goals: [{ id, name, target, saved, deadline, color }],
  debts: [{ id, name, kind, amount, dueDate, settled, note }],
  notes: [{ id, text, ts, up }]
}
```

### 🧰 ماژول tools.js

- فقط **یک** ماژول است که شبکه دارد.
- `NET_ALLOW` دامنه‌های مجاز را نگه می‌دارد.
- در دسکتاپ/اندروید از پل بومی (`ivaDesktop` / `AndroidBridge`) و در مرورگر از `fetch` استفاده می‌کند.
- هیچ دادهٔ مالی یا شخصی ارسال نمی‌شود؛ فقط نرخ عمومی کش/نمایش داده می‌شود.

### 📅 ماژول jdate.js

- الگوریتم تبدیل Borkowski (مرجع `jalaali-js v2`) در ۱۸۰۰..۲۲۵۶ میلادی
- انتخابگر تاریخ شمسی برای همهٔ فیلدهای `type="date"`
- ذخیره‌سازی همچنان ISO میلادی است؛ فقط نمایش/انتخاب شمسی است.

### 📊 ماژول charts.js

| تابع | نوع نمودار |
|------|-----------|
| `Charts.sparkline()` | اسپارک‌لاین |
| `Charts.bars()` | میله‌ای گروهی |
| `Charts.line()` | خطی نرم |
| `Charts.donut()` | دونات |
| `Charts.ring()` | حلقه پیشرفت |
| `Charts.animate()` | انیمیشن بعد از درج در DOM |

### 🚀 ماژول app.js

- **Router**: مسیریابی مبتنی بر هش (`#/overview`, `#/transactions`, `#/tools`...)
- **Pages**: نمای کلی، تراکنش‌ها، حساب‌ها، بودجه‌ها، اهداف، بدهی/طلب، گزارش‌ها، ابزارها، تنظیمات
- **Forms**: مودال‌های ثبت/ویرایش + انتخابگر شمسی
- **Actions**: کلیک، کیبورد، تغییر فرم
- **Undo**: Snapshot بر اساس `Store.sanitize`

### 🤝 مشارکت

1. ریپو را **Fork** کنید
2. از **Branch** با نام مشخص استفاده کنید (مثل `feature/recurring-transactions`)
3. تغییرات را **کوچک و خوانا** نگه دارید
4. `node --check js/*.js` را اجرا کنید
5. در **حالت روشن/تاریک** و **فارسی/انگلیسی** تست کنید
6. **Pull Request** ایجاد کنید با توضیح دقیق

---

## 🛠️ Development Guide (English)

This guide is for developers who want to contribute or understand IVA's code.

### 🏗 Code Architecture

IVA is a **Single Page Application (SPA)** with a modular architecture. Load order in `index.html`:

```
index.html  →  Loads modules in order
   │
   ├── js/i18n.js     📖 Dictionary & metadata
   ├── js/utils.js    🔧 Utilities
   ├── js/store.js    💾 Data store & migration
   ├── js/charts.js   📊 SVG chart engine
   ├── js/tools.js    🧰 Financial toolbox
   ├── js/jdate.js    📅 Jalali calendar
   └── js/app.js      🚀 Router, pages, actions
```

### 📦 Module: i18n.js
- Full Persian/English dictionary (`I18N.fa` & `I18N.en`)
- Category metadata (`CATEGORIES`, `CATEGORY_MAP`)
- Account type metadata (`ACCOUNT_TYPES`, `ACCOUNT_TYPE_MAP`)
- `U.t(key, params)` resolves with a Persian fallback

### 🔧 Module: utils.js
- `U.esc()` — XSS-safe HTML escaping
- `U.group()`, `U.money()`, `U.compact()` — number/currency formatting
- `U.dateLabel()`, `U.monthLabel()` — Jalali-aware dates
- `U.icon()` — inline SVG icons

### 💾 Module: store.js
- `Store.load()` — load + **v1/v2 → v3 migration**
- `Store.sanitize()` — full validation
- `Store.seed()` — empty state
- `Store.seedDemo()` — realistic demo data
- Snapshot-based Undo

### 🧰 Module: tools.js
- The **only** module that uses networking.
- `NET_ALLOW` holds allowed domains.
- Uses native bridge on desktop/Android (`ivaDesktop` / `AndroidBridge`) and `fetch` in browsers.
- Sends **no personal or financial data**; only public rate data is cached/displayed.

### 📅 Module: jdate.js
- Borkowski conversion algorithm (reference `jalaali-js v2`) for 1800–2256 CE
- Native Jalali date picker for every `type="date"` field
- Storage stays Gregorian ISO; only display/picking is Jalali.

### 📊 Module: charts.js
- `sparkline`, `bars`, `line`, `donut`, `ring`, `animate`

### 🚀 Module: app.js
- Hash routing (`#/overview`, `#/transactions`, `#/tools`...)
- 9 pages (Overview, Transactions, Accounts, Budgets, Goals, Debts, Reports, Tools, Settings)
- Modal forms + Jalali picker integration
- Event delegation and keyboard shortcuts
- Undo via snapshots

### 🤝 Contributing

1. **Fork** the repository
2. Create a **descriptive branch** (e.g., `feature/recurring-transactions`)
3. Keep changes **small and focused**
4. Run `node --check js/*.js`
5. **Test** light/dark mode and FA/EN languages
6. Open a **Pull Request** with a clear description
