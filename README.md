# iOS Developer Portfolio

A modern, responsive portfolio website built with React to showcase iOS applications.

## Features

- Modern, clean design with dark theme
- Responsive layout for all devices
- Placeholder cards for your iOS apps
- Easy to customize and update

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Customizing Your Apps

Edit `src/components/AppsSection.jsx` to add your app details. Each app object can have:

- `name`: App name
- `description`: App description
- `icon`: URL or path to app icon image
- `technologies`: Array of technologies used (e.g., `['Swift', 'SwiftUI', 'Core Data']`)
- `appStoreLink`: Link to App Store
- `githubLink`: Link to GitHub repository (optional)

## Project Structure

```
src/
  ├── components/
  │   ├── Hero.jsx          # Hero section
  │   ├── AppsSection.jsx   # Apps showcase section
  │   ├── AppCard.jsx       # Individual app card component
  │   └── Footer.jsx        # Footer component
  ├── App.jsx               # Main app component
  ├── main.jsx              # Entry point
  └── index.css             # Global styles
```

## Technologies Used

- React 18
- Vite
- CSS3
