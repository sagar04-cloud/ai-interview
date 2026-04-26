
# 🤖 AI Interview Prep

**Master your next interview with the power of Gemini 2.5 Flash.**

AI Interview Prep is a comprehensive, AI-driven platform designed to modernize the way candidates prepare for job interviews. By leveraging cutting-edge Large Language Models, the application provides personalized preparation plans, technical problem-solving, and immersive mock interviews with real-time feedback.

[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React 19](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)](https://firebase.google.com/)
[![Gemini 2.5](https://img.shields.io/badge/Gemini_2.5_Flash-4285F4?style=for-the-badge&logo=google-gemini&logoColor=white)](https://ai.google.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

---

## ✨ Key Features

### 🎯 Personalized Preparation
- **Context-Aware Questions:** Generates 10 tailor-made interview questions (HR, Technical, Behavioral) based on your target job role and description.
- **STAR Method Answers:** Provides high-quality suggested answers structured with the **STAR** (Situation, Task, Action, Result) method for behavioral questions.
- **Company Insights:** Automatically identifies the hiring company and provides a strategic approach guide for their specific culture and interview style.

### 🎙️ Immersive Mock Interviews
- **Real-time Interaction:** Simulate a live interview environment with an AI interviewer.
- **Voice-to-Text & TTS:** Integrated speech-to-text for your answers and professional text-to-speech for the interviewer.
- **Audio Visualization:** Real-time feedback visualizer to monitor your voice input levels.
- **Dynamic Feedback:** Get instant ratings (1-5) on Clarity, Structure, and Relevance, along with actionable insights and challenging follow-up questions.

### 💻 Technical Problem Solver
- **Multi-language Support:** Get production-quality code solutions for complex coding problems in various languages.
- **Deep Analysis:** Includes step-by-step logic explanations and comprehensive time/space complexity analysis.
- **File Upload:** Upload existing code files for review or to use as context for technical improvements.

### 🚀 High Performance & Reliability
- **API Load Balancing:** Automatically rotates through multiple Gemini API keys to prevent rate-limiting during heavy usage.
- **Lazy Initialization:** Optimizes memory and startup performance by instantiating the AI client precisely when an API request is made.

### 🔐 Secure & Persistent
- **Authentication:** Secure user sign-in and profile management via **Firebase Auth**.
- **Real-time Sync:** All your interview plans and sessions are automatically saved and synced to the cloud using **Firebase Realtime Database**.
- **Session Management:** Revisit, sort, or delete past preparation sessions at any time.

### 📄 Professional Export
- **PDF Generation:** Download your entire interview preparation plan as a professionally formatted PDF for offline study or reference.

---

## 🛠️ Technology Stack

- **Frontend:** React 19, TypeScript, TailwindCSS
- **Build Tool:** Vite
- **AI Engine:** Google Gemini 2.5 Flash (Generation, Transcription, and Vision/Contextual Analysis)
- **Backend/BaaS:** Firebase (Authentication & Realtime Database)
- **Utilities:** jsPDF (PDF export), SVG-based micro-interactions

---

## ⚙️ Getting Started

### Prerequisites

- **Node.js:** v18 or higher
- **npm** or **yarn**
- **Gemini API Key:** Obtain one from [Google AI Studio](https://aistudio.google.com/)
- **Firebase Project:** Create a project in the [Firebase Console](https://console.firebase.google.com/)

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd ai-interview
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Environment Setup:**
   Create a `.env` file in the root directory and populate it with your credentials:
   ```env
   # Gemini API
   VITE_GEMINI_API_KEY=your_gemini_api_key
   # Optional: For load balancing across multiple keys, provide a comma-separated list
   # VITE_GEMINI_API_KEYS=your_key_1,your_key_2,your_key_3

   # Firebase Configuration
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
   VITE_FIREBASE_DATABASE_URL=your_database_url
   ```

4. **Run the application:**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:3000`

---

## 📁 Project Structure

```text
ai-interview/
├── components/         # Modular UI components (Modals, Forms, Visualization)
├── services/           # AI & API integration logic (Gemini Service)
├── firebase.ts         # Firebase initialization and exports
├── App.tsx             # Main application logic & view orchestration
├── index.tsx           # Application entry point
├── types.ts            # Global TypeScript interfaces
├── vite.config.ts      # Build and alias configuration
└── README.md           # Documentation
```

---

## 🎨 UI/UX Design

The application features a modern, premium design optimized for clarity and focus:
- **Dynamic Themes:** Toggle between deep dark mode and clean light mode.
- **Aesthetic Glassmorphism:** Subtle backdrop blurs and borders for a high-end feel.
- **Mobile Responsive:** Fully optimized for smartphones, tablets, and desktops.
- **Fluid Animations:** Enhanced with micro-animations and smooth transitions.

---

## 📄 License

This project is licensed under the MIT License.
