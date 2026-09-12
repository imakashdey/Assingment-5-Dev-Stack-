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

**DevStack** is a modern developer tool created as an assignment project for assembling customized development stacks. It provides an interactive catalog of popular frontend, backend, database, and DevOps technologies. Users can browse technical metadata (categories, difficulty levels, ratings, badges) and build their dream tech stack with instant feedback.

---

## ✨ Key Features

1. 🎯 **Dynamic Technology Catalog:** Fetches and displays tech cards asynchronously with icons, tags, ratings, difficulty levels, and category chips.
2. ➕ **Interactive Stack Management:** Add technologies to your custom stack with duplicate prevention, instant counter updates, individual removal, and a "Remove All" option.
3. 🔔 **Real-Time Toast Feedback & Modern UI:** Integrated with `react-toastify` for real-time notifications and styled with a signature orange-to-violet gradient theme.

---

## 🛠️ Technologies Used

- **Frontend:** React 19, TypeScript
- **Styling:** Tailwind CSS v4
- **Notifications:** React-Toastify
- **Build Tool:** Vite
- **Deployment:** GitHub Pages & GitHub Actions

---

## 💻 Local Setup & Installation

```bash
# 1. Clone the repo
git clone https://github.com/imakashdey/Assingment-5-Dev-Stack-.git
cd Assingment-5-Dev-Stack-

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

❓ React Conceptual Questions & Answers
1. What is JSX, and why is it used in React?
Answer:
JSX (JavaScript XML) is a syntax extension for JavaScript that lets us write HTML-like code directly inside JavaScript files. It is used in React because it makes building UI components visual, concise, and intuitive while giving us the full power of JavaScript expressions inside {} curly braces.

2. What is the difference between props and state?
Answer:

Props (Properties): Read-only data passed from a parent component down to a child component. A child cannot modify its incoming props.
State: Internal, mutable data managed within the component itself. When state changes (via a state setter function), React re-renders the component to update the UI.
3. What does the useState hook do, and where did you use it in this project?
Answer:
The useState hook allows functional components to store and manage local state. In this project, useState was used in Technologies.tsx (const [stack, setStack] = useState<Itechnologies[]>([])) to track the list of selected technologies in the user's stack.

4. What does the useEffect hook do, and why did you need it to load the JSON data?
Answer:
useEffect handles side effects in React components, such as data fetching, subscriptions, or DOM mutations after rendering. When fetching data from an external API or a local JSON file, fetching inside an effect (or React 19's use with Suspense) ensures the network request runs after component mount without causing infinite re-render loops.

5. Why does every item in a .map() list need a unique key prop?
Answer:
React uses the key prop to identify which items have changed, been added, or been removed during Virtual DOM diffing. A stable and unique key prevents unnecessary DOM re-creation and avoids UI rendering bugs.

6. What is conditional rendering? Show one place you used it.
Answer:
Conditional rendering is the ability to render different UI elements or components based on certain conditions (like if, ternary ? :, or logical && operators).
Example used in project: In the YourStack panel:

tsx
{technologies.length === 0 ? (
  <p className="text-gray-400 text-center py-6">No technologies added yet.</p>
) : (
  technologies.map(tech => <StackItem key={tech.name} tech={tech} />)
)}
7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
Answer:

Parent to Child: The parent passes data downwards through props (e.g., <TechnologyCard technologies={data} />).
Child to Parent: The parent passes a callback function as a prop to the child. When an event happens (like a button click), the child invokes that callback with data, notifying the parent (e.g., onAdd(technology)).
👤 Author
Akash Dey

GitHub: @imakashdey
Live Project: DevStack Assignment
