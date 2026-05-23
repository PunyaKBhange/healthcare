HealthPredict: The Future of Personalized Medical AI 🚀
Version Python Next.js FastAPI Gemini AI

"Your Personal AI Health Assistant – From Symptoms to Solutions in Seconds."

🌟 Why HealthPredict?
Imagine having a team of specialists and a medical translator in your pocket.

HealthPredict isn't just another form-filling app. It is a flagship Intelligent Healthcare Platform that bridges the gap between complex medical data and understandable, actionable insights.

Whether you are looking to assess risk factors for chronic conditions or trying to decipher a confusing lab report filled with medical jargon, HealthPredict handles it all with the power of Machine Learning and Generative AI.

✨ Features That Wow
🤖 1. Multi-Disease Risk Prediction (The "Oracle")
We don't guess; we calculate. Using trained Machine Learning models (Scikit-Learn), we provide accurate risk assessments for 8 Major Health Conditions:

🍬 Metabolic	❤️ Cardiovascular	🧠 Neurological	🛡️ Vital Organs
Diabetes	Heart Disease	Parkinson's	Kidney Disease
Thyroid	Stroke	Depression	Hepatitis
👉 Enter your vitals (e.g., BMI, Glucose, BP) and get an instant result.

📄 2. AI Medical Document Analyst (The "Interpreter")
Confused by Lab Reports? Simply upload your PDF medical reports (blood tests, prescriptions, discharge summaries).

Powered by Google Gemini 1.5 Flash: Our AI reads the document like a doctor would.
What you get: A concise summary, potential diagnoses, explained terminology, and recommended next steps.
No more Googling "high neutrophils meaning" and scaring yourself!
🎨 3. Modern, Beautiful UI
Built with Next.js 15 and Shadcn UI, the interface is:

Clean & Minimalist: Medical data shouldn't be overwhelming.
Responsive: Works perfectly on Mobile, Tablet, and Desktop.
Animated: Smooth transitions and interactive elements.
🛠️ The Tech Behind the Magic
This project employs a robust Microservices Architecture:

🧠 Backend (The Brain)
Framework: FastAPI (High performance, async Python)
ML Engine: Scikit-Learn (Random Forest, SVM, Logistic Regression models)
Generative AI: Google Gemini API (for document reasoning)
PDF Parsing: PyMuPDF & Fitz
Database: MySQL with SQLAlchemy ORM
💻 Frontend (The Face)
Framework: Next.js 15 (App Router)
Language: TypeScript (Type safety is non-negotiable)
Styling: Tailwind CSS 4 + Shadcn UI
State Management: React Hooks
🚀 Quick Start Guide
Ready to run the flagship? Follow these steps!

Prerequisite
Google Gemini API Key: Get one here
Step 1: Ignite the Backend 🔥
cd Backend

# 1. Create a virtual environment
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate

# 2. Install the heavy lifters
pip install -r requirements.txt

# 3. Configure your Intelligence (Add your API Key in main.py)
# API_KEY = "AIzaSy..."

# 4. Launch the Satellite
python main.py
Backend is now analyzing data at http://localhost:8000

Step 2: Launch the Frontend 🛸
cd Frontend

# 1. Install dependencies
npm install  # or pnpm install

# 2. Blast off!
npm run dev
Frontend is live at http://localhost:3000

📸 Usage Scenarios
Scenario A: The check-up
John, 45, wants to check his heart health.

Logs in to HealthPredict.
Selects "Heart Disease" from the Dashboard.
Enters his Age, Cholesterol levels, BP, and Max HR.
Instant Result: "Low Risk" (with tips to keep it that way!)
Scenario B: The Mystery Report
Sarah received a complex blood test result PDF.

Goes to "Analyze Report".
Uploads blood_work_jan2026.pdf.
Gemini AI Analysis: "Your Vitamin D is low, and Hemoglobin is normal. The doctor suggests Vitamin D supplements. Here are some dietary sources..."
🔮 Future Roadmap
 Chatbot Assistant: A conversational AI to answer follow-up health questions.
 Appointment Booking: Direct integration with local clinics.
 Wearable Sync: Import data from Apple Health / Fitbit directly.
 Voice Mode: Speak your symptoms instead of typing.
🤝 Contributing
This is a flagship project, and we welcome improvements!

Fork it.
Branch it (git checkout -b feature/CoolNewFeature).
Commit it (git commit -m 'Add CoolNewFeature').
Push it (git push origin feature/CoolNewFeature).
Open a Pull Request.
Made with ❤️ and 🧠 by Sanjana Empowering Health through Artificial Intelligence.
