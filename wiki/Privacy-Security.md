# 🔒 حریم خصوصی و امنیت | Privacy & Security

> **🇮🇷 فارسی** | [🇬🇧 English](#-privacy-security-english)

---

## 🇮🇷 حریم خصوصی و امنیت در IVA

### 🔐 حریم خصوصی

**هیچ داده‌ای به هیچ سرویی ارسال نمی‌شود.** این مهم‌ترین اصل IVA است.

- همهٔ اطلاعات شما در **`LocalStorage`** مرورگر (یا حافظهٔ خصوصی اپ) ذخیره می‌شود
- هیچ تحلیل گوگلی، پیام‌رسانی یا ردیابی وجود ندارد
- بخش اصلی اپ هیچ درخواست شبکه‌ای ارسال نمی‌کند
- همهٔ محاسبات و تحلیل‌ها به‌صورت محلی در مرورگر شما انجام می‌شوند
- استثنای اختیاری: بخش «ابزارها» فقط وقتی شما «بروزرسانی نرخ‌ها» را می‌زنید درخواست عمومی می‌فرستد (بدون دادهٔ شخصی)

### 🛡️ امنیت

- **مقاومت در برابر XSS**: همهٔ ورودی‌ها با `U.esc()` امن‌سازی می‌شوند
- **اعتبارسنجی داده**: تابع `Store.sanitize()` همهٔ داده‌ها را قبل از ذخیره اعتبارسنجی می‌کند
- **مهاجرت امن**: داده‌های نسخهٔ ۱ به‌صورت امن به نسخهٔ ۲ منتقل می‌شوند
- **امنیت با برگردان**: با دکمهٔ «برگردان» می‌توانید هر تغییری را فوراً برگردانید

### 📋 نکات پشتیبان‌گیری

- برای داده‌های مالی واقعی، **برنامهٔ منظم پشتیبان‌گیری** داشته باشید
- فایل‌های پشتیبان را در **محل امنی** نگه دارید
- در مرورگرهای فرعی (InPrivate/Incognito) داده‌ها بعد از بستن پاک می‌شوند

### 📋 سیاست امنیتی

آسیب‌پذیری امنیتی را در **Issue عمومی** منتشر نکنید. از بخش **Security** همین ریپو استفاده کنید (جزئیات در [SECURITY.md](https://github.com/Kourosh242/iva-personal-finance/blob/main/SECURITY.md)).

---

## 🔒 Privacy & Security (English)

### 🔐 Privacy

**No data is sent to any server.** This is IVA's most important principle.

- All your data is stored in the browser's **`LocalStorage`**
- No Google Analytics, tracking, or telemetry
- The core app makes no network requests
- All calculations and analysis happen **locally** in your browser
- Optional exception: the **Tools** page sends a public request only when you click "Refresh rates" (no personal data)

### 🛡 Security

- **XSS protection**: All user inputs are escaped via `U.esc()`
- **Data validation**: `Store.sanitize()` validates all data before saving
- **Safe migration**: Version 1 data is securely migrated to version 2
- **Undo safety**: Every destructive action can be undone with one click

### 📋 Backup Tips

- Use a **regular backup** schedule for real financial data
- Store backup files in a **secure location**
- In private/incognito browsing mode, data is wiped when you close the browser

### 📋 Security Policy

Do **not** publish security vulnerabilities in public Issues. Use the **Security** tab of this repo to report privately.