---
name: 🐛 گزارش باگ | Bug report
about: مشکلی در IVA پیدا کردید | Report an IVA bug
title: "[Bug]: "
labels: bug
body:
  - type: textarea
    id: what-happened
    attributes:
      label: چه اتفاقی افتاد؟ | What happened?
      description: اگر مربوط است، اسکرین‌شات/کنسول اضافه کنید.
    validations:
      required: true
  - type: textarea
    id: expected
    attributes:
      label: رفتار مورد انتظار | Expected behavior
    validations:
      required: true
  - type: textarea
    id: reproduce
    attributes:
      label: مراحل بازتولید | Steps to reproduce
      placeholder: "1. ... 2. ..."
  - type: input
    id: env
    attributes:
      label: مرورگر و سیستم | Browser & OS
      placeholder: "مثلاً Chrome 129 / Android 15 / Windows 10 x64"
  - type: dropdown
    id: lang
    attributes:
      label: زبان رابط | UI language
      options:
        - فارسی
        - English
  - type: checkboxes
    id: checks
    attributes:
      label: قبل از ارسال | Before sending
      options:
        - label: در Issueهای موجود جستجو کردم و تکراری نیست. | I searched existing issues.
          required: true
