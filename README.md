# HealthPredict: AI-Powered Medical Diagnostics & Analysis

## Overview
**HealthPredict** is a full-stack intelligent healthcare application designed to assist in early disease detection and medical record analysis. It combines machine learning models for predicting risk probabilities of various diseases with Generative AI (Google Gemini) to analyze and interpret complex medical PDF reports.

## Key Features
*   **Multi-Disease Prediction**: specialized ML models to predict risks for:
    *   Diabetes
    *   Heart Disease
    *   Stroke
    *   Parkinson's Disease
    *   Thyroid Disorders
    *   Depression
    *   Hepatitis
    *   Kidney Disease
*   **Medical Document Assistant**: Upload PDF medical reports (lab results, prescriptions) to get an instant, AI-generated summary, diagnosis extraction, and easy-to-understand explanations using Google Gemini 1.5 Flash.
*   **Secure Authentication**: User signup and login functionality.
*   **Modern UI**: Responsive and accessible interface built with Next.js and Shadcn UI.

## Tech Stack
### Frontend
*   **Framework**: Next.js 15 (App Router)
*   **Language**: TypeScript
*   **Styling**: Tailwind CSS & Shadcn UI (Radix Primitives)
*   **Icons**: Lucide React

### Backend
*   **Framework**: FastAPI (Python)
*   **Database**: SQLAlchemy with MySQL connector
*   **AI/ML**: 
    *   Scikit-learn (Disease Prediction Models)
    *   Google Generative AI (Gemini 1.5 Flash)
*   **Data Processing**: PyMuPDF (PDF extraction), Pandas, NumPy

## Project Structure
```
HealthPredict/
├── Frontend/           # Next.js Application
│   ├── app/            # App Router pages & layouts
│   ├── components/     # Reusable UI components
│   └── lib/            # Utilities
├── Backend/            # FastAPI Server
│   ├── models/         # Database models (User, etc.)
│   ├── schemas.py      # Pydantic data validation schemas
│   ├── main.py         # API entry point & routes
│   ├── predictor.py    # ML prediction logic
│   └── requirements.txt
└── README.md
```
# 🏥 HealthPredict: The Future of Personalized Medical AI 🚀

![Version](https://img.shields.io/badge/version-2.0.0-blue.svg)
![Python](https://img.shields.io/badge/Python-3.11%2B-3776AB?logo=python&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-15.0-black?logo=next.js&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-0.100.0-009688?logo=fastapi&logoColor=white)
![Gemini AI](https://img.shields.io/badge/AI-Gemini%201.5%20Flash-4285F4?logo=google&logoColor=white)

> **"Your Personal AI Health Assistant – From Symptoms to Solutions in Seconds."**

---

## 🌟 Why HealthPredict?

Imagine having a **team of specialists** and a **medical translator** in your pocket. 

**HealthPredict** isn't just another form-filling app. It is a flagship **Intelligent Healthcare Platform** that bridges the gap between complex medical data and understandable, actionable insights.

Whether you are looking to assess risk factors for chronic conditions or trying to decipher a confusing lab report filled with medical jargon, **HealthPredict** handles it all with the power of Machine Learning and Generative AI.

---

## ✨ Features That Wow

### 🤖 1. Multi-Disease Risk Prediction (The "Oracle")
We don't guess; we calculate. Using trained Machine Learning models (Scikit-Learn), we provide accurate risk assessments for **8 Major Health Conditions**:

| 🍬 **Metabolic** | ❤️ **Cardiovascular** | 🧠 **Neurological** | 🛡️ **Vital Organs** |
| :--- | :--- | :--- | :--- |
| **Diabetes** | **Heart Disease** | **Parkinson's** | **Kidney Disease** |
| **Thyroid** | **Stroke** | **Depression** | **Hepatitis** |

👉 *Enter your vitals (e.g., BMI, Glucose, BP) and get an instant result.*

### 📄 2. AI Medical Document Analyst (The "Interpreter")
**Confused by Lab Reports?** 
Simply upload your PDF medical reports (blood tests, prescriptions, discharge summaries).
*   **Powered by Google Gemini 1.5 Flash**: Our AI reads the document like a doctor would.
*   **What you get**: A concise summary, potential diagnoses, explained terminology, and recommended next steps.
*   *No more Googling "high neutrophils meaning" and scaring yourself!*

### 🎨 3. Modern, Beautiful UI
Built with **Next.js 15** and **Shadcn UI**, the interface is:
*   **Clean & Minimalist**: Medical data shouldn't be overwhelming.
*   **Responsive**: Works perfectly on Mobile, Tablet, and Desktop.
*   **Animated**: Smooth transitions and interactive elements.

---

## 🛠️ The Tech Behind the Magic

This project employs a robust **Microservices Architecture**:

### 🧠 Backend (The Brain)
*   **Framework**: **FastAPI** (High performance, async Python)
*   **ML Engine**: **Scikit-Learn** (Random Forest, SVM, Logistic Regression models)
*   **Generative AI**: **Google Gemini API** (for document reasoning)
*   **PDF Parsing**: **PyMuPDF** & **Fitz**
*   **Database**: **MySQL** with **SQLAlchemy** ORM

## Installation & Setup
### 💻 Frontend (The Face)
*   **Framework**: **Next.js 15** (App Router)
*   **Language**: **TypeScript** (Type safety is non-negotiable)
*   **Styling**: **Tailwind CSS 4** + **Shadcn UI**
*   **State Management**: React Hooks

### Prerequisites
*   Node.js & npm/pnpm
*   Python 3.9+
*   MySQL Server (optional, depending on DB config)
---

### 1. Backend Setup
Navigate to the backend directory and set up the Python environment.
## 🚀 Quick Start Guide

Ready to run the flagship? Follow these steps!

### Prerequisite
*   **Google Gemini API Key**: [Get one here](https://aistudio.google.com/app/apikey)

### Step 1: Ignite the Backend 🔥
```bash
cd Backend

# 1. Create a virtual environment
python -m venv venv
# Windows
venv\Scripts\activate
# Linux/Mac
source venv/bin/activate
source venv/bin/activate  # Windows: venv\Scripts\activate

# 2. Install the heavy lifters
pip install -r requirements.txt
```

**Configuration**:
Ensure you have a valid Google Gemini API Key. Update the configuration in `main.py` or (recommended) create a `.env` file.
# 3. Configure your Intelligence (Add your API Key in main.py)
# API_KEY = "AIzaSy..."

To start the server:
```bash
# 4. Launch the Satellite
python main.py
# Server will start at http://localhost:8000
```
*Backend is now analyzing data at `http://localhost:8000`*

### 2. Frontend Setup
Navigate to the frontend directory and install dependencies.

### Step 2: Launch the Frontend 🛸
```bash
cd Frontend
npm install
# or
pnpm install
```

To start the development server:
```bash
# 1. Install dependencies
npm install  # or pnpm install

# 2. Blast off!
npm run dev
# App will run at http://localhost:3000
```
*Frontend is live at `http://localhost:3000`*

---

## 📸 Usage Scenarios

### Scenario A: The check-up
> *John, 45, wants to check his heart health.*
1.  Logs in to **HealthPredict**.
2.  Selects **"Heart Disease"** from the Dashboard.
3.  Enters his Age, Cholesterol levels, BP, and Max HR.
4.  **Instant Result**: "Low Risk" (with tips to keep it that way!)

### Scenario B: The Mystery Report
> *Sarah received a complex blood test result PDF.*
1.  Goes to **"Analyze Report"**.
2.  Uploads `blood_work_jan2026.pdf`.
3.  **Gemini AI Analysis**: "Your Vitamin D is low, and Hemoglobin is normal. The doctor suggests Vitamin D supplements. Here are some dietary sources..."

---

## 🔮 Future Roadmap

*   [ ] **Chatbot Assistant**: A conversational AI to answer follow-up health questions.
*   [ ] **Appointment Booking**: Direct integration with local clinics.
*   [ ] **Wearable Sync**: Import data from Apple Health / Fitbit directly.
*   [ ] **Voice Mode**: Speak your symptoms instead of typing.

---

## 🤝 Contributing

This is a flagship project, and we welcome improvements!
1.  Fork it.
2.  Branch it (`git checkout -b feature/CoolNewFeature`).
3.  Commit it (`git commit -m 'Add CoolNewFeature'`).
4.  Push it (`git push origin feature/CoolNewFeature`).
5.  Open a Pull Request.

## Usage
1.  **Register/Login**: Create an account to access features.
2.  **Disease Prediction**: Select a specific disease from the dashboard, enter the required medical parameters (e.g., glucose level, BMI), and get an instant risk assessment.
3.  **Report Analysis**: Go to the Analyze section, upload a PDF medical document, and receive a comprehensive AI-generated breakdown of the contents.
---

## API Documentation
Once the backend is running, full API documentation (Swagger UI) is available at:
`http://localhost:8000/docs`
*Empowering Health through Artificial Intelligence.*
