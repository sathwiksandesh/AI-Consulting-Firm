# 🚀 AI Consulting Firm Simulator

A full-stack **Multi-Agent AI System** that simulates real-world consulting workflows using intelligent agents.

---

## 🧠 Overview

This project mimics how consulting firms analyze business problems by using multiple AI agents — each specializing in a domain like research, strategy, and finance — to generate structured, actionable insights.

---

## 🎯 Problem Statement

Startups and businesses often lack access to expert consulting due to high costs.
This system provides **instant, structured consulting insights using AI agents**.

---

## 🏗️ System Architecture

Frontend (Next.js) → Backend (FastAPI) → Agent Workflow → LLM (Groq API)

---

## 🔄 Workflow

1. User enters a business problem
2. Backend triggers multi-agent pipeline
3. Agents process sequentially:

   * 🔍 Research Agent → Market insights
   * 🧠 Strategy Agent → Business strategy
   * 💰 Finance Agent → Budget & ROI
   * 📊 Report Agent → Final structured report
4. Results displayed in UI with tabs & chat view

---

## ⚙️ Tech Stack

### 🖥️ Frontend

* Next.js (React)
* Tailwind CSS

### ⚙️ Backend

* FastAPI (Python)

### 🤖 AI Layer

* Groq API (LLaMA 3.1)

### 📦 Features

* Multi-agent architecture
* Chat-style UI
* Tab-based insights
* PDF export
* Fallback handling

---

## 💡 Key Features

* ✅ Multi-Agent System (Research, Strategy, Finance, Report)
* ✅ Structured Consulting Output
* ✅ Real-time AI responses
* ✅ Interactive UI (Tabs + Chat)
* ✅ Export reports to PDF
* ✅ Fault-tolerant design

---

## 🧠 How Agents Communicate

Agents communicate through a **pipeline-based workflow**, where each agent’s output is passed as input to the next agent.

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/ai-consulting-firm.git
cd ai-consulting-firm
```

---

### 2. Backend Setup

```bash
cd backend
python -m venv venv
venv\Scripts\activate   # Windows
pip install -r requirements.txt
```

Create `.env` file:

```env
GROQ_API_KEY=your_api_key_here
```

Run backend:

```bash
uvicorn app.main:app --reload
```

---

### 3. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

### 4. Open App

👉 http://localhost:3000

---

## 📊 Example Input

```
My startup is not getting users
```

---

## 📈 Future Improvements

* RAG (Retrieval-Augmented Generation)
* User authentication
* Cloud deployment (Vercel + Render)
* Real-time streaming responses

---

## 🏆 Conclusion

This project demonstrates how **AI can simulate real-world consulting workflows** using multi-agent systems.

---

## 👨‍💻 Author

Siddhantam Sathwik Sandesh
