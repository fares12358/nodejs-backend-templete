# Node.js Backend Template

A clean and reusable Node.js backend template using **Express** and **Mongoose** — ready to use with just a few steps. This template is ideal for building RESTful APIs quickly and consistently.

> ✅ Includes important modules like `express`, `mongoose`, `dotenv`, `cors`, and `nodemon` — everything you need to get started fast.

---

## 📝 Description

This template is a fully configured boilerplate for Node.js backend development. It's designed to help developers:

- Save time setting up projects
- Maintain consistency across apps
- Start coding immediately with a ready-to-run server and MongoDB connection

Just install it, set your environment variables, and start coding.

## 📚 Template Versions and Features

This template is continuously maintained and released in versions. Each version includes new features. Choose the version that fits your project:

| Version  | Features Included                                                                   |
|----------|-------------------------------------------------------------------------------------|
| v1.0.0   | ✅ Express server<br>✅ MongoDB connection<br>✅ `.env` support<br>✅ CORS config |
| v1.0.1 | 🔼 Adds email sending feature with Nodemailer<br>🔼 Professional reusable HTML email templates<br>🔼 Updated utils folder with sendEmail.js and emailTemplates |
| v1.0.2   | 🔼 Adds file uploads using `multer`<br>🔼 Validations using `express-validator`    |

---

## 🚀 Use a Specific Version with `npx degit`

To use a specific version of the template, you can reference a tag like this:

- npx degit fares12358/nodejs-backend-templete#v1.0.0 my-app
- cd your-project-name
- npm install
- npm run dev

---

## 🛠️ Create a new project using this template:

- npx degit fares12358/nodejs-backend-templete your-project-name
- cd your-project-name
- npm install
- npm run dev

---

## 🚀 Version

**v1.0.0**

---

## 📦 Dependencies Used

- **express** – Web framework for Node.js
- **mongoose** – ODM for MongoDB
- **dotenv** – Load environment variables
- **cors** – Cross-Origin Resource Sharing setup
- **nodemon** – Auto-reload for development

---

## 📁 Folder Structure

src/<br>
├── config/<br>
│ └── db.js # MongoDB connection logic using MONGO_URI from .env<br>
│<br>
├── controllers/<br>
│ └── exampleController.js # Sample controller logic<br>
│<br>
├── middleware/<br>
│ └── exampleMiddleware.js # Add custom middleware here<br>
│<br>
├── models/<br>
│ └── exampleModel.js # Mongoose schemas/models<br>
│<br>
├── routes/<br>
│ └── exampleRoutes.js # All API route definitions<br>
│<br>
└── server.js # App entry point, initializes express app and DB connection<br>

---

## ⚙️ Environment Setup

Create a `.env` file in the root with the following:

- MONGO_URI=your-mongodb-connection-string
- FRONT_BASE_URL=http://localhost:3000

---

## 🧪 Version Notes – v1.0.0

Express server set up

MongoDB connection with Mongoose (src/config/db.js)

CORS support using FRONT_BASE_URL

Environment variable support via .env

Predefined project structure (controllers, models, routes, etc.)

Dev mode with nodemon

---

## 🚀 Version

**v1.0.1**

---

## 📦 Dependencies Used

- **express** – Web framework for Node.js 
- **mongoose** – ODM for MongoDB
- **dotenv** – Load environment variables
- **cors** – Cross-Origin Resource Sharing setup
- **nodemon** – Auto-reload for development
- **nodemailer** – Send emails with Node.js using SMTP or third-party services   

---

## 📁 Folder Structure

src/<br>
├── config/<br>
│   └── db.js                # MongoDB connection<br>
├── controllers/<br>
│   └── emailController.js   # Example controller using Nodemailer<br>
├── middleware/<br>
├── models/<br>
├── routes/<br>
├── utils/<br>
│   ├── sendEmail.js         # Email function using Nodemailer<br>
│   └── emailTemplates/<br>
│       └── welcomeTemplate.js # HTML template for emails<br>
└── server.js<br>
.env                         # Environment variables<br>

---

## ⚙️ Environment Setup

Create a `.env` file in the root with the following:

- EMAIL_USER=your_email@gmail.com
- EMAIL_PASS=your_email_app_password

---

## 🔥 v1.0.1 Features

- ✅ Nodemailer integration for sending emails
- ✅ Professional HTML email template (welcome message)
- ✅ `/utils/emailTemplates/welcomeTemplate.js` for reusable email formatting
- ✅ `.env` support for email credentials (`EMAIL_USER`, `EMAIL_PASS`)
- ✅ Example controller to send welcome emails

---

## 👨‍💻 Author
- Fares Mohamed
- GitHub: @fares12358
- LinkedIn [https://www.linkedin.com/in/fares-mohamed-74980a241/]
- Portfolio [https://fares-portfolio.vercel.app/]