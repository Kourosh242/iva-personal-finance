---
name: ✨ درخواست قابلیت | Feature request
about: پیشنهادی برای بهتر شدن IVA دارید | Suggest an enhancement
title: "[Feature]: "
labels: enhancement
body:
  - type: textarea
    id: problem
    attributes:
      label: چه مشکلی را حل می‌کند؟ | What problem does this solve?
    validations:
      required: true
  - type: textarea
    id: solution
    attributes:
      label: راه‌حل پیشنهادی | Proposed solution
  - type: textarea
    id: impact
    attributes:
      label: تأثیر بر حریم خصوصی / آفلاین بودن | Privacy / offline impact
      description: آیا این قابلیت به اینترنت، داده شخصی یا وابستگی خارجی نیاز دارد؟
  - type: checkboxes
    id: checks
    attributes:
      label: قبل از ارسال | Before sending
      options:
        - label: در ROADMAP.md و Issueهای موجود بررسی کردم. | I checked ROADMAP and existing issues.
          required: true
