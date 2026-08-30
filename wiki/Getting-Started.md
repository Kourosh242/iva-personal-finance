# 🚀 شروع به کار | Getting Started

> **🇮🇷 فارسی** | [🇬🇧 English](#-getting-started-english)

---

## 🇮🇷 شروع به کار با آیوا

### 💡 دو راه برای استفاده

1. **نرم‌افزار آماده (ساده‌ترین راه)** — فایل نصبی ویندوز/لینوکس/اندروید از [صفحهٔ ریلیز](https://github.com/Kourosh242/iva-personal-finance/releases/latest) دانلود کنید؛ جزئیات کامل در صفحهٔ [دانلود و نصب](Downloads)
2. **نسخهٔ وب (مرورگر / PWA)** — بدون هیچ نصبی، با مرورگر؛ راهنمای زیر

### نصب و اجرا (نسخهٔ وب)

IVA یک اپلیکیشن تحت وب بدون نیاز به نصب است. دو روش برای اجرا دارید:

#### روش ۱ — اجرای مستقیم (ساده)

```bash
# ۱. پروژه را Clone کنید
git clone https://github.com/Kourosh242/iva-personal-finance.git

# ۲. وارد پوشه شوید
cd iva-personal-finance

# ۳. فایل index.html را با مرورگر باز کنید
```

#### روش ۲ — اجرا با سرور محلی (توصیه‌شده)

```bash
# گزینه A — با Node.js
npx serve .

# گزینه B — با پایتون
python3 -m http.server 8080
```

سپس مرورگر را به آدرس `http://localhost:8080` باز کنید.

### شروع استفاده

۱. **اولین اجرا**: صفحه خوش‌آمدگویی ظاهر می‌شود و از شما نام‌تان را می‌پرسد.
۲. **داده‌های نمونه**: چک‌باکس «داده نمونه» به‌صورت پیش‌فرض فعال است؛ با تأیید، ۶ ماه تراکنش، حساب، بودجه، هدف و بدهی دمو بارگذاری می‌شود.
۳. **کاوش آزاد**: می‌توانید دادهٔ نمونه را ویرایش، از تنظیمات دوباره بارگذاری یا با «پاک‌سازی همه داده‌ها» حذف کنید.

### تنظیمات اولیه

از صفحه **تنظیمات** (آیکون چرخ‌دنده) می‌توانید:

- 🌐 **زبان**: بین فارسی و انگلیسی جابه‌جا شوید
- 🎨 **پوسته**: روشن، تاریک یا سیستمی
- 💰 **واحد پول**: تومان یا ریال
- ✏️ **نام نمایشی**: تغییر نام

### نصب PWA

در مرورگرهای کروم و اج:
۱. دکمه نصب (📱) در نوار آدرس یا در صفحه تنظیمات ظاهر می‌شود
۲. روی آن کلیک کنید تا IVA مثل یک اپ واقعی نصب شود
۳. کاملاً آفلاین کار می‌کند

---

## 🚀 Getting Started (English)

### 💡 Two ways to use it

1. **Packaged app (easiest)** — download the Windows/Linux/Android installer from the [release page](https://github.com/Kourosh242/iva-personal-finance/releases/latest); full details in [Downloads & Installation](Downloads)
2. **Web version (browser / PWA)** — no install at all; see below

### Setup & Run (web version)

IVA is a web app with no installation required. Two ways to run:

#### Method 1 — Direct (simple)

```bash
# 1. Clone the project
git clone https://github.com/Kourosh242/iva-personal-finance.git

# 2. Enter the folder
cd iva-personal-finance

# 3. Open index.html in your browser
```

#### Method 2 — Local server (recommended)

```bash
# Option A — Node.js
npx serve .

# Option B — Python
python3 -m http.server 8080
```

Then open `http://localhost:8080` in your browser.

### First Launch

1. **Welcome screen**: Enter your name when prompted
2. **Sample data**: the "sample data" checkbox is checked by default; confirming loads 6 months of demo transactions, accounts, budgets, goals and debts
3. **Explore**: Edit the demo freely, reload it from Settings, or erase it with "Erase all data"

### Initial Configuration

From the **Settings** page (gear icon):

- 🌐 **Language**: Toggle between Persian and English
- 🎨 **Theme**: Light, Dark, or System mode
- 💰 **Currency**: Toman or Rial display
- ✏️ **Display name**: Change your name

### PWA Installation

On Chrome and Edge browsers:
1. The install button (📱) appears in the address bar or on Settings page
2. Click it to install IVA like a native app
3. Works fully offline