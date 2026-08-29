# 📦 دانلود و نصب | Downloads & Installation

> **🇮 فارسی** | [🇧 English](#-downloads--installation-english)

---

## 🇮🇷 راهنمای دانلود و انتخاب نسخه

فایل‌های نصبی IVA در [صفحهٔ ریلیز GitHub](https://github.com/Kourosh242/iva-personal-finance/releases/latest) در دسترس هستند. راهنمای کامل این فایل‌ها در ریپو: [DOWNLOADS.md](https://github.com/Kourosh242/iva-personal-finance/blob/main/DOWNLOADS.md)

### 🏷️ نسخه‌ها

| محصول | نسخهٔ فعلی | توضیح |
|---|---|---|
| 🌐 پلتفرم وب (GitHub Pages / مرورگر) | 2.0 | هستهٔ اصلی پروژه — همان کد ریپو |
| 📦 اپ‌های نصبی (ویندوز، لینوکس، اندروید) | 1.0.2 | بسته‌های آماده در ریلیز |

---

### 📥 فایل‌ها

| فایل | پلتفرم | برای چه سیستمی | حجم تقریبی |
|---|---|---|---|
| `IVA-Setup-1.0.2-x64.exe` | 🪟 ویندوز | ویندوز **۶۴ بیتی** (۷، ۸، ۸.۱، ۱۰، ۱۱) | ~۶۳MB |
| `IVA-Setup-1.0.2-ia32.exe` | 🪟 ویندوز | هر دو! ویندوز **۳۲ بیتی و ۶۴ بیتی** | ~۵۹MB |
| `IVA-1.0.2-amd64.deb` | 🐧 لینوکس | دبیان/اوبونتو/مینت/... با CPU **x86_64** | ~۶۲MB |
| `IVA-1.0.2-arm64.deb` | 🐧 لینوکس | دبیان‌بیس‌ها با CPU **ARM64** (رزبری‌پای ۴/۵ و...) | ~۵۸MB |
| `IVA-1.0.2-android-universal.apk` | 📱 اندروید | **همه گوشی و تبلت‌ها** — اندروید ۱۰ تا ۱۶، هر پردازنده‌ای | ~۲.۷MB |

### 🤔 کدام فایل را بگیرم؟

- **گوشی یا تبلت اندرویدی (۱۰ به بالا)** → **APK** — روی هر گوشی‌ای نصب می‌شود
- **کامپیوتر ویندوزی معمولی** → **x64** (تقریباً همه ویندوزهای امروزی ۶۴ بیتی‌اند)
- **ویندوز خیلی قدیمی ۳۲ بیتی یا شک دارید** → **ia32** (روی هر دو نوع نصب می‌شود)
- **لینوکس** → اول `uname -m` را بزنید:
  - `x86_64` → **amd64**
  - `aarch64` → **arm64**

**تشخیص بیتی ویندوز:** `Settings` ← `System` ← `About` ← **System type** — یا در CMD: `echo %PROCESSOR_ARCHITECTURE%` (خروجی `AMD64` یعنی ۶۴ بیتی)

### 🛠️ نصب

#### 🪟 ویندوز
1. فایل `IVA-Setup-1.0.2-x64.exe` (یا ia32) را دانلود کنید
2. دوبار کلیک → **Next** → مسیر نصب (اختیاری) → **Install**
3. آیکون IVA روی دسکتاپ و منوی استارت — تمام! ✅

> 💡 **ویندوز ۷:** در صورت نیاز به دو به‌روزرسانی: [KB2999226](https://www.microsoft.com/en-us/download/details.aspx?id=49093) و [Visual C++ 2015-2019](https://www.microsoft.com/en-us/download/details.aspx?id=48145)

> 🔄 نصب روی نسخهٔ قبلی امن است — تراکنش‌ها و تنظیمات حفظ می‌شوند.

#### 🐧 لینوکس
```bash
sudo dpkg -i IVA-1.0.2-amd64.deb
sudo apt-get install -f -y   # فقط بار اول
```
اپ در منوی برنامه‌ها با نام **IVA Finance** (دستهٔ Finance) ظاهر می‌شود.

#### 📱 اندروید (۱۰ به بالا)
1. فایل APK را دانلود و روی آن بزنید
2. در صورت درخواست، اجازهٔ «نصب از منابع ناشناس» را بدهید
3. آیکون IVA در منوی گوشی — تمام! ✅
4. خروجی‌های CSV/JSON در پوشهٔ **Downloads** گوشی ذخیره می‌شوند

> 📶 این اپ اندروید **هیچ مجوزی ندارد — حتی اینترنت!**

### 🔐 بررسی سلامت فایل (اختیاری)

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

### 🔒 داده‌های من کجا ذخیره می‌شوند؟

| سیستم‌عامل | مسیر داده |
|---|---|
| 🪟 ویندوز | `%AppData%\IVA Finance` |
| 🐧 لینوکس | `~/.config/IVA Finance` |
| 📱 اندروید | حافظهٔ خصوصی خود اپ |
| 🌐 وب | LocalStorage مرورگر |

- با نصب نسخهٔ جدید داده‌ها **پاک نمی‌شوند**
- حذف اپ در ویندوز/لینوکس داده را پاک نمی‌کند؛ در اندروید حذف اپ = حذف داده (پشتیبان JSON بگیرید)
- جزئیات بیشتر در صفحهٔ [حریم خصوصی و امنیت](Privacy-Security)

---

## 🇬🇧 Downloads & Installation (English)

### 🏷️ Versions

| Product | Current version | Description |
|---|---|---|
| 🌐 Web platform (GitHub Pages / browser) | 2.0 | The core of the project — the exact code in the repo |
| 📦 Packaged apps (Windows, Linux, Android) | 1.0.2 | Ready-to-install builds in the [release](https://github.com/Kourosh242/iva-personal-finance/releases/latest) |

### 📥 Files

| File | Platform | For | Approx. size |
|---|---|---|---|
| `IVA-Setup-1.0.2-x64.exe` | 🪟 Windows | **64-bit** Windows (7, 8, 8.1, 10, 11) | ~63MB |
| `IVA-Setup-1.0.2-ia32.exe` | 🪟 Windows | **Both!** 32-bit **and** 64-bit Windows | ~59MB |
| `IVA-1.0.2-amd64.deb` | 🐧 Linux | Debian/Ubuntu/Mint/... with **x86_64** CPU | ~62MB |
| `IVA-1.0.2-arm64.deb` | 🐧 Linux | Debian-based with **ARM64** CPU (Raspberry Pi 4/5...) | ~58MB |
| `IVA-1.0.2-android-universal.apk` | 📱 Android | **Every phone & tablet** — Android 10 to 16, any CPU | ~2.7MB |

### 🤔 Which file should I get?

- **Android phone/tablet (10+)** → **APK** — installs on any device
- **A regular Windows PC** → **x64** (almost all modern Windows are 64-bit)
- **A very old 32-bit Windows, or not sure** → **ia32** (installs on both)
- **Linux** → run `uname -m`:
  - `x86_64` → **amd64**
  - `aarch64` → **arm64**

**Check Windows bitness:** `Settings` → `System` → `About` → **System type** — or in CMD: `echo %PROCESSOR_ARCHITECTURE%` (`AMD64` = 64-bit)

### 🛠️ Installation

#### 🪟 Windows
1. Download `IVA-Setup-1.0.2-x64.exe` (or ia32)
2. Double-click → **Next** → choose folder (optional) → **Install**
3. IVA shortcuts on Desktop & Start Menu — done! ✅

> 💡 **Windows 7:** if needed, install [KB2999226](https://www.microsoft.com/en-us/download/details.aspx?id=49093) and [Visual C++ 2015-2019](https://www.microsoft.com/en-us/download/details.aspx?id=48145)

> 🔄 Installing over a previous version is safe — your data is preserved.

#### 🐧 Linux
```bash
sudo dpkg -i IVA-1.0.2-amd64.deb
sudo apt-get install -f -y   # first time only
```
The app appears as **IVA Finance** (Finance category) in your applications menu.

#### 📱 Android (10+)
1. Download the APK and tap it
2. Allow "Install from unknown sources" if asked
3. IVA icon in your app drawer — done! ✅
4. CSV/JSON exports go to your phone's **Downloads** folder

> 📶 This app has **no permissions at all — not even internet!**

### 🔐 Verify your download

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

### 🔒 Where is my data stored?

| OS | Data location |
|---|---|
| 🪟 Windows | `%AppData%\IVA Finance` |
| 🐧 Linux | `~/.config/IVA Finance` |
| 📱 Android | the app's private storage |
| 🌐 Web | browser LocalStorage |

- Updating **never** erases your data
- Uninstalling on Windows/Linux keeps your data; on Android uninstalling removes it (take a JSON backup first)
- More details in [Privacy & Security](Privacy-Security)
