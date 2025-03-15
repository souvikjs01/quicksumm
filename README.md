# 🚀 QuickSumm  

QuickSumm is a SaaS (Software as a Service) application that allows users to extract and summarize the key points from PDF files effortlessly. It combines advanced text extraction, AI-based summarization, and secure payment handling to provide a seamless user experience.

---

## 🌟 Features  
✅ **PDF Text Extraction**  
- Extracts text from PDF files using `pdf.js` for accurate text retrieval.  

✅ **AI-Powered Summarization**  
- Uses the Gemini API to generate concise bullet-point summaries based on extracted text.  

✅ **Secure Payment Integration**  
- Stripe payment integration for subscription and one-time payments.  

✅ **Modern Tech Stack**  
- Built with Next.js, TypeScript, and Prisma for a scalable and type-safe architecture.  

✅ **User Authentication & Session Management**  
- Secure login and session handling with cookies and JWT.  

✅ **PostgreSQL Database**  
- Prisma ORM used to manage user data, payment records, and summarization history.  

✅ **Responsive Design**  
- Fully responsive UI with a clean, minimal design.  

---

## 🏗️ Tech Stack  
| Technology | Purpose |
|------------|---------|
| **Next.js** | Frontend and Backend (API routes) |
| **TypeScript** | Type safety and better developer experience |
| **Prisma** | ORM for PostgreSQL |
| **PostgreSQL** | Database |
| **pdf.js** | PDF text extraction |
| **Gemini API** | AI-based summarization |
| **Stripe** | Payment processing |
| **Tailwind CSS** | Styling |
| **React-Hook-Form + Zod** | Form handling and validation |

---

## 🚀 How It Works  
### 1. **Upload a PDF File**  
- The user uploads a PDF file through a secure form.  
- `pdf.js` extracts the text content from the PDF.  

### 2. **Summarization**  
- The extracted text is sent to the Gemini API.  
- The AI model generates a structured summary with key points.  

### 3. **Display the Summary**  
- The summary is displayed in a clean, readable format.  
- The user can copy or download the summary.  

### 4. **Payment Handling**  
- Users can subscribe to a premium plan or make a one-time payment using Stripe.  
- Payment status and user tiers are stored securely in the database.  

