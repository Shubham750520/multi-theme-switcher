# 🎨 Multi-Theme Switcher App

A fully responsive React + TypeScript web app that allows users to switch between three unique themes — each with its own layout, color palette, and font style — as required in the Frontend Developer Assessment.

Built with:
- React + TypeScript
- Tailwind CSS v4
- React Router v6
- Vite
- Context API
- Axios

---

## 🚀 Features

✅ Fully responsive design  
✅ Theme switcher with animated dropdown  
✅ Theme persistence using localStorage  
✅ Context API for global theme management  
✅ Product list fetched from fakestoreapi.com  
✅ Routing with React Router  
✅ No external UI libraries — completely Tailwind based

---

## 🎨 Themes

1. 🧊 Theme 1 (Default)
   - Light background
   - Simple, minimalist layout
   - Sans-serif font
   - Top navigation bar (header)

2. 🌙 Theme 2 (Dark + Sidebar)
   - Dark mode background
   - Sidebar layout (desktop only)
   - Serif font
   - Top bar on mobile, collapses into sidebar on md+

3. 🌈 Theme 3 (Colorful)
   - Colorful playful design
   - Google Font: Pacifico
   - Card-based grid layout
   - Top navigation

---

## 📱 Responsive Layout

- Theme 1 & 3: Standard vertical layout with top navigation
- Theme 2:
  - On mobile: top navigation
  - On desktop (md+): fixed sidebar on the left and content to the right

---

## 🧩 Project Structure

multi-theme-switcher/
├── public/
├── src/
│ ├── assets/
│ ├── components/
│ │ ├── Header.tsx
│ │ ├── ProductList.tsx
│ ├── context/
│ │ └── ThemeContext.tsx
│ ├── pages/
│ │ ├── Home.tsx
│ │ ├── About.tsx
│ │ └── Contact.tsx
│ ├── App.tsx
│ ├── main.tsx
│ └── index.css
├── tsconfig.json
├── vite.config.ts
├── package.json
└── README.md


---

## 🔧 Getting Started

Clone the repository or download the zip and follow these steps:

1. Install dependencies:

```bash
npm install

2. Start development server:
npm run dev

3. Open in browser
http://localhost:5173


🔌 API
Fetching products from:

📦 https://fakestoreapi.com/products

Data is displayed as a product card or list based on the selected theme.

 Security Practices
No usage of dangerouslySetInnerHTML

No large third-party UI kits

Controlled React state

No unsafe evals or mutations