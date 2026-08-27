---
name: ✨ درخواست قابلیت
about: پیشنهادی برای بهتر شدن IVA دارید
title: "[Feature]: "
labels: enhancement
body:
  - type: textarea
    id: problem
    attributes:
      label: چه مشکلی را حل می‌کند؟
    validations:
      required: true
  - type: textarea
    id: solution
    attributes:
      label: راه‌حل پیشنهادی شما
  - type: checkboxes
    id: checks
    attributes:
      label: قبل از ارسال
      options:
        - label: در ROADMAP.md و Issueهای موجود بررسی کردم.
          required: true
