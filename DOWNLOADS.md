# 📦 IVA Finance 1.0.2 — راهنمای دانلود و انتخاب نسخه | Download & File Guide

> **🇮🇷 بخش فارسی در پایین همین صفحه | 🇬🇧 English section at the bottom**
> [فارسی ← برو پایین](#-بخش-فارسی) · [English ↓ scroll down](#-english-section)

---

# 🇮🇷 بخش فارسی

## ✨ IVA چیست؟

**IVA** یک پلتفرم **حسابداری شخصی** رایگان و متن‌باز (MIT) است که **۱۰۰٪ آفلاین** کار می‌کند:

- 🔒 **بدون اینترنت** — حتی یک درخواست شبکه هم ارسال نمی‌شود؛ اطلاعات مالی شما فقط روی دستگاه خودتان است
- 🌍 **دوزبانه کامل** — فارسی (تقویم شمسی) و انگلیسی با پشتیبانی واقعی RTL/LTR
- 💰 **کامل** — تراکنش، حساب، بودجه، هدف پس‌انداز، بدهی/طلب، نمودارهای زنده و گزارش‌های ۳/۶/۱۲ ماهه
- 📤 **مالک داده‌ی خودتان** — خروجی CSV و پشتیبان‌گیری JSON در هر لحظه

نسخه فعلی: **1.0.2**

---

## 📥 کدام فایل را دانلود کنم؟

| فایل | پلتفرم | برای چه سیستمی | حجم تقریبی |
|---|---|---|---|
| `IVA-Setup-1.0.2-x64.exe` | 🪟 ویندوز | ویندوز **۶۴ بیتی** (۷، ۸، ۸.۱، ۱۰، ۱۱) | ~۶۳MB |
| `IVA-Setup-1.0.2-ia32.exe` | 🪟 ویندوز | هر دو! ویندوز **۳۲ بیتی و ۶۴ بیتی** | ~۵۹MB |
| `IVA-1.0.2-amd64.deb` | 🐧 لینوکس | دبیان/اوبونتو/مینت/... با CPU **x86_64** | ~۶۲MB |
| `IVA-1.0.2-arm64.deb` | 🐧 لینوکس | دبیان‌بیس‌ها با CPU **ARM64** (رزبری‌پای ۴/۵ و...) | ~۵۸MB |
| `IVA-1.0.2-android-universal.apk` | 📱 اندروید | **همه گوشی و تبلت‌ها** — اندروید ۱۰ تا ۱۶، هر پردازنده‌ای | ~۲.۷MB |

### 🤔 سریع بگو، کدام را بگیرم؟

- **گوشی یا تبلت اندرویدی (۱۰ به بالا)** → فایل **APK** — روی هر گوشی‌ای نصب می‌شود، نیازی به چک کردن معماری نیست
- **کامپیوتر ویندوزی معمولی** → فایل **x64** (تقریباً همه ویندوزهای امروزی ۶۴ بیتی‌اند)
- **ویندوز خیلی قدیمی ۳۲ بیتی یا شک داری** → فایل **ia32** (روی هر دو نوع نصب می‌شود)
- **لینوکس** → اول دستور `uname -m` را بزن:
  - جواب `x86_64` بود → فایل **amd64**
  - جواب `aarch64` بود → فایل **arm64**

### 🔍 از کجا بفهمم ویندوزم ۳۲ بیتی است یا ۶۴؟

`Settings` (تنظیمات) ← `System` ← `About` ← قسمت **System type** را ببین:
- `64-bit operating system` → نسخه **x64**
- `32-bit operating system` → نسخه **ia32**

یا در CMD: `echo %PROCESSOR_ARCHITECTURE%` (خروجی `AMD64` یعنی ۶۴ بیتی)

---

## 🛠️ راهنمای نصب

### 🪟 ویندوز
1. فایل `IVA-Setup-1.0.2-x64.exe` (یا ia32) را دانلود کنید
2. دوبار کلیک کنید → **Next** → مسیر نصب (اختیاری) → **Install**
3. آیکون IVA روی دسکتاپ و منوی استارت ساخته می‌شود — تمام! ✅

> 💡 **ویندوز ۷:** اگر ویندوزتان به‌روز نیست، ممکن است دو به‌روزرسانی مایکروسافت لازم باشد:
> [KB2999226](https://www.microsoft.com/en-us/download/details.aspx?id=49093) و [Visual C++ 2015-2019](https://www.microsoft.com/en-us/download/details.aspx?id=48145)

> 🔄 **روی نسخه قبلی نصب کنید مشکلی ندارد** — تراکنش‌ها و تنظیمات شما کامل حفظ می‌شود.

### 🐧 لینوکس (دبیان، اوبونتو، مینت و...)
```bash
sudo dpkg -i IVA-1.0.2-amd64.deb
sudo apt-get install -f -y   # فقط بار اول، برای نصب وابستگی‌ها
```
یا فایل را دابل‌کلیک کنید تا با Software Center باز شود.
اپ در منوی برنامه‌ها با نام **IVA Finance** (دسته Finance) ظاهر می‌شود.

### 📱 اندروید (۱۰ به بالا)
1. فایل APK را دانلود کنید
2. روی فایل بزنید؛ اگر پرسید، اجازه **«نصب از منابع ناشناس»** را بدهید
3. نصب → آیکون IVA در منوی گوشی — تمام! ✅
4. خروجی‌های CSV/JSON اپ مستقیم در پوشه **Downloads** گوشی ذخیره می‌شوند

> 📶 اندروید: این اپ **هیچ مجوزی (permission) ندارد — حتی اینترنت!** یعنی سیستم‌عامل خودش جلوی هر اتصالی را می‌گیرد.

---

## 🔒 حریم خصوصی و داده‌های شما

| سوال | جواب |
|---|---|
| داده‌ها کجا ذخیره می‌شوند؟ | ویندوز: `%AppData%\IVA Finance` · لینوکس: `~/.config/IVA Finance` · اندروید: حافظه خصوصی خود اپ |
| با نصب نسخه جدید پاک می‌شود؟ | **خیر** — نصب‌کننده فقط فایل‌های برنامه را عوض می‌کند |
| با حذف (Uninstall) اپ پاک می‌شود؟ | ویندوز/لینوکس: **خیر**، داده می‌ماند · اندروید: بله، حذف اپ = حذف داده (پس قبلش از تنظیمات پشتیبان JSON بگیرید) |
| اپ به اینترنت وصل می‌شود؟ | **هرگز** — بدون تحلیل، ردیابی، تبلیغ یا آپدیت خودکار |
| چطور آپدیت کنم؟ | نسخه جدید را از همین صفحه دانلود و روی قبلی نصب کنید |

---

## 🔐 چک سلامت فایل (اختیاری ولی توصیه‌شده)

بعد از دانلود می‌توانید مطمئن شوید فایل سالم رسیده:

**ویندوز (CMD):**
```
certutil -hashfile IVA-Setup-1.0.2-x64.exe SHA256
```
**لینوکس/مک:**
```bash
sha256sum IVA-1.0.2-amd64.deb
```

| فایل | SHA256 |
|---|---|
| `IVA-Setup-1.0.2-x64.exe` | `3c2da3d77618ca11ef56a0df1ef4a8808e7f3b8789ec00ef7609770349a3ac09` |
| `IVA-Setup-1.0.2-ia32.exe` | `7ee7355cef5c1135264139de45562394ce4b128097834d7997e5881b0198df04` |
| `IVA-1.0.2-android-universal.apk` | `4cc1d160ac51b5b09f3a283b2be89b3b0ee244f45489272b97f7f7729dc86ae0` |

| فایل | MD5 |
|---|---|
| `IVA-1.0.2-amd64.deb` | `b16511f355a83cf28302d1cef84fddc2` |
| `IVA-1.0.2-arm64.deb` | `fcd802489d19ed385c1923a5e0cd9f13` |

---

## ❓ سوالات پرتکرار

**فرق x64 و ia32 چیست؟** — معماری پردازنده. x64 فقط روی ویندوز ۶۴ بیتی نصب می‌شود؛ ia32 روی هر دو. ویندوزهای امروزی تقریباً همگی ۶۴ بیتی‌اند.

**فرق amd64 و arm64 چیست؟** — هر دو برای لینوکس‌اند: amd64 برای پردازنده‌های اینتل/AMD (اکثر کامپیوترها)، arm64 برای پردازنده‌های ARM مثل رزبری‌پای. با دستور `uname -m` مشخص می‌شود.

**چرا اپ این حجم دارد؟** — چون کل رابط کاربری و موتور نمایش داخل خودش جاسازی شده و به هیچی بیرون نیاز ندارد؛ به همین دلیل هم ۱۰۰٪ آفلاین است.

**نسخه اندروید چرا فقط ۲.۷ مگ است؟** — چون بدون هیچ کتابخانه اضافه ساخته شده و روی تمام پردازنده‌ها اجرا می‌شود.

**آیا رایگان است؟** — بله، کد MIT و استفاده کاملاً رایگان. [سورس پروژه](https://github.com/Kourosh242/iva-personal-finance)

---

<div align="center">
<sub>IVA — پولت را بفهم، آینده‌ات را بساز · Understand your money, build your future</sub>
</div>

---

---

# 🇬🇧 English Section

## ✨ What is IVA?

**IVA** is a free, open-source (MIT) **personal finance platform** that works **100% offline**:

- 🔒 **No internet** — it never sends a single network request; your financial data stays on your device only
- 🌍 **Fully bilingual** — Persian (with Jalali calendar) and English with real RTL/LTR support
- 💰 **Complete** — transactions, accounts, budgets, savings goals, debts/credits, live charts and 3/6/12-month reports
- 📤 **You own your data** — CSV export and JSON backup anytime

Current version: **1.0.2**

---

## 📥 Which file should I download?

| File | Platform | For | Approx. size |
|---|---|---|---|
| `IVA-Setup-1.0.2-x64.exe` | 🪟 Windows | **64-bit** Windows (7, 8, 8.1, 10, 11) | ~63MB |
| `IVA-Setup-1.0.2-ia32.exe` | 🪟 Windows | **Both!** 32-bit **and** 64-bit Windows | ~59MB |
| `IVA-1.0.2-amd64.deb` | 🐧 Linux | Debian/Ubuntu/Mint/... with **x86_64** CPU | ~62MB |
| `IVA-1.0.2-arm64.deb` | 🐧 Linux | Debian-based with **ARM64** CPU (Raspberry Pi 4/5...) | ~58MB |
| `IVA-1.0.2-android-universal.apk` | 📱 Android | **Every phone & tablet** — Android 10 to 16, any CPU | ~2.7MB |

### 🤔 Quick answer — which one?

- **Android phone/tablet (10+)** → the **APK** — installs on any device, no need to check architecture
- **A regular Windows PC** → the **x64** file (almost all modern Windows are 64-bit)
- **A very old 32-bit Windows, or not sure** → the **ia32** file (installs on both)
- **Linux** → run `uname -m` first:
  - `x86_64` → the **amd64** file
  - `aarch64` → the **arm64** file

### 🔍 How do I know if my Windows is 32 or 64-bit?

`Settings` → `System` → `About` → check **System type**:
- `64-bit operating system` → the **x64** version
- `32-bit operating system` → the **ia32** version

Or in CMD: `echo %PROCESSOR_ARCHITECTURE%` (`AMD64` means 64-bit)

---

## 🛠️ Installation

### 🪟 Windows
1. Download `IVA-Setup-1.0.2-x64.exe` (or ia32)
2. Double-click → **Next** → choose folder (optional) → **Install**
3. IVA shortcuts appear on Desktop & Start Menu — done! ✅

> 💡 **Windows 7:** if your system isn't updated, you may need two Microsoft updates:
> [KB2999226](https://www.microsoft.com/en-us/download/details.aspx?id=49093) and [Visual C++ 2015-2019](https://www.microsoft.com/en-us/download/details.aspx?id=48145)

> 🔄 **Installing over a previous version is safe** — your transactions and settings are fully preserved.

### 🐧 Linux (Debian, Ubuntu, Mint, ...)
```bash
sudo dpkg -i IVA-1.0.2-amd64.deb
sudo apt-get install -f -y   # first time only, installs dependencies
```
Or double-click the file to open it with your Software Center.
The app appears in your applications menu as **IVA Finance** (Finance category).

### 📱 Android (10+)
1. Download the APK file
2. Tap it; if asked, allow **"Install from unknown sources"**
3. Install → IVA icon in your app drawer — done! ✅
4. CSV/JSON exports are saved directly to your phone's **Downloads** folder

> 📶 Android: this app has **no permissions at all — not even internet!** The OS itself blocks any connection.

---

## 🔒 Privacy & your data

| Question | Answer |
|---|---|
| Where is my data stored? | Windows: `%AppData%\IVA Finance` · Linux: `~/.config/IVA Finance` · Android: the app's private storage |
| Will updating erase it? | **No** — the installer only replaces app files |
| Will uninstalling erase it? | Windows/Linux: **No**, data stays · Android: yes, uninstalling removes data (make a JSON backup from Settings first) |
| Does the app connect to the internet? | **Never** — no analytics, tracking, ads or auto-updates |
| How do I update? | Download the new version from this page and install it over the old one |

---

## 🔐 Verify your download (optional but recommended)

**Windows (CMD):**
```
certutil -hashfile IVA-Setup-1.0.2-x64.exe SHA256
```
**Linux/macOS:**
```bash
sha256sum IVA-1.0.2-amd64.deb
```

| File | SHA256 |
|---|---|
| `IVA-Setup-1.0.2-x64.exe` | `3c2da3d77618ca11ef56a0df1ef4a8808e7f3b8789ec00ef7609770349a3ac09` |
| `IVA-Setup-1.0.2-ia32.exe` | `7ee7355cef5c1135264139de45562394ce4b128097834d7997e5881b0198df04` |
| `IVA-1.0.2-android-universal.apk` | `4cc1d160ac51b5b09f3a283b2be89b3b0ee244f45489272b97f7f7729dc86ae0` |

| File | MD5 |
|---|---|
| `IVA-1.0.2-amd64.deb` | `b16511f355a83cf28302d1cef84fddc2` |
| `IVA-1.0.2-arm64.deb` | `fcd802489d19ed385c1923a5e0cd9f13` |

---

## ❓ FAQ

**x64 vs ia32?** — CPU architecture. x64 installs only on 64-bit Windows; ia32 installs on both. Almost all modern Windows are 64-bit.

**amd64 vs arm64?** — Both are Linux builds: amd64 for Intel/AMD processors (most PCs), arm64 for ARM chips like Raspberry Pi. `uname -m` tells you which.

**Why is the desktop app this big?** — The entire UI and rendering engine are bundled inside, so it needs nothing external — that's exactly why it's 100% offline.

**Why is the Android app only 2.7MB?** — It's built with zero extra libraries and runs on every CPU architecture.

**Is it free?** — Yes. MIT-licensed code, free to use. [Project source](https://github.com/Kourosh242/iva-personal-finance)

---

<div align="center">
<sub>IVA — Understand your money, build your future · پولت را بفهم، آینده‌ات را بساز</sub>
</div>
