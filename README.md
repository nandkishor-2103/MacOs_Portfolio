# macOS Portfolio

A modern personal portfolio website inspired by the macOS desktop experience.

This project presents my work, skills, resume, contact details, articles, and gallery inside an interactive desktop-style interface. Instead of a normal scrolling portfolio page, users can open apps, move windows, search sections, view my resume, and explore projects in a more engaging way.

## Live Project

View the live project here:

https://portfolio-murex-three-778ikhhl67.vercel.app

## Project Summary

macOS Portfolio is a frontend web application built to show my skills as a web developer. The goal of this project is to make a portfolio that feels different, clean, smooth, and easy to explore.

The website works like a small operating system in the browser. It has a top navigation bar, a dock, desktop folders, draggable windows, a project finder, a resume viewer, a contact window, a skills terminal, an article section, a photo gallery, and an archive/trash feature.

This project was fully developed by me.

## Why I Built This Project

Most portfolio websites look very similar. I wanted to build something that shows both my technical skills and my attention to user experience.

Through this project, I wanted to demonstrate that I can:

- Build a complete React application from scratch
- Create reusable and clean UI components
- Manage application state properly
- Add smooth animations and interactions
- Design a user-friendly interface
- Organize project data in a clear way
- Build a portfolio that feels polished and memorable

## Key Features

### macOS-Style Desktop Interface

The application has a desktop-like layout with a wallpaper, folders, app dock, top menu bar, and multiple windows. This gives users a familiar and interactive experience.

### Draggable and Resizable Windows

Each app opens inside a window. Users can drag, resize, focus, and close windows just like a desktop application.

### Interactive Dock

The dock contains shortcuts to important sections like Portfolio, Articles, Gallery, Contact, Skills, and Archive. The icons animate smoothly when the user moves the mouse over them.

### Project Finder

Projects are displayed in a Finder-like file manager. Users can open project folders, read project descriptions, view images, and open external links.

### Global Search

The project includes a Spotlight-style search feature. Users can quickly search and open different sections of the portfolio.

### Resume Viewer

The resume opens inside the application as a PDF viewer. Users can view the resume directly and download it when needed.

### Skills Terminal

The skills section is displayed like a terminal output. It shows my technical skills in a clean and organized way.

### Gallery and Archive

The gallery displays images in different categories. Images can be moved to the archive/trash and restored through the application state.

### Smooth Animations

GSAP is used to make the interface feel smooth and responsive. Animations are added to the welcome text, dock icons, and window opening behavior.

## Technologies Used

- React.js
- Vite
- Tailwind CSS
- JavaScript
- GSAP
- Zustand
- Immer
- React RND
- React PDF
- Day.js
- Lucide React
- React Tooltip

## What I Developed

I personally developed the complete project, including:

- Overall project structure
- macOS-style layout and user interface
- Reusable React components
- Dock and navigation system
- Window open, close, focus, drag, and resize behavior
- Global search feature
- Project folder and file system UI
- Resume PDF viewer
- Skills terminal window
- Contact section
- Gallery and archive logic
- State management using Zustand
- Animations using GSAP
- Styling using Tailwind CSS
- Asset integration and responsive layout handling

## How The Application Works

The application is built as a single-page React app. The main screen acts like a desktop. Each section of the portfolio is treated like an app or file.

When a user clicks a dock icon, folder, navigation item, or search result, the related window opens. Window data and open/close status are managed through a central Zustand store. This makes the interface feel connected and consistent.

The project data, skills, links, gallery items, and window settings are stored in a constants file. This keeps the content organized and easier to update.

## Folder Structure

```text
src
|-- components      Common UI parts like Dock, Navbar, Search, and Welcome screen
|-- constants       Project data, skills, app links, gallery data, and window settings
|-- hoc             Window wrapper used to create draggable and resizable windows
|-- store           Zustand stores for window and location state
|-- windows         App windows such as Finder, Resume, Terminal, Gallery, and Contact
|-- App.jsx         Main application layout
|-- main.jsx        React application entry point
|-- index.css       Global styles and Tailwind CSS styling
```

## Installation and Setup

Clone the project:

```bash
git clone https://github.com/nandkishor-2103/MacOs_Portfolio
```

Go to the project folder:

```bash
cd MacOs_Portfolio
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build the project for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Available Scripts

```bash
npm run dev
```

Starts the project in development mode.

```bash
npm run build
```

Creates an optimized production build.

```bash
npm run preview
```

Runs the production build locally for testing.

```bash
npm run lint
```

Checks the code for linting issues.

## What This Project Shows About Me

This project shows that I can build more than a basic website. It shows my ability to think about design, user experience, component structure, state management, animations, and clean frontend development.

It also shows that I can turn an idea into a complete working product with a polished interface and real user interactions.

## Future Improvements

Some improvements I can add in the future:

- Better mobile experience
- More project case studies
- Dark and light theme support
- More detailed project pages
- Backend support for contact form submissions
- Admin panel to update portfolio content

## Author

Nandkishor Mandal

Frontend and full-stack developer focused on building clean, interactive, and user-friendly web applications.
