---
name: 🐛 گزارش باگ
about: مشکلی در IVA پیدا کردید
title: "[Bug]: "
labels: bug
body:
  - type: textarea
    id: what-happened
    attributes:
      label: چه اتفاقی افتاد؟
      description: اگر مربوط است، اسکرین‌شات اضافه کنید.
    validations:
      required: true
  - type: textarea
    id: expected
    attributes:
      label: رفتار مورد انتظار
    validations:
      required: true
  - type: input
    id: env
    attributes:
      label: مرورگر و سیستم
      placeholder: "مثلاً Chrome 129 / Android 15"
  - type: dropdown
    id: lang
    attributes:
      label: زبان رابط
      options:
        - فارسی
        - English
  - type: checkboxes
    id: checks
    attributes:
      label: قبل از ارسال
      options:
        - label: در Issueهای موجود جستجو کردم و تکراری نیست.
          required: true
