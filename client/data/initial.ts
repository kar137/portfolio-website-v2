import { Project } from "@/components/sections/Projects";
import type { Certification } from "@/components/sections/Certifications";
import type { BlogPost } from "@/components/sections/Blog";

export const initialProjects: Project[] = [
  {
    id: "sambodhan",
    title: "Sambodhan: AI-Powered Grievance Redressal System for Local Governance",
    description:
      `Sambodhan is a comprehensive, full-stack platform designed to revolutionize citizen grievance management for local governments. By integrating advanced AI and modern web technologies, Sambodhan streamlines the entire lifecycle of complaint handling—from multi-channel submission to automated classification, real-time analytics, and continuous model improvement.

Key Features:
🌐 Multi-channel Grievance Submission: Citizens can file complaints via web and mobile, ensuring accessibility for all.
🤖 AI-Powered Department Classification: State-of-the-art NLP models automatically route grievances to the correct municipal department.
⚡ Urgency & Sentiment Detection: Instantly assesses complaint priority and tone for faster, more effective responses.
💬 Integrated AI Chatbot: Provides conversational support, FAQs, and guided grievance submission using LLMs (Groq Llama-3.3-70B, XLM-RoBERTa).
📊 Real-Time Analytics Dashboard: Offers interactive insights for both citizens and administrators, including response times, location hotspots, and resolution rates.
🛠️ Admin Dashboard: Enables efficient tracking, management, and resolution of grievances.
🔒 Secure Authentication: Implements JWT-based, context-aware user access for robust security.
🧩 RESTful API: FastAPI backend supports seamless integration and modular expansion.
🔄 Continuous Learning: Automated retraining and dataset preparation ensure models improve with real-world feedback.
🐳 Dockerized Deployment: Simplifies setup for frontend, backend, and orchestrator services.
🔁 CI/CD Automation: GitHub Actions streamline development, testing, and deployment.

System Architecture:
- Frontend: Next.js (React, TypeScript) SPA with dashboards for citizens, department admins, municipal admins, and super admins.
- Backend: FastAPI RESTful API with modular routers for complaints, analytics, chatbot, and more.
- ML Models: Transformer-based classifiers for department and urgency, leveraging Hugging Face and Groq LLMs.
- Database: PostgreSQL for feedback, analytics, and retraining.
- DevOps: Docker and GitHub Actions for scalable, automated deployment.

Technical Highlights:
- Modular codebase for scalability and maintainability.
- Real-time integration with Retrieval-Augmented Generation (RAG) for accurate, document-grounded chatbot responses.
- Secure, context-driven session management for personalized conversations.
- Multi-language support (Nepali & English).

Impact:
Sambodhan empowers local governments to deliver transparent, efficient, and citizen-centric grievance redressal. By automating classification, prioritization, and analytics, it enables faster resolution, data-driven decision-making, and continuous improvement of public services.

`,
    image: "/project-images/sambodhan-logo.gif",
    technologies: [
      "Next.js",
      "FastAPI",
      "Python",
      "Transformers",
      "llama-3.3-70b",
      "Docker",
      "PostgreSQL"
    ],
    githubUrl: "https://github.com/kar137/Sambodhan-AI-Powered-Grievance-Redressal-System-for-Local-Governance",
  },

  {
    id: "recipeshare",
    title: "RecipeShare: AI-Powered Recipe Recommendation Platform",
    description: `08/2025 - 11/2025
  RecipeShare is a production-ready, microservices-based recipe recommendation platform designed for personalized, real-time culinary discovery. The system combines scalable backend services (Spring Boot, FastAPI) with a responsive React frontend and a robust data pipeline (PostgreSQL, Kafka, Redis, Elasticsearch) to deliver low-latency recommendations at scale.

  At the core is a hybrid recommender: ALS-based collaborative filtering for broad user–item signals paired with a PyTorch Two-Tower deep model that learns rich user and recipe embeddings from behavior and metadata. The models were trained on 700K+ user interactions and evaluated with production ranking metrics (NDCG@K, Precision@K) to optimize relevance and diversity in top-k results.

  Key features include session-aware ranking, cold-start handling via content-aware embeddings, and a near-real-time feature store powered by Redis and Kafka for streaming updates. The platform supports A/B experiments, offline evaluation pipelines, and automated model deployment to inference services for consistent, measurable improvements in personalization.

  Impact: enabled highly-personalized recipe discovery with strong ranking gains in live experiments, reduced time-to-recommend, and supported rich UX features like adaptive meal suggestions, dietary filters, and contextual recipe bundles.
  `,
    image: "/project-images/recipeshare.png",
    technologies: [
      "Spring Boot",
      "FastAPI",
      "React",
      "PostgreSQL",
      "Kafka",
      "Redis",
      "Elasticsearch",
      "PyTorch",
      "ALS",
    ],
    githubUrl: "https://github.com/kar137/RecipeShare-Recipe-Management-System",
  },

  {
    id: "p6",
    title: "QueryPilot: Smart AI Docs Assistant",
    description: `QueryPilot is a next-generation AI documentation assistant that transforms static documents into interactive knowledge bases using advanced RAG (Retrieval-Augmented Generation) and Google Gemini AI. It provides instant answers, smart booking, and a modern conversational UI for seamless document interaction.

  Built with a modular, containerized architecture, QueryPilot is designed for extensibility and enterprise deployment. The backend leverages FastAPI and LangChain to orchestrate document ingestion, vector search, and conversational flows, while the Next.js frontend delivers a sleek, responsive user experience with real-time chat and booking forms. The system supports multi-format document uploads, context-aware Q&A, and persistent storage for both documents and appointments.

  QueryPilot is ideal for teams, businesses, and organizations seeking to automate document analysis, streamline knowledge retrieval, and enable intelligent user interactions. Its robust error handling, multi-session support, and professional dark/light theme make it suitable for both internal and customer-facing use cases.

  Key Features:
  📄 Upload and analyze PDF, DOCX, and TXT documents
  🧠 Precision RAG technology with FAISS-powered semantic search
  💬 Real-time conversational UI with chat and typing indicators
  🌗 Professional dark/light theme toggle
  🗂️ Multi-format support and smart text chunking
  🤖 AI-powered appointment booking and natural language forms
  🛡️ Enterprise-ready, containerized architecture for scalable deployment
  🧩 Context preservation and intelligent routing for accurate responses
  🗃️ Persistent database integration for appointments and document vectors

  Impact:
  QueryPilot streamlines document management and knowledge retrieval for teams and enterprises, enabling instant Q&A, automated booking, and context-aware chat—all in a secure, scalable, and user-friendly platform. It empowers users to interact with documents conversationally, automate scheduling, and unlock actionable insights from unstructured data.

  Tech Stack:
  🚀 Next.js 15, React 19, TypeScript, Tailwind CSS v4
  ⚙️ FastAPI, Python 3.10+, Uvicorn
  🤖 Google Gemini 1.5-Flash, LangChain, FAISS
  🗄️ SQLite, Vector Storage
  🐳 Docker, Docker Compose
  `,
    image: "/project-images/querypilot.png",
    technologies: ["Next.js", "React", "TypeScript", "FastAPI", "Python", "LangChain", "FAISS", "Gemini", "Docker"],
    githubUrl: "https://github.com/kar137/QueryPilot-SmartDocsAssistant",
  },

  {
    id: "p4",
    title: "StressSignals: Mental Health Risk Predictor",
    description: `StressSignals is a data-driven web application designed to assess the likelihood of mental health treatment needs among tech professionals. Built with Python, Streamlit, and machine learning, it leverages survey data and explainable AI to provide actionable insights and predictions.

  The app guides users through a simple, interactive form to enter workplace and personal details, then instantly predicts the likelihood of seeking mental health treatment. Users receive clear, visual feedback on how each factor influences their risk, thanks to SHAP-powered interpretability. The platform’s EDA tools help uncover key trends in age, gender, remote work, and company size, making it valuable for both individuals and organizations.

  StressSignals is used to raise awareness, support early intervention, and inform HR policies in tech companies. Its transparent, user-friendly design encourages open conversations about mental health and empowers users to take proactive steps.

  Key Features:
  📊 Exploratory Data Analysis (EDA) with interactive visualizations
  🧠 Predicts treatment-seeking behavior using workplace and demographic factors
  🤖 Trained on OSMI Mental Health in Tech Survey data
  🏆 Random Forest, Logistic Regression, and XGBoost models
  🔍 SHAP-based interpretability for feature importance
  🌐 Streamlit app for user-friendly predictions and insights
  🖼️ Visualizations of age, gender, remote work, company size, and more

  Impact:
  StressSignals empowers individuals and organizations to understand mental health trends, identify risk factors, and promote early intervention. By combining predictive analytics with explainable AI, it helps raise awareness and support for mental health in the tech industry. The app fosters a culture of openness and data-driven decision-making for better workplace well-being.

  Tech Stack:
  🐍 Python, Jupyter Notebook
  📊 Streamlit
  🧠 Scikit-Learn, XGBoost, Random Forest
  🔬 SHAP
  `,
    image: "/project-images/stresssignals.png",
    technologies: ["Python", "Streamlit", "Jupyter", "Scikit-Learn", "XGBoost", "Random Forest", "SHAP"],
    githubUrl: "https://github.com/kar137/stress-signals-mental-health-risk-predictor",
  },

  {
    id: "p1",
    title: "Resume Analyzer (FastAPI)",
    description: `Resume Analyzer is a FastAPI-powered microservice designed to automate resume parsing and skill extraction for HR and recruitment workflows. It leverages modern backend best practices to deliver fast, reliable, and scalable document analysis.

  The service accepts PDF and DOCX resumes, processes them asynchronously, and extracts valuable insights such as detected skills, word and sentence counts, and document metadata. By utilizing FastAPI’s BackgroundTasks and async endpoints, Resume Analyzer ensures efficient handling of large volumes of documents without blocking the main application flow.

  The microservice is built with clean architecture principles, separating business logic, data models, and API routes for maintainability and extensibility. Automated testing with Pytest and continuous integration via GitHub Actions guarantee code reliability and rapid iteration.

  Resume Analyzer is fully containerized with Docker, making it easy to deploy across different environments. It follows 12-Factor App principles for configuration, environment management, and scalability, ensuring robust performance in both development and production.

  By streamlining resume analysis, Resume Analyzer empowers organizations to automate candidate screening, extract actionable data, and improve recruitment efficiency with minimal manual intervention.

  Key Features:
  📄 Upload PDF or DOCX resumes
  🧠 Extract detected skills, word and sentence counts
  🔄 Background processing with FastAPI’s BackgroundTasks
  ⚡ Async endpoints and database operations
  🧪 Pytest-based test coverage
  🐳 Dockerized deployment with optional Docker Compose
  📋 CI/CD pipeline using GitHub Actions
  ✅ Clean architecture with FastAPI routers & dependencies
  🧾 12-Factor principles for configuration and environment management

  
  Tech Stack:
  🚀 FastAPI
  🐍 Python 3.10+
  🐳 Docker
  🧪 Pytest
  ⚙️ GitHub Actions
`,
    image: "/project-images/Resume-analyzer.png",
    technologies: ["Python", "FastAPI", "Docker", "Machine Learning"],
    githubUrl: "https://github.com/kar137/Resume-Analyzer-FastAPI",
  },


  {
    id: "p2",
    title: "Machine Learning Portfolio",
    description: "Jupyter Notebook showcasing machine learning experiments and models.",
    image: "/placeholder.svg",
    technologies: ["Python", "Jupyter", "scikit-learn"],
    githubUrl: "https://github.com/kar137/Machine-Learning-Portfolio",
  },

];

export const initialCerts: Certification[] = [
  {
    id: "c1",
    title: "TensorFlow Developer Certificate",
    issuer: "Google",
    date: "2021-06-01",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    link: "https://www.tensorflow.org/certificate",
  },
  {
    id: "c2",
    title: "AWS Certified Machine Learning – Specialty",
    issuer: "Amazon Web Services",
    date: "2022-04-15",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    link: "https://aws.amazon.com/certification/certified-machine-learning-specialty/",
  },
];

export const initialPosts: BlogPost[] = [
  {
    id: "b1",
    title: "Building Reliable RAG Systems",
    description:
      "Design patterns, evaluation strategies, and latency tips for production RAG.",
    date: "2024-08-10",
    tags: ["RAG", "LLMs", "Vector DB"],
    image: "/placeholder.svg",
    content: `Retrieval-Augmented Generation (RAG) pairs a parametric model with a non-parametric datastore.\n\nKey patterns: \n- Chunking with semantic overlap \n- Query rewriting and expansion \n- Hybrid search (sparse + dense) \n- Reranking for precision \n\nMeasure with task-specific evals (exact match, semantic similarity, factuality). Invest in observability (latency, hit-rate, hallucinations) and add guardrails to constrain prompts and outputs.`,
  },
  {
    id: "b2",
    title: "From Prototypes to MLOps",
    description:
      "A roadmap for turning notebooks into maintainable production systems.",
    date: "2024-05-02",
    tags: ["MLOps", "CI/CD", "Monitoring"],
    image: "/placeholder.svg",
    content: `Productionizing ML requires reproducibility, automation, and monitoring.\n\nSteps: \n1) Package training code, pin deps, capture configs. \n2) Automate pipelines (data -> train -> eval -> deploy). \n3) Track datasets, models, metrics, and lineage. \n4) Ship with rollbacks and canaries. \n5) Monitor drift, performance, and cost; schedule retrains.`,
  },
];
