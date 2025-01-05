# Recruito Landing

A modern landing page built using React, Vite, TypeScript, and Tailwind CSS.

## Project Overview

Recruito Landing is a responsive and performance-optimized web application designed to showcase modern web development best practices, including lazy loading, reusable components, and efficient CSS management.

---

## 🛠️ Tech Stack

- **React**: Frontend library for building user interfaces
- **Vite**: Fast and modern build tool
- **TypeScript**: Strongly typed JavaScript for better development experience
- **Tailwind CSS**: Utility-first CSS framework

---

## 📁 Folder Structure

````plaintext
src
├── assets        # Static assets (images, SVGs, etc.)
├── layouts       # Reusable layout components
├── sections      # Code for individual sections of the landing page
├── ui            # Reusable UI components (e.g., buttons)
└── index.tsx     # Application entry point

---

## 🚀 Getting Started

To set up the project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/mfkfawas/recruito.git
   cd recruito-landing
````

2. To install dependencies, run:

```bash
pnpm install
```

3. Start the development server:

```bash
pnpm run dev
```

The application will be available at http://localhost:5173

---

## 🌐 Deployment

The project is deployed on **Vercel**:  
[Recruito Landing - Live Demo](https://recruito-uyde.vercel.app/)

---

## 🌟 Key Features

    1.	Lazy Loading:
    •	Heavy components and SVGs are lazy loaded for better performance.
    •	A custom spinner is used as a fallback during lazy loading using React.Suspense.

    2.	Scoped Styles:
    •	Module styles combined with Tailwind CSS for scoped and maintainable styling.

    3.	Modern CSS Resets:
    •	CSS resets applied in index.css to ensure cross-browser consistency.

    4.	Reusable Colors:
    •	CSS variables defined in App.css for consistent theming and easy updates.
