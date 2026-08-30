<div align="center">
  <img src="assets/iva-logo.png" width="120" alt="لوگوی IVA">
</div>

<div align="center">

# پلتفرم حسابداری آیوا | IVA Finance Platform

**پولت را بفهم، آینده‌ات را بساز.**
**Understand your money, build your future.**

یک پلتفرم حسابداری شخصی دو زبانه، متن‌باز، آفلاین‑محور و کاملاً خصوصی — ساخته‌شده با HTML، CSS و JavaScript خالص، بدون هیچ وابستگی خارجی.
A bilingual, open-source, offline-first personal finance platform — built with pure HTML, CSS & JavaScript, zero dependencies.

[**🇮🇷 بخش فارسی**](#-بخش-فارسی) • [**🌍 English Section**](#-english-section)
<br>
[![HTML5](https://img.shields.io/badge/HTML5-pure-E34F27?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-responsive-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-vanilla-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License MIT](https://img.shields.io/badge/license-MIT-10bfa4)](LICENSE)
[![PWA](https://img.shields.io/badge/PWA-offline-6756e8)](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)
[![Web Platform](https://img.shields.io/badge/web%20platform-2.0-8f6ef2)](CHANGELOG.md)
[![Apps](https://img.shields.io/badge/installers-1.0.2-10bfa4)](https://github.com/Kourosh242/iva-personal-finance/releases/tag/1.0.2)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen)](CONTRIBUTING.md)

</div>

![پوستر پروژه IVA](assets/iva-repo-poster.png)

---

## فهرست مطالب | Table of Contents

- [🇮🇷 بخش فارسی](#-بخش-فارسی--persian-section)
  - [معرفی](#-معرفی)
  - [نسخه‌ها](#-نسخهها)
  - [ویژگی‌ها](#-ویژگیها)
  - [دانلود و نصب (اپ‌های آماده)](#-دانلود-و-نصب-اپهای-آماده)
  - [بررسی سلامت فایل](#-بررسی-سلامت-فایل-اختیاری-ولی-توصیهشده)
  - [حریم خصوصی و داده‌های شما](#-حریم-خصوصی-و-دادههای-شما)
  - [سوالات پرتکرار](#-سوالات-پرتکرار)
  - [شروع سریع (وب / توسعه)](#-شروع-سریع-وب--توسعه)
  - [داده‌های نمایشی (دمو)](#-دادههای-نمایشی-دمو)
  - [ساختار پروژه](#-ساختار-پروژه)
  - [حریم خصوصی و امنیت](#-حریم-خصوصی-و-امنیت)
  - [مجوز](#-مجوز)
- [🌍 English Section](#-english-section)
  - [Introduction](#-introduction)
  - [Versions](#-versions)
  - [Features](#-features)
  - [Download & Installation (packaged apps)](#-download--installation-packaged-apps)
  - [Verify your download](#-verify-your-download-optional-but-recommended)
  - [Privacy & your data](#-privacy--your-data)
  - [FAQ](#-faq)
  - [Quick Start (web / development)](#-quick-start-web--development)
  - [Sample data (demo)](#-sample-data-demo)
  - [Project Structure](#-project-structure)
  - [Privacy & Security](#-privacy--security)
  - [License](#-license)

---

# 🇮🇷 بخش فارسی | Persian Section

---

## 📖 معرفی

**IVA** یک **پلتفرم حسابداری شخصی** کامل، متن‌باز و آفلاین‑محور است که با **HTML، CSS و JavaScript خالص** (بدون هیچ فریم‌ورک، بیلد استپ یا وابستگی خارجی) ساخته شده است.

داده‌های مالی شما **فقط روی دستگاه خودتان** ذخیره می‌شوند (LocalStorage مرورگر / حافظهٔ خصوصی اپ دسکتاپ و اندروید) و هیچ اطلاعاتی به سرور شما ارسال نمی‌شود. بنابراین IVA:

- ✅ **کاملاً خصوصی** — بدون تحلیل، ردیابی، تبلیغ یا آپدیت خودکار
- ✅ **آفلاین‑محور** — خودِ داده‌ها و همهٔ محاسبات روی دستگاه شما انجام می‌شود
- ✅ **کاملاً رایگان** — متن‌باز با مجوز MIT
- ✅ **دوزبانه کامل** — فارسی (تقویم شمسی) و انگلیسی با پشتیبانی واقعی RTL/LTR
- ✅ **مالک داده‌ی خودتان** — خروجی CSV و پشتیبان‌گیری JSON در هر لحظه
- ✅ **ابزارها و تقویم شمسی واقعی** — انتخابگر تاریخ شمسی بومی + جعبه‌ابزار مالی

نسخهٔ ۲ بازنویسی کاملی است با موتور نمودار SVG اختصاصی، تقویم شمسی واقعی، محاسبات هوشمند، قابلیت برگردان (Undo)، جعبه‌ابزار مالی و طراحی بانکی حرفه‌ای با پشتیبانی از حالت روز و شب.

---

## 🏷️ نسخه‌ها

این پروژه دو خط نسخه‌سازی دارد و هر دو به‌صورت موازی به‌روز می‌شوند:

| محصول | نسخهٔ فعلی | توضیح |
|---|---|---|
| 🌐 **پلتفرم وب** (این ریپو / GitHub Pages) | **2.0** | هستهٔ اصلی پروژه — همان کدی که در این ریپو می‌بینید |
| 📦 **اپ‌های نصبی** (ویندوز، لینوکس، اندروید) | **1.0.2** | بسته‌های آمادهٔ نصب که در [ریلیز](https://github.com/Kourosh242/iva-personal-finance/releases/tag/1.0.2) قابل دانلود هستند |

> به‌عبارت ساده: اگر می‌خواهید از طریق مرورگر یا PWA استفاده کنید → **پلتفرم وب 2.0** · اگر فایل نصبی می‌خواهید → **اپ‌های 1.0.2**

---

## ✨ ویژگی‌ها

### 📊 داشبورد و تحلیل هوشمند
| ویژگی | توضیح |
|-------|-------|
| **دارایی خالص** | نمایش ثروت واقعی با انیمیشن شمارنده |
| **درآمد و هزینه ماهانه** | محاسبه خودکار از تراکنش‌ها با نمودار اسپارک‌لاین |
| **نمودار جریان نقدی** | ۶ ماه گذشته به صورت میله‌ای گروهی |
| **دونات دسته‌بندی** | سهم هر دسته در هزینه‌های ماه جاری |
| **سلامت مالی** | نمره ترکیبی از پس‌انداز، بودجه و بدهی با حلقه پیشرفت |
| **تحلیل‌های هوشمند** | هشدار بودجه، نرخ پس‌انداز، پیش‌بینی اهداف، بزرگ‌ترین هزینه |

### 💳 مدیریت کامل مالی
| ویژگی | توضیح |
|-------|-------|
| **تراکنش‌ها** | ثبت، ویرایش، حذف با قابلیت برگردان (Undo) + جستجوی زنده |
| **حساب‌ها** | بانک، کارت، کیف پول، وجه نقد — همگام‌سازی خودکار موجودی |
| **بودجه‌بندی** | سقف هزینه به‌ازای هر دسته + هشدار نزدیک‌شدن به سقف |
| **اهداف مالی** | تعریف هدف، افزودن پس‌انداز، پیش‌بینی زمان دستیابی |
| **بدهی و طلب** | پیگیری اقساط با سررسید و شمارش معکوس |

### 🧰 ابزارهای مالی
| ویژگی | توضیح |
|-------|-------|
| **نرخ ارز، طلا و سکه** | بروزرسانی دستی نرخ بازار آزاد با کش محلی |
| **ارز دیجیتال** | قیمت تومانی از بازار داخل ایران + پشتیبان سراسری |
| **مبدل ارز** | تبدیل سریع بین واحدها با نرخ زنده یا دستی |
| **محاسبه‌گر وام بانک مرکزی** | اقساط مساوی، کارمزدی (قرض‌الحسنه) و فلت + جدول بازپرداخت |
| **نرخ روز (تورم)** | ارزش معادل پول و محاسبهٔ مهریه به نرخ روز |
| **نشتی‌های مالی** | تخمین سالانهٔ هزینه‌های کوچک مثل قهوه، سیگار و تاکسی |
| **شناسایی بانک** | تشخیص بانک از شش رقم اول کارت با رنگ و لوگوی محلی |
| **یادداشت‌های مالی** | یادداشت‌های خصوصی آفلاین تا ۵۰۰۰ نویسه و ۵۰۰ مورد |

### 🔍 جستجو، فیلتر و گزارش
- **جستجوی زنده** در تمام تراکنش‌ها با پشتیبانی از اعداد فارسی
- **فیلتر** بر اساس نوع (درآمد/هزینه)، دسته، حساب و ماه
- **مرتب‌سازی** بر اساس تاریخ و مبلغ
- **گزارش‌های ۳/۶/۱۲ ماهه** با نمودار خطی روند خالص
- **خروجی CSV** با پشتیبانی از کاما و نقل‌قول صحیح (BOM برای اکسل)
- **پشتیبان‌گیری JSON** + بازیابی از فایل پشتیبان با تأیید و Undo

### 🌍 رابط کاربری حرفه‌ای
- **دوزبانه کامل** — فارسی و انگلیسی با RTL/LTR واقعی
- **تقویم شمسی** با انتخابگر بومی (`Intl.DateTimeFormat` و الگوریتم دقیق Borkowski)
- **حالت روشن/تاریک/سیستمی** با ذخیره دائمی انتخاب
- **فونت وزیرمتن** متغیر — جاسازی‌شده در پروژه، کاملاً آفلاین
- **طراحی واکنش‌گرا** — دسکتاپ، تبلت، موبایل
- **دسترس‌پذیری کامل** — ARIA، Focus Trap، میان‌برهای صفحه‌کلید
- **PWA** — نصب مثل یک اپ واقعی با آیکون‌های maskable

---

## 📥 دانلود و نصب (اپ‌های آماده)

فایل‌های نصبی **نسخهٔ 1.0.2** در [صفحهٔ ریلیز](https://github.com/Kourosh242/iva-personal-finance/releases/tag/1.0.2) قرار دارند. راهنمای کامل در [DOWNLOADS.md](DOWNLOADS.md) و [ویکی — دانلود](wiki/Downloads.md):

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

### 🛠️ راهنمای نصب

#### 🪟 ویندوز
1. فایل `IVA-Setup-1.0.2-x64.exe` (یا ia32) را دانلود کنید
2. دوبار کلیک کنید → **Next** → مسیر نصب (اختیاری) → **Install**
3. آیکون IVA روی دسکتاپ و منوی استارت ساخته می‌شود — تمام! ✅

> 💡 **ویندوز ۷:** اگر ویندوزتان به‌روز نیست، ممکن است دو به‌روزرسانی مایکروسافت لازم باشد:
> [KB2999226](https://www.microsoft.com/en-us/download/details.aspx?id=49093) و [Visual C++ 2015-2019](https://www.microsoft.com/en-us/download/details.aspx?id=48145)

> 🔄 **روی نسخهٔ قبلی نصب کنید مشکلی ندارد** — تراکنش‌ها و تنظیمات شما کامل حفظ می‌شود.

#### 🐧 لینوکس (دبیان، اوبونتو، مینت و...)
```bash
sudo dpkg -i IVA-1.0.2-amd64.deb
sudo apt-get install -f -y   # فقط بار اول، برای نصب وابستگی‌ها
```
یا فایل را دابل‌کلیک کنید تا با Software Center باز شود.
اپ در منوی برنامه‌ها با نام **IVA Finance** (دستهٔ Finance) ظاهر می‌شود.

#### 📱 اندروید (۱۰ به بالا)
1. فایل APK را دانلود کنید
2. روی فایل بزنید؛ اگر پرسید، اجازهٔ **«نصب از منابع ناشناس»** را بدهید
3. نصب → آیکون IVA در منوی گوشی — تمام! ✅
4. خروجی‌های CSV/JSON اپ مستقیم در پوشهٔ **Downloads** گوشی ذخیره می‌شوند

> 📶 اندروید: این اپ **هیچ مجوزی (permission) ندارد — حتی اینترنت!** یعنی سیستم‌عامل خودش جلوی هر اتصالی را می‌گیرد.

---

## 🔐 بررسی سلامت فایل (اختیاری، ولی توصیه‌شده)

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

> 🔐 این مقادیر مربوط به بیلد منتشرشدهٔ 1.0.2 هستند؛ اگر بیلد بعدی منتشر شود، چک‌سام را از صفحهٔ ریلیز به‌روز کنید و فقط از فایل‌های رسمی ریلیز استفاده کنید.

---

## 🔒 حریم خصوصی و داده‌های شما

| سوال | جواب |
|---|---|
| داده‌ها کجا ذخیره می‌شوند؟ | ویندوز: `%AppData%\\IVA Finance` · لینوکس: `~/.config/IVA Finance` · اندروید: حافظهٔ خصوصی خود اپ · وب: LocalStorage مرورگر |
| با نصب نسخهٔ جدید پاک می‌شود؟ | **خیر** — نصب‌کننده فقط فایل‌های برنامه را عوض می‌کند |
| با حذف (Uninstall) اپ پاک می‌شود؟ | ویندوز/لینوکس: **خیر**، داده می‌ماند · اندروید: بله، حذف اپ = حذف داده (پس قبلش از تنظیمات پشتیبان JSON بگیرید) |
| اپ به اینترنت وصل می‌شود؟ | **داده‌های مالی هرگز**. فقط بخش «ابزارها»، وقتی شما دکمهٔ بروزرسانی نرخ را بزنید، درخواست عمومی به منابع عمومی نرخ ارز/طلا/کریپتو می‌فرستد؛ هیچ دادهٔ شخصی ارسال نمی‌شود |
| چطور آپدیت کنم؟ | نسخهٔ جدید را از همین صفحهٔ ریلیز دانلود و روی قبلی نصب کنید |

---

## ❓ سوالات پرتکرار

**فرق x64 و ia32 چیست؟** — معماری پردازنده. x64 فقط روی ویندوز ۶۴ بیتی نصب می‌شود؛ ia32 روی هر دو. ویندوزهای امروزی تقریباً همگی ۶۴ بیتی‌اند.

**فرق amd64 و arm64 چیست؟** — هر دو برای لینوکس‌اند: amd64 برای پردازنده‌های اینتل/AMD (اکثر کامپیوترها)، arm64 برای پردازنده‌های ARM مثل رزبری‌پای. با دستور `uname -m` مشخص می‌شود.

**چرا اپ دسکتاپ این حجم را دارد؟** — چون کل رابط کاربری و موتور نمایش داخل خودش جاسازی شده و به هیچ چیز بیرونی نیاز ندارد؛ به همین دلیل هم آفلاین کار می‌کند.

**نسخهٔ اندروید چرا فقط ۲.۷ مگابایت است؟** — چون بدون هیچ کتابخانهٔ اضافه‌ای ساخته شده و روی تمام پردازنده‌ها اجرا می‌شود.

**آیا رایگان است؟** — بله، کد MIT و استفاده کاملاً رایگان. [سورس پروژه](https://github.com/Kourosh242/iva-personal-finance)

**دادهٔ دمو را چطور حذف کنم؟** — از **تنظیمات ← داده‌ها ← پاک‌سازی همه داده‌ها**.

**دمو برای چه چیزی است؟** — برای اینکه در اولین اجرا همهٔ نمودارها و صفحات را با یک مثال واقعی‌نگر ببینید؛ بعداً می‌توانید داده‌های واقعی خودتان را جایگزین کنید.

سوالات فنی بیشتر در [ویکی — سوالات متداول](wiki/FAQ.md)

---

## 🚀 شروع سریع (وب / توسعه)

اگر توسعه‌دهنده هستید یا می‌خواهید نسخهٔ وب را اجرا کنید، هیچ نصب یا دستور خاصی لازم نیست:

```bash
# گزینهٔ ۱: Clone کنید و index.html را باز کنید
git clone https://github.com/Kourosh242/iva-personal-finance.git
cd iva-personal-finance
# index.html را در مرورگر باز کنید

# گزینهٔ ۲: با یک سرور محلی (توصیه می‌شود برای PWA و فونت)
npx serve .
# یا
python3 -m http.server 8080
# سپس به http://localhost:8080 بروید
```

> **توصیه:** برای تجربهٔ کامل PWA و بارگذاری صحیح فونت، از سرور محلی استفاده کنید. راهنمای آپلود و فعال‌سازی GitHub Pages در [GITHUB_UPLOAD_GUIDE_FA.md](GITHUB_UPLOAD_GUIDE_FA.md) است.

---

## 🧪 داده‌های نمایشی (دمو)

در اولین اجرا، صفحهٔ خوش‌آمدگویی از شما نام‌تان را می‌پرسد و **چک‌باکس «داده نمونه» به‌صورت پیش‌فرض فعال** است. با تأیید، مجموعه‌ای واقعی‌نگر بارگذاری می‌شود تا همهٔ نمودارها، تحلیل‌ها و ابزارها را از همان نگاه اول ببینید:

- ✅ ۶ ماه تراکنش (حقوق، فریلانس، اجاره، خرید، قبوض و...)
- ✅ ۴ حساب با شمارهٔ کارت دمو و لوگوی بانک
- ✅ ۵ بودجه، ۳ هدف مالی و ۳ بدهی/طلب
- ✅ ۲ یادداشت نمونه در جعبه‌ابزار

اگر نخواستید دمو بارگذاری شود، تیک آن را بردارید و با دادهٔ خالی شروع کنید. در هر زمان:
- **تنظیمات ← داده نمونه ← بارگذاری داده نمونه** → دمو دوباره لود می‌شود
- **تنظیمات ← داده‌ها ← پاک‌سازی همه داده‌ها** → همه‌چیز (شامل دمو) پاک می‌شود
- هر دو عمل با دکمهٔ **برگردان (Undo)** قابل بازگردانی‌اند

---

## 📁 ساختار پروژه

```
iva-personal-finance/
│
├── index.html              # نقطهٔ ورود — اپلیکیشن تک صفحه‌ای (SPA) + CSP
├── style.css               # سیستم طراحی کامل دو-تمه (روشن/تاریک)
├── site.webmanifest        # مانیفست PWA
├── sw.js                   # سرویس ورکر (Network-first + SWR)
│
├── js/
│   ├── i18n.js             # دیکشنری کامل فارسی/انگلیسی + متادیتا
│   ├── utils.js            # توابع امنیتی، فرمت پول، تاریخ شمسی، SVG
│   ├── store.js            # وضعیت، اعتبارسنجی، مهاجرت v1/v2→v3، دمو
│   ├── charts.js           # موتور نمودار SVG اختصاصی
│   ├── tools.js            # جعبه‌ابزار مالی (نرخ، وام، تورم، بانک، یادداشت)
│   ├── jdate.js            # تقویم و انتخابگر تاریخ شمسی (Borkowski)
│   └── app.js              # روتر، صفحات، فرم‌ها، اکشن‌ها
│
├── assets/                 # لوگو، تصاویر، آیکون‌های PWA
│   └── banks/              # لوگوهای بانک‌ها (محلی، آفلاین)
├── fonts/                  # فونت وزیرمتن (مجوز OFL)
├── .github/                # قالب‌های Issue/PR + Workflow GitHub Pages
├── docs/BRAND.md           # راهنمای برند
├── wiki/                   # ویکی پروژه (مستندات کامل)
│
├── README.md               # این فایل
├── DOWNLOADS.md            # راهنمای کامل دانلود و انتخاب نسخه
├── CHANGELOG.md            # تاریخچهٔ تغییرات
├── CONTRIBUTING.md         # راهنمای مشارکت
├── SECURITY.md             # سیاست امنیتی
├── CODE_OF_CONDUCT.md      # منشور رفتاری
├── ROADMAP.md              # نقشهٔ راه
├── GITHUB_UPLOAD_GUIDE_FA.md  # راهنمای آپلود و GitHub Pages (فارسی)
└── LICENSE                 # مجوز MIT
```

---

## 🔒 حریم خصوصی و امنیت

**هیچ دادهٔ مالی شما به هیچ سروری ارسال نمی‌شود.** همهٔ اطلاعات شما در `LocalStorage` مرورگر (یا حافظهٔ خصوصی اپ) ذخیره می‌شود و فقط روی دستگاه خودتان قابل دسترسی است.

برای اطمینان بیشتر:
- IVA هیچ تحلیل گوگل، ردیابی یا تله‌متری ندارد
- همهٔ ورودی‌ها با `U.esc()` پیش از درج در HTML امن می‌شوند (ضد XSS)
- همهٔ داده‌ها با `Store.sanitize()` پیش از ذخیره اعتبارسنجی و پاک‌سازی می‌شوند
- مهاجرت خودکار v1 / v2 → v3 بدون حذف داده
- سیاست امنیتی محتوا (CSP) محدودکنندهٔ اجرای اسکریپت و اتصال خارجی به منابع مجاز
- + پیوندهای خروجی با `rel="noopener noreferrer"`
- + قابلیت Undo برای همهٔ عملیات مخرب

> ⚠️ **بخش «ابزارها» به‌عنوان قابلیت اختیاری:** وقتی کاربر دکمهٔ «بروزرسانی نرخ‌ها» را می‌زند، اپ برای خواندن قیمت‌های عمومی به دامنه‌های مجاز (tgju، نو‌بیتکس، ارزدیجیتال، CoinGecko و ...) درخواست می‌فرستد. این درخواست‌ها **هیچ دادهٔ مالی یا شخصی کاربر ندارند**؛ نتایج فقط در حافظهٔ محلی کش می‌شوند.

---

## 📜 مجوز

این پروژه تحت مجوز **MIT** منتشر شده است. فونت Vazirmatn تحت مجوز **OFL** (فایل `fonts/OFL.txt`).

---

<div align="center">
  <sub>IVA — پولت را بفهم، آینده‌ات را بساز · Understand your money, build your future</sub>
</div>

---

---

# 🌍 English Section

---

## 📖 Introduction

**IVA** is a **comprehensive, open-source, offline-first personal finance platform** built with **pure HTML, CSS and JavaScript** — no frameworks, no build steps, no external dependencies.

Your financial data is stored **only on your device** (browser LocalStorage / the app's private storage) and never sent to your server. This means IVA is:

- ✅ **100% Private** — no analytics, tracking, ads or auto-updates
- ✅ **Offline-first** — all data and calculations happen on your device
- ✅ **100% Free** — open-source under the MIT license
- ✅ **Fully bilingual** — Persian (with Jalali calendar) and English with real RTL/LTR support
- ✅ **You own your data** — CSV export and JSON backup anytime
- ✅ **Built-in Tools & Jalali picker** — a local financial toolbox and a native Persian date picker

Version 2 is a complete rewrite featuring a custom SVG chart engine, real Jalali (Persian) calendar, intelligent analytics, undo support, a financial toolbox, and a professional banking-grade design with light/dark themes.

---

## 🏷️ Versions

This project has two parallel version tracks:

| Product | Current version | Description |
|---|---|---|
| 🌐 **Web platform** (this repo / GitHub Pages) | **2.0** | The core of the project — the exact code you see in this repo |
| 📦 **Packaged apps** (Windows, Linux, Android) | **1.0.2** | Ready-to-install builds available in the [release](https://github.com/Kourosh242/iva-personal-finance/releases/tag/1.0.2) |

> In short: using it in a browser or as a PWA → **web platform 2.0** · want an installer file → **apps 1.0.2**

---

## ✨ Features

### 📊 Dashboard & Smart Analytics
| Feature | Description |
|---------|-------------|
| **Net worth** | Real net worth with count-up animation |
| **Monthly income/expense** | Auto-calculated from transactions with sparkline charts |
| **Cash flow chart** | Last 6 months as a grouped bar chart |
| **Category donut** | Share of each category in current month's spending |
| **Financial health** | Composite score from savings, budgets and debt with a progress ring |
| **Smart insights** | Budget alerts, savings rate, goal ETA, biggest expense |

### 💳 Complete Finance Management
| Feature | Description |
|---------|-------------|
| **Transactions** | Add, edit, delete with Undo + live search |
| **Accounts** | Bank, card, wallet, cash — automatic balance syncing |
| **Budgets** | Per-category spending caps with over-limit warnings |
| **Goals** | Define goals, add funds, get ETA predictions |
| **Debts & credits** | Track installments with due dates and countdowns |

### 🧰 Financial Toolbox
| Feature | Description |
|---------|-------------|
| **FX, gold & coin rates** | On-demand free-market rates with local cache |
| **Crypto prices** | Toman prices from the Iranian market + global fallback |
| **Currency converter** | Fast conversion with live or manual rates |
| **CBI loan calculator** | Equal-installment, fee-only (Qarz) and flat modes + amortization table |
| **Day-rate / inflation** | Today's value of money and day-rate Mahr calculator |
| **Money leaks** | Estimate yearly small expenses (coffee, cigarettes, rides) |
| **Bank lookup** | Detect the bank from the first 6 digits of a card |
| **Financial notes** | Private up to 5000 chars and 500 notes |

### 🔍 Search, Filter & Reports
- **Live search** across all transactions with Persian digit support
- **Filter** by type (income/expense), category, account, and month
- **Sort** by date and amount
- **3/6/12-month reports** with a net-trend line chart
- **CSV export** with proper quoting, CRLF and BOM for Excel
- **JSON backup & restore** with confirmation and Undo

### 🌍 Professional UI
- **Fully bilingual** — Persian and English with real RTL/LTR
- **Jalali calendar** with a native picker (`Intl.DateTimeFormat` + accurate Borkowski algorithm)
- **Light/dark/system theme** with persistent choice
- **Vazirmatn variable font** — embedded in the project, fully offline
- **Responsive design** — desktop, tablet, mobile
- **Full accessibility** — ARIA, focus trap, keyboard shortcuts
- **PWA** — install like a native app with maskable icons

---

## 📥 Download & Installation (packaged apps)

Installer files for **version 1.0.2** are available on the [release page](https://github.com/Kourosh242/iva-personal-finance/releases/tag/1.0.2). The full matrix lives in [DOWNLOADS.md](DOWNLOADS.md) and the [wiki — Downloads](wiki/Downloads.md):

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

### 🛠️ Installation

#### 🪟 Windows
1. Download `IVA-Setup-1.0.2-x64.exe` (or ia32)
2. Double-click → **Next** → choose folder (optional) → **Install**
3. IVA shortcuts appear on your Desktop & Start Menu — done! ✅

> 💡 **Windows 7:** if your system isn't fully updated, you may need two Microsoft updates:
> [KB2999226](https://www.microsoft.com/en-us/download/details.aspx?id=49093) and [Visual C++ 2015-2019](https://www.microsoft.com/en-us/download/details.aspx?id=48145)

> 🔄 **Installing over a previous version is safe** — your transactions and settings are fully preserved.

#### 🐧 Linux (Debian, Ubuntu, Mint, ...)
```bash
sudo dpkg -i IVA-1.0.2-amd64.deb
sudo apt-get install -f -y   # first time only, installs dependencies
```
Or double-click the file to open it with your Software Center.
The app appears in your applications menu as **IVA Finance** (Finance category).

#### 📱 Android (10+)
1. Download the APK file
2. Tap it; if asked, allow **"Install from unknown sources"**
3. Install → IVA icon in your app drawer — done! ✅
4. CSV/JSON exports are saved directly to your phone's **Downloads** folder

> 📶 Android: this app has **no permissions at all — not even internet!** The OS itself blocks any connection.

---

## 🔐 Verify your download (optional but recommended)

After downloading, you can make sure the file arrived intact:

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

> 🔐 These are the checksums of the published 1.0.2 build. When releasing a new build, update them from the release page and keep using official release files.

---

## 🔒 Privacy & your data

| Question | Answer |
|---|---|
| Where is my data stored? | Windows: `%AppData%\\IVA Finance` · Linux: `~/.config/IVA Finance` · Android: the app's private storage · Web: browser LocalStorage |
| Will updating erase it? | **No** — the installer only replaces app files |
| Will uninstalling erase it? | Windows/Linux: **No**, data stays · Android: yes, uninstalling removes data (make a JSON backup from Settings first) |
| Does the app connect to the internet? | **Never for your financial data.** Only the optional Tools page makes public requests to public FX/gold/crypto sources when you press Refresh; no personal data is sent |
| How do I update? | Download the new version from the release page and install it over the old one |

---

## ❓ FAQ

**x64 vs ia32?** — CPU architecture. x64 installs only on 64-bit Windows; ia32 installs on both. Almost all modern Windows are 64-bit.

**amd64 vs arm64?** — Both are Linux builds: amd64 for Intel/AMD processors (most PCs), arm64 for ARM chips like Raspberry Pi. `uname -m` tells you which.

**Why is the desktop app this big?** — The entire UI and rendering engine are bundled inside, so it needs nothing external — that's exactly why it works offline.

**Why is the Android app only 2.7MB?** — It's built with zero extra libraries and runs on every CPU architecture.

**Is it free?** — Yes. MIT-licensed code, free to use. [Project source](https://github.com/Kourosh242/iva-personal-finance)

**How do I remove the demo?** — **Settings → Data → Erase all data**.

**Why is there demo data?** — So that on first launch you can see every chart and tool with a realistic example; you can replace it with your real data later.

More technical questions in the [wiki — FAQ](wiki/FAQ.md)

---

## 🚀 Quick Start (web / development)

If you are a developer or want to run the web version, no installation or special commands are needed:

```bash
# Option 1: Clone and open index.html
git clone https://github.com/Kourosh242/iva-personal-finance.git
cd iva-personal-finance
# Open index.html in your browser

# Option 2: With a local server (recommended for PWA & font)
npx serve .
# or
python3 -m http.server 8080
# Then visit http://localhost:8080
```

> **Tip:** Use a local server for the best PWA experience and proper font loading. See [GITHUB_UPLOAD_GUIDE_FA.md](GITHUB_UPLOAD_GUIDE_FA.md) for uploading to GitHub and enabling GitHub Pages.

---

## 🧪 Sample data (demo)

On first launch the welcome screen asks for your name and has a **"Load sample (demo) data" checkbox enabled by default**. Confirming loads a realistic set so you can see every chart, analysis and tool from the first look:

- ✅ 6 months of transactions (salary, freelance, rent, groceries, bills, ...)
- ✅ 4 accounts with demo card numbers and bank logos
- ✅ 5 budgets, 3 goals and 3 debts/receivables
- ✅ 2 sample notes in the toolbox

If you prefer to start empty, just uncheck that box. At any time:
- **Settings → Sample data → Load sample data** reloads the demo
- **Settings → Data → Erase all data** removes everything (including demo)
- Both actions are undoable via the **Undo** button

---

## 📁 Project Structure

```
iva-personal-finance/
│
├── index.html              # Entry point — Single Page Application (SPA) + CSP
├── style.css               # Full dual-theme design system (light/dark)
├── site.webmanifest        # PWA manifest
├── sw.js                   # Service Worker (Network-first + SWR)
│
├── js/
│   ├── i18n.js             # Full Persian/English dictionary + metadata
│   ├── utils.js            # Safety, money formatting, Jalali dates, SVG icons
│   ├── store.js            # State, validation, v1/v2→v3 migration, demo data
│   ├── charts.js           # Custom SVG chart engine
│   ├── tools.js            # Financial toolbox (rates, loans, inflation, banks, notes)
│   ├── jdate.js            # Jalali calendar & picker (Borkowski)
│   └── app.js              # Router, pages, forms, actions
│
├── assets/                 # Logos, images, PWA icons
│   └── banks/              # Bank logos (local, offline)
├── fonts/                  # Vazirmatn font (OFL license)
├── .github/                # Issue/PR templates + GitHub Pages workflow
├── docs/BRAND.md           # Brand guidelines
├── wiki/                   # Project wiki (full documentation)
│
├── README.md               # This file
├── DOWNLOADS.md            # Complete download & file-selection guide
├── CHANGELOG.md            # Change history
├── CONTRIBUTING.md         # Contributing guide
├── SECURITY.md             # Security policy
├── CODE_OF_CONDUCT.md      # Code of conduct
├── ROADMAP.md              # Roadmap
├── GITHUB_UPLOAD_GUIDE_FA.md  # Upload & GitHub Pages guide (Persian)
└── LICENSE                 # MIT license
```

---

## 🔒 Privacy & Security

**No financial data is ever sent to a server.** All your information is stored in the browser's `LocalStorage` (or the app's private storage) and is only accessible on your device.

For additional assurance:
- IVA has no Google Analytics, tracking, or telemetry
- All user input is HTML-escaped via `U.esc()` before insertion (XSS protection)
- All data is validated and sanitized through `Store.sanitize()` before saving
- Automatic v1 / v2 → v3 migration without data loss
- Content-Security-Policy restricts scripts and limits external connections to allowed sources
- External links use `rel="noopener noreferrer"`
- Every destructive action is undoable

> ⚠️ **Optional Tools page:** when the user clicks "Refresh rates", the app reads public prices from allowed domains (tgju, Nobitex, ArzDigital, CoinGecko, ...). Those requests carry **no personal or financial data**; results are cached locally.

---

## 📜 License

This project is licensed under the **MIT** license. The Vazirmatn font is licensed under **OFL** (see `fonts/OFL.txt`).

---

## 🙏 Credits

This repository was forked from [MR-SHARIFI-Dev/iva-personal-finance](https://github.com/MR-SHARIFI-Dev/iva-personal-finance) and is maintained by [Kourosh242](https://github.com/Kourosh242).

---

<div align="center">
  <sub>IVA — پولت را بفهم، آینده‌ات را بساز · Understand your money, build your future</sub>
</div>

---

<div align="center">
  <a href="wiki/Home.md">ویکی پروژه | Project Wiki</a> •
  <a href="CONTRIBUTING.md">راهنمای مشارکت | Contributing</a> •
  <a href="SECURITY.md">سیاست امنیتی | Security</a> •
  <a href="CODE_OF_CONDUCT.md">منشور رفتاری | Code of Conduct</a> •
  <a href="ROADMAP.md">نقشهٔ راه | Roadmap</a> •
  <a href="CHANGELOG.md">تغییرات | Changelog</a> •
  <a href="docs/BRAND.md">برند | Brand</a> •
  <a href="https://github.com/Kourosh242/iva-personal-finance/releases/tag/1.0.2">ریلیز و فایل‌های نصب | Release & installers</a>
</div>
