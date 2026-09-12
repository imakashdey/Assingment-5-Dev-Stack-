# ⚡ DevStack — Custom Developer Tech Stack Builder

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge&logo=githubpages)](https://imakashdey.github.io/Assingment-5-Dev-Stack-/)
[![React 19](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-Bundler-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)

> An interactive web application built with **React 19**, **TypeScript**, and **Tailwind CSS** that enables developers to explore, select, and manage their personalized technology stack with real-time feedback and state management.

---

## 🔗 Quick Links

- 🌐 **Live Website:** [DevStack Live Demo](https://imakashdey.github.io/Assingment-5-Dev-Stack-/)
- 📂 **GitHub Repository:** [imakashdey/Assingment-5-Dev-Stack-](https://github.com/imakashdey/Assingment-5-Dev-Stack-)

---

## 🚀 Overview

**DevStack** is a modern tech stack selection tool developed as an assignment project. It provides an intuitive catalog of popular programming languages, frameworks, libraries, databases, and DevOps tools. Users can explore curated information for each technology (ratings, difficulty level, category, badges) and assemble their ideal tech stack with smooth interactions and notifications.

---

## ✨ Key Features

- 🎯 **Dynamic Technology Catalog:** Renders technology cards asynchronously from JSON data featuring categories (Frontend, Backend, Database, DevOps, etc.), ratings, difficulty levels, and tags.
- ⚡ **React 19 `use()` & Suspense Integration:** Utilizes modern React 19 asynchronous data loading using the `use()` hook inside a `<Suspense />` boundary.
- ➕ **Interactive Stack Builder:** One-click functionality to add tools/frameworks to your custom tech stack.
- ⚠️ **Duplicate Item Protection:** Intelligent checks to prevent duplicate selections with real-time warning alerts via `react-toastify`.
- 📋 **"Your Stack" Panel & Management:**
  - Real-time counter of selected technologies.
  - Remove individual technologies from the active stack.
  - "Clear All" / reset button for a fresh start.
- 🎨 **Responsive & Polished UI:** Crafted with Tailwind CSS v4 featuring modern card layouts, badges, and smooth hover interactions across mobile, tablet, and desktop viewports.
- 🔔 **Toast Notifications:** Instant feedback on item addition, duplicate warnings, and removal actions.

---

## 🛠️ Tech Stack & Libraries

| Category | Technology / Library | Description |
| :--- | :--- | :--- |
| **Frontend Framework** | [React 19](https://react.dev/) | Component-based UI library utilizing new React 19 features |
| **Language** | [TypeScript](https://www.typescriptlang.org/) | Strongly typed JavaScript for reliable and scalable code |
| **Build Tool** | [Vite](https://vitejs.dev/) | Fast build tool and HMR development server |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) | Modern utility-first CSS framework |
| **Notifications** | [React-Toastify](https://fkhadra.github.io/react-toastify/) | Toast notifications for user feedback |
| **Linting & Quality** | [Oxlint](https://oxc.rs/) | High-performance JavaScript/TypeScript linter |
| **Deployment** | [GitHub Pages & Actions](https://pages.github.com/) | Automated CI/CD deployment pipeline |

---

## 📂 Project Structure

```text
Assingment-5-Dev-Stack-/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment workflow
├── public/
│   └── Data.json               # Technology dataset (name, tag, level, rating, etc.)
├── src/
│   ├── assets/                 # Icons & image assets
│   ├── Components/
│   │   ├── Footer/             # Footer component
│   │   ├── Hero/               # Hero & introduction banner
│   │   ├── Navbar/             # Top navigation bar
│   │   ├── Technologies/       # Main container fetching data & managing stack state
│   │   ├── TechnologyCard/     # Individual tech card UI & add handlers
│   │   └── YourStack/          # Selected stack sidebar & item deletion
│   ├── Type/
│   │   └── technology.ts       # TypeScript interfaces (Itechnologies)
│   ├── App.tsx                 # Main application root
│   ├── main.tsx                # React DOM entry point
│   └── index.css               # Global styles & Tailwind imports
├── package.json
├── tsconfig.json
└── vite.config.ts
