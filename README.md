# 🖥️ Roadmap — Frontend

The frontend for **Roadmap**, a learning platform for developers. Built with React + Vite + Tailwind CSS, it consumes content from a Sanity CMS backend and includes a blog reader, resource hub, and personal task tracker.

---

## ⚡ Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| [React](https://react.dev/) | ^19 | UI library |
| [Vite](https://vitejs.dev/) | ^8 | Dev server & build tool |
| [React Router DOM](https://reactrouter.com/) | ^7 | Client-side routing |
| [Tailwind CSS](https://tailwindcss.com/) | ^4 | Utility-first CSS |
| [Framer Motion](https://www.framer.com/motion/) | ^12 | Animations |
| [Swiper](https://swiperjs.com/) | ^12 | Touch slider |
| [@sanity/client](https://www.sanity.io/docs/js-client) | ^7 | Sanity CMS data fetching |
| [@portabletext/react](https://portabletext.org/) | ^6 | Rich text rendering |
| [MUI (Material UI)](https://mui.com/) | ^7 | UI components |
| [Lucide React](https://lucide.dev/) | ^1 | Icons |
| [React Hot Toast](https://react-hot-toast.com/) | ^2 | Toast notifications |
| [Axios](https://axios-http.com/) | ^1 | HTTP client |

---

## 🗂️ Project Structure

```
frontend/
├── public/                  # Static assets
├── src/
│   ├── App.jsx              # Root router configuration
│   ├── main.jsx             # App entry point
│   ├── index.css            # Global styles
│   ├── pages/
│   │   ├── Home.jsx         # Landing page
│   │   ├── Blog.jsx         # Blog listing page
│   │   └── Task.jsx         # Task tracker page
│   ├── components/
│   │   ├── Hero.jsx         # Hero section
│   │   ├── Intro.jsx        # Intro section
│   │   ├── Slider.jsx       # Horizontal card slider
│   │   ├── Resources.jsx    # Learning resources section
│   │   ├── ResourcesCard.jsx
│   │   ├── Freshers.jsx     # Beginner-focused section
│   │   ├── MasterCard.jsx   # Featured info card
│   │   ├── BlogPost.jsx     # Blog post list item
│   │   ├── SinglePost.jsx   # Full blog post view
│   │   ├── TaskCard.jsx     # Individual task card
│   │   ├── AddTask.jsx      # Add task trigger button
│   │   ├── AddTaskModal.jsx # Modal form to add/edit tasks
│   │   ├── SearchBar.jsx    # Task search input
│   │   ├── Shimmer.jsx      # Loading skeleton
│   │   ├── Navbar.jsx       # Navigation bar
│   │   ├── Error.jsx        # Error boundary/page
│   │   └── ...              # Other UI components
│   ├── layout/
│   │   └── MainLayout.jsx   # Shared page layout (Navbar + Outlet)
│   ├── animaton/
│   │   └── InfiniteScroll.jsx  # Framer Motion marquee animation
│   ├── contextApi/
│   │   └── TasksContext.jsx    # Global task state (Context API)
│   ├── hooks/               # Custom React hooks
│   ├── utils/               # Constants and helpers
│   └── assets/              # Images and static files
├── index.html
├── vite.config.js
├── vercel.json              # Vercel deployment config
└── package.json
```

---

## 🔀 Routes

| Path | Component | Description |
|------|-----------|-------------|
| `/` | `Home` | Hero, Intro, Slider, Resources, Freshers sections |
| `/blog` | `Blog` | Sanity-powered blog post listing |
| `/blog/:slug` | `SinglePost` | Individual blog post with Portable Text |
| `/task` | `Task` | Personal task tracker |

---

## ✅ Task Tracker

The Task Tracker page (`/task`) is a fully client-side feature with **localStorage persistence**.

### Features
- ➕ Add tasks with title, description, and priority
- 🗑️ Delete tasks
- ✏️ Edit existing tasks
- ✅ Mark tasks as complete / incomplete
- 🔍 Real-time search by title or description
- 🎛️ Filter by: All / Completed / Not Completed / Priority (High, Medium, Low)

### State Management

Powered by **React Context API** via `TasksContext`:

```js
const { allTasks, addTask, deleteTask, editTask, markComplete } = useContext(TasksContext);
```

Tasks are persisted in `localStorage` and rehydrated on page load.

---

## 📝 Blog System

Blog content is managed in **Sanity CMS** and fetched using `@sanity/client`. Post body is rendered with `@portabletext/react`.

Each post includes: title, slug, author, main image, categories, published date, and rich body content.

---

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18
- npm >= 9

### Installation

```bash
cd frontend
npm install
```

### Environment Variables

Create a `.env.local` file:

```env
VITE_SANITY_PROJECT_ID=your_sanity_project_id
VITE_SANITY_DATASET=production
```

### Run Development Server

```bash
npm run dev
```

App runs at → `http://localhost:5173`

---

## 📦 Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start local dev server |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

---

## ☁️ Deployment

Configured for **Vercel** via `vercel.json`. Push to your connected Git repository to trigger automatic deploys.

```bash
# Or deploy manually via Vercel CLI
vercel --prod
```
