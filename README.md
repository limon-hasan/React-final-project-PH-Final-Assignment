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
* **Definition:** JSX stands for **JavaScript XML**. It is a syntax extension for JavaScript that allows you to write HTML-like markup directly inside JavaScript files.
* **Why it is used:** It makes UI code readable, visual, and expressive. It couples UI layout with rendering logic in one place, which Babel then compiles into standard `React.createElement()` calls.

---

### 2. What is the difference between props and state?

| Feature | Props | State |
| :--- | :--- | :--- |
| **Origin** | Passed from a parent component | Managed internally within the component |
| **Mutability** | Read-only (immutable by child) | Mutable (via its setter function) |
| **Purpose** | Configures child components and passes data/callbacks | Tracks dynamic data that changes over time |
| **Re-render** | Changes trigger a re-render of the child | Updating triggers a re-render of the component |

---

### 3. What does the useState hook do, and where did you use it in this project?
* **What it does:** `useState` is a React Hook that lets functional components hold, update, and preserve state between re-renders.
* **Where used:** 
  * To store fetched data (e.g., `const [data, setData] = useState([])`).
  * To manage user interactions such as selected items, cart/bookmarks, or active filters.

---

### 4. What does the useEffect hook do, and why did you need it to load the JSON data?
* **What it does:** `useEffect` handles side effects in functional components (data fetching, DOM manipulation, timers) after rendering.
* **Why used for JSON:** Fetching data is an asynchronous side effect. Using `useEffect` with an empty dependency array (`[]`) ensures the data fetches only once when the component mounts, preventing infinite re-rendering loops.

---

### 5. Why does every item in a `.map()` list need a unique `key` prop?
* It provides a persistent identity for each DOM node.
* React's Virtual DOM diffing algorithm uses keys to quickly determine which elements were added, removed, or changed.
* Without unique keys, React may re-render the entire list unnecessarily or cause UI state bugs in list items.

---

### 6. What is conditional rendering? Show one place you used it.
* **Definition:** Dynamically controlling which UI elements are rendered based on a condition or component state.
* **Example (Empty Stack / List message):**
```jsx
{items.length === 0 ? (
  <p className="empty-message">No items in your stack!</p>
) : (
  items.map((item) => <Card data="{item}" key="{item.id}"/>)
)}