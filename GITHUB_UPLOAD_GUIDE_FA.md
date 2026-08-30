# راهنمای آپلود و GitHub Pages | Upload & GitHub Pages Guide (فارسی)

## ۱) آپلود با Git (پیشنهادی)

```bash
git clone https://github.com/Kourosh242/iva-personal-finance.git
cd iva-personal-finance

# بعد از تغییرات
git add .
git commit -m "feat: ..."
git push origin main
```

## ۲) آپلود از طریق وب‌سایت GitHub (بدون Git)

1. فایل ZIP ریپو را دانلود و Extract کنید.
2. وارد github.com شوید و **New repository** را بزنید.
3. نام ریپو را `iva-personal-finance` بگذارید (ترجیحاً) و حالت **Public** را انتخاب کنید.
4. README، License و `.gitignore` را از گزینه‌های ابتدایی فعال **نکنید**؛ فایل‌ها داخل پوشه موجودند.
5. **Create repository** → **uploading an existing file**.
6. همهٔ محتوای پوشهٔ Extract‌شده را drag & drop کنید.
7. Commit message: `Initial release of IVA Personal Finance` → **Commit changes**.

## ۳) فعال‌کردن GitHub Pages

### روش A — GitHub Actions (توصیه‌شده)

ریپو دارای workflow `.github/workflows/pages.yml` است:

1. **Settings → Pages → Source: GitHub Actions** را انتخاب کنید.
2. Push به `main` انجام دهید.
3. چند دقیقه بعد سایت از `https://<user>.github.io/iva-personal-finance/` در دسترس است.

### روش B — Deploy from branch

1. **Settings → Pages** را باز کنید.
2. بخش **Build and deployment** → `Deploy from a branch` را انتخاب کنید.
3. Branch: `main` و Folder: `/ (root)` را انتخاب کنید.
4. **Save** را بزنید و چند دقیقه صبر کنید.

## ۴) نکات مهم

- پروژه فقط HTML/CSS/JS است؛ بدون سرویس بک‌اند یا Build Step.
- برای تجربهٔ کامل PWA و اتصال به نرخ‌های زنده، به HTTPS نیاز دارید (GitHub Pages دارد).
- فونت و اکثر لوگوها داخل پروژه‌اند؛ نیازی به CDN نیست.
- فایل‌های نصبی (`.exe`/`.deb`/`.apk`) را از صفحهٔ **Releases** آپلود کنید، نه در ریپو.
- اگر حجم فایل‌ها بزرگ باشد، از **Git LFS یا External Storage** استفاده کنید؛ تلاش کنید باینری‌ها را در ریلیز نگه دارید.

## ۵) فایل‌هایی که در ریپو نمی‌گذاریم

- `.exe`, `.deb`, `.apk` و باینری‌های بیلد
- فایل‌های پشتیبان JSON واقعی کاربران
- هرگونه رمز، توکن یا کلید خصوصی
- پوشه‌های خروجی (`dist/`, `build/`, `node_modules/` و ...)
