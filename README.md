# Anu Mariya Varghese – Portfolio

A clean, modern, and human-crafted portfolio website for **Anu Mariya Varghese**, Full-Stack Web & Python Developer and MCA student at FISAT, Kerala.

Built with **Next.js**, **React**, **TypeScript**, and **Tailwind CSS**.

---

## 🙋 About Anu Mariya

- **Name:** Anu Mariya Varghese
- **Role:** Full-Stack Web & Python Developer
- **Education:** Master of Computer Applications (MCA), FISAT (2025 – 2027) • Bachelor of Computer Application (BCA), Sahrdaya College (2022 – 2025)
- **Core Technologies:** MongoDB, Express.js, React.js, Node.js (MERN), Python, Flask, Scikit-learn, MySQL, REST APIs
- **Location:** Chalakudy / Angamaly, Kerala, India
- **Email:** [anumariyavarghese0317@gmail.com](mailto:anumariyavarghese0317@gmail.com)
- **Phone:** +91 9048782200
- **GitHub:** [https://github.com/Anu-Mariya](https://github.com/Anu-Mariya)
- **LinkedIn:** [https://www.linkedin.com/in/anu-mariya-varghese](https://www.linkedin.com/in/anu-mariya-varghese)

---

## 🛠️ Featured Projects

1. **Civic Sense – AI-Powered Complaint Platform**
   - A digital civic reporting web platform connecting citizens with municipal departments using AI photo categorization (Gemini API), GPS location tagging, and automatic duplicate detection.
   - *Tech:* React.js, Node.js, Express.js, MongoDB, Gemini API, Maps/GPS.

2. **Heart Hub – Health Prediction App**
   - An interactive machine learning web application using Scikit-learn Decision Tree models to predict heart attack risk from patient health metrics. Includes patient record tracking and clean REST endpoints.
   - *Tech:* Python, Flask, Scikit-learn, MySQL, HTML5, CSS3, JavaScript.

3. **Smart Cafeteria Management System**
   - A full-stack MERN platform built to streamline student cafeteria registrations, active food menus, and special daily offers with a live administrative dashboard.
   - *Tech:* MongoDB Atlas, Express.js, React.js, Node.js, Mongoose, Bootstrap 5.

---

## 🚀 Running Locally

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Development Server
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the portfolio live.

### 3. Build for Production
```bash
npm run build
npm run start
```

---

## 📁 Project Structure

```text
Portfolioo/
├── public/
│   └── anu-mariya-varghese.jpg    # Portrait photo
├── src/
│   ├── app/
│   │   ├── globals.css            # Styling & theme variables
│   │   ├── layout.tsx             # Root layout & metadata
│   │   └── page.tsx               # Main aggregated page
│   ├── components/
│   │   ├── Navbar.tsx             # Clean navigation & theme toggle
│   │   ├── Hero.tsx               # Introduction, photo card, direct actions
│   │   ├── About.tsx              # Authentic personal introduction
│   │   ├── Projects.tsx           # Projects I've Built (filtered view)
│   │   ├── Experience.tsx         # Internships & leadership roles
│   │   ├── Skills.tsx             # Skills & Technologies with search
│   │   ├── EducationCertifications.tsx # Degrees & verified certifications
│   │   ├── Contact.tsx            # Direct contact cards & message form
│   │   ├── Footer.tsx             # Footer & back-to-top
│   │   └── ThemeToggle.tsx        # Dark / Light theme switch
│   ├── data/
│   │   └── portfolioData.ts       # Central data file
│   └── types/
│       └── index.ts               # TypeScript types
├── next.config.js
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── package.json
└── README.md
```

---

## ✏️ Customizing Content

All personal details, projects, skills, and links can be updated directly in:
👉 `src/data/portfolioData.ts`
