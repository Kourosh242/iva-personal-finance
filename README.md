<div align="center">
  <img src="assets/iva-logo.png" width="120" alt="لوگوی IVA">
  <h1>پلتفرم حسابداری آیوا | IVA</h1>
  <p><strong>پولت را بفهم، آینده‌ات را بساز.</strong></p>
  <p>یک پلتفرم حسابداری شخصی دو زبانه، متن‌باز و بدون وابستگی خارجی</p>

  <p>
    <img src="https://img.shields.io/badge/HTML5-pure-E34F26?logo=html5&logoColor=white" alt="HTML5">
    <img src="https://img.shields.io/badge/CSS3-responsive-1572B6?logo=css3&logoColor=white" alt="CSS3">
    <img src="https://img.shields.io/badge/JavaScript-vanilla-F7DF1E?logo=javascript&logoColor=black" alt="JavaScript">
    <img src="https://img.shields.io/badge/license-MIT-10bfa4" alt="MIT">
    <img src="https://img.shields.io/badge/PWA-offline-6756e8" alt="PWA">
  </p>
</div>

![پوستر پلتفرم حسابداری IVA](assets/iva-repo-poster.png)

## معرفی

IVA یک اپ حسابداری شخصی کامل است که فقط با HTML، CSS و JavaScript خالص ساخته شده است. هیچ فریم‌ورک، Build Step یا وابستگی خارجی ندارد. داده‌ها روی دستگاه کاربر ذخیره می‌شوند و برای اجرای برنامه فقط یک مرورگر مدرن نیاز است.

در اولین ورود، برنامه نام هر کاربر را می‌پرسد و تجربه داشبورد را برای همان شخص شخصی‌سازی می‌کند.

## قابلیت‌ها

- داشبورد دارایی خالص، درآمد، هزینه و پس‌انداز
- ثبت، نمایش و جستجوی تراکنش‌ها
- مدیریت حساب بانکی، کارت، کیف پول و وجه نقد
- بودجه‌بندی دسته‌ای و نمایش درصد مصرف
- اهداف مالی و پیگیری پیشرفت
- مدیریت بدهی، طلب، اقساط و سررسیدها
- گزارش‌های مالی و نمودارهای واکنش‌گرا
- خروجی CSV و پشتیبان JSON
- ذخیره داده‌ها و نام کاربر در LocalStorage
- حالت روز و شب با حفظ انتخاب کاربر
- رابط فارسی و انگلیسی با RTL و LTR
- نصب به‌صورت PWA و اجرای آفلاین
- طراحی واکنش‌گرا برای موبایل، تبلت و دسکتاپ

## اجرای سریع

هیچ نصب یا دستور خاصی لازم نیست:

1. پروژه را دانلود یا Clone کنید.
2. فایل index.html را در مرورگر باز کنید.

برای Service Worker و قابلیت آفلاین، پروژه را با Live Server یا یک سرور محلی اجرا کنید.

## ساختار پروژه

```text
iva-personal-finance/
├── .github/
│   ├── ISSUE_TEMPLATE/
│   └── PULL_REQUEST_TEMPLATE.md
├── assets/
│   ├── iva-logo.png
│   └── iva-repo-poster.png
├── docs/
│   └── BRAND.md
├── index.html
├── style.css
├── script.js
├── site.webmanifest
├── sw.js
├── README.md
├── CHANGELOG.md
├── ROADMAP.md
├── CONTRIBUTING.md
├── SECURITY.md
├── CODE_OF_CONDUCT.md
└── LICENSE
```

## انتشار رایگان در GitHub Pages

1. فایل‌های پروژه را در Branch اصلی ریپو آپلود کنید.
2. وارد Settings و سپس Pages شوید.
3. Deploy from a branch را انتخاب کنید.
4. Branch را main و Folder را root قرار دهید.
5. Save را بزنید.

راهنمای کامل فارسی در [GITHUB_UPLOAD_GUIDE_FA.md](GITHUB_UPLOAD_GUIDE_FA.md) قرار دارد.

## حریم خصوصی

اطلاعات مالی به هیچ سروری ارسال نمی‌شود و داخل LocalStorage مرورگر باقی می‌ماند. برای داده‌های حساس واقعی، از دستگاه امن و نسخه پشتیبان محافظت‌شده استفاده کنید.

## مشارکت و امنیت

- [راهنمای مشارکت](CONTRIBUTING.md)
- [سیاست امنیتی](SECURITY.md)
- [منشور رفتاری](CODE_OF_CONDUCT.md)
- [نقشه راه](ROADMAP.md)
- [تغییرات نسخه‌ها](CHANGELOG.md)
- [راهنمای برند](docs/BRAND.md)

## مجوز

این پروژه تحت مجوز [MIT](LICENSE) منتشر شده است.

<div align="center">
  ساخته‌شده با تمرکز بر سادگی، حریم خصوصی و تجربه کاربری فارسی
</div>
