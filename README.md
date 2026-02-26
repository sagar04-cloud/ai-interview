<div align="center">
  <img width="1200" height="475" alt="AI Interview Prep Banner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
  
  # 🤖 AI Interview Prep
  
  **Transform your interview preparation with the power of Gemini 2.5 AI.**
  
  [![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
  [![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![Gemini AI](https://img.shields.io/badge/Gemini%20AI-4285F4?style=for-the-badge&logo=google-gemini&logoColor=white)](https://ai.google.dev/)
</div>

---

## 🚀 Overview

**AI Interview Prep** is a state-of-the-art platform designed to help candidates ace their job interviews. By leveraging the latest **Gemini 2.5 Flash** models, the app provides personalized interview questions, suggested answers, technical solutions, and real-time mock interviews with voice interaction and structured feedback.

## ✨ Key Features

### 📋 Personalized Interview Prep
- **Customized Questions:** Generates 10 tailor-made interview questions (HR, Technical, Behavioral) based on your target job role and description.
- **Insider Approach Guide:** Get a detailed guide on how to approach interviews for specific companies.
- **STAR Method Answers:** Provides high-quality, first-person suggested answers structured with the STAR method for behavioral questions.

### 🎙️ Immersive Mock Interviews
- **Real-time Interaction:** Simulate a real interview environment with an AI interviewer.
- **Voice-to-Text & Text-to-Speech:** Features integrated speech-to-text for your answers and professional text-to-speech for the interviewer.
- **Audio Visualization:** Real-time feedback visualizer for your voice input.

### 🧠 Performance Feedback
- **Structured Scoring:** Receive ratings (1-5) on Clarity, Structure, and Relevance for every answer.
- **Actionable Insights:** Get specific improvement points and challenging follow-up questions to probe deeper.
- **PDF Export:** Download your full interview prep plan as a professional PDF for offline study.

### 💻 Technical Problem Solver
- **Multi-language Support:** Get optimal, production-quality solutions for coding problems in various languages.
- **Complexity Analysis:** Includes detailed step-by-step explanations and time/space complexity analysis.

### 💾 Session Management
- **Persistence:** Save your generated interview plans and sessions to local storage.
- **Easy Retrieval:** Revisit, view, or delete past sessions at any time.

---

## 🛠️ Technology Stack

- **Frontend:** React 19, TypeScript, TailwindCSS (for modern UI)
- **Framework:** Vite
- **AI Engine:** Google Gemini 2.5 Flash & Gemini 2.5 Flash Preview TTS
- **PDF Generation:** jsPDF
- **State Management:** React Hooks (useState, useEffect, useMemo, useCallback)
- **Icons:** Custom SVG icons for a premium feel

---

## ⚙️ Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **Gemini API Key:** Obtain one from the [Google AI Studio](https://aistudio.google.com/)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd ai-interview
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Environment Setup:**
    Create a `.env` file in the root directory and add your API key:
    ```env
    GEMINI_API_KEY=your_gemini_api_key_here
    ```

4.  **Run Locally:**
    ```bash
    npm run dev
    ```
    The app will be available at `http://localhost:3000`

### Running with Docker

1.  **Build the image:**
    ```bash
    docker build -t ai-interview-prep .
    ```

2.  **Run the container:**
    ```bash
    docker run -p 8080:8080 ai-interview-prep
    ```
    The app will be accessible at `http://localhost:8080`.

---

## 📁 Project Structure

```text
ai-interview/
├── components/         # Reusable UI components (Header, Footer, Forms, Modals)
├── services/           # AI integration services (Gemini API calls)
├── App.tsx             # Main application logic and routing
├── index.tsx           # Entry point
├── types.ts            # TypeScript interfaces and types
├── vite.config.ts      # Vite configuration
└── README.md           # Project documentation
```

---

## 🎨 UI/UX Design

The application features a modern, premium design with:
- **Responsive Layout:** Works flawlessly on mobile, tablet, and desktop.
- **Theme Support:** Clean Light and Dark modes.
- **Micro-animations:** Smooth transitions and hover effects for an engaging experience.
- **Glassmorphism:** Elegant backdrop blurs and subtle borders.

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

<div align="center">
  Developed with ❤️ using Gemini AI
</div>
