# ⚡ DevStack

> An interactive developer workspace designed to curate, organize, and assemble modern tech stacks with real-time feedback.

---

## 📖 About The Project

**DevStack** is a modern developer tool created to take the friction out of architectural decision-making. Developers can browse curated technologies across frontend, backend, database, and DevOps domains, compare options side-by-side, and assemble an optimized technology stack for their next project within a clean, reactive interface.

---

## 🛠️ Technologies Used

* **Frontend Framework:** React 19
* **Type System:** TypeScript
* **Styling & UI:** Tailwind CSS, DaisyUI
* **Build System:** Vite
* **Notifications:** React-Toastify
* **Icons:** React Icons

---

## ✨ Key Features

* **Interactive Stack Builder:** Browse diverse software categories—Frontend, Backend, Database, and DevOps—and add tools to your stack with persistent visual state indicators and dynamic card styling.
* **Duplicate Detection & Toast Feedback:** Intelligent validation prevents duplicate entries. Powered by `react-toastify`, the app delivers instant notifications for additions, duplicate attempts, single removals, and full resets.
* **Live Workspace Dashboard & Single-Variable Theming:** A dynamic sidebar updates stack metrics in real time with quick-delete options. The entire application is styled with a centralized CSS gradient theme that enables instant re-theming across all components from a single source variable.

---

## 🚀 Getting Started

### Prerequisites

* **Node.js:** v18.0.0 or higher
* **Package Manager:** npm, pnpm, or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone [https://github.com/your-username/devstack.git](https://github.com/your-username/devstack.git)
   cd devstack



   ---

## ❓ React Concepts & Questions

### 1. What is JSX, and why is it used in React?
JSX (JavaScript XML) is a syntax extension that allows us to write HTML-like markup directly inside JavaScript or TypeScript. It is used because it keeps the UI layout and component logic together in one place, making the code much cleaner, readable, and easier to maintain.

---

### 2. What is the difference between props and state?
* **Props:** Read-only data passed down from a parent component to a child component. The child cannot change props directly.
* **State:** Internal data managed locally inside a component. When state updates, React automatically re-renders the component to update the UI.

---

### 3. What does the useState hook do, and where did you use it in this project?
The `useState` hook allows functional components to declare and track local reactive state.
* **Where used in this project:** Used in `Technologies.tsx` to store and manage the user's selected tech stack:
  ```tsx
  const [selectedTech, setSelectedTech] = useState<ITechnology[]>([]);