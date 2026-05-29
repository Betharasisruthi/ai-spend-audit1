# AI Spend Audit

AI Spend Audit is a SaaS-style web application that helps startups and teams identify overspending on AI tools like ChatGPT, Claude, Cursor, GitHub Copilot, Gemini, and more.

It analyzes team size, tool selection, and plan type to estimate monthly and annual savings, and provides optimization recommendations.

---

## 🚀 Live Demo
https://ai-spend-audit1-five.vercel.app/

---

## ✨ Features

- AI tool spend analysis
- Cost optimization recommendations
- Monthly & annual savings calculation
- Shareable audit links (`/audit/[id]`)
- Dashboard for saved audits
- Email capture (optional)
- PDF report download
- Local storage persistence
- CI/CD with GitHub Actions
- Deployed on Vercel

---

## 🧠 Supported Tools

- ChatGPT
- Claude
- Cursor
- GitHub Copilot
- Gemini
- OpenAI API
- Anthropic API
- Windsurf

---

## 🛠 Tech Stack

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- LocalStorage (data persistence)
- jsPDF (report generation)
- GitHub Actions (CI)
- Vercel (deployment)

---

## 📁 Project Structure

src/
app/
  page.tsx
  dashboard/
    page.tsx
  audit/
    [id]/
      page.tsx

components/
  AuditForm.tsx

lib/
  audit/

---

## ⚙️ How It Works

1. User selects AI tools and plan
2. System calculates estimated overspend
3. Result is generated instantly
4. Data is saved in localStorage
5. Unique shareable URL is created
6. User can:
   - Share link
   - View dashboard
   - Download PDF report

---

## 🧪 Local Setup

```bash
npm install
npm run dev