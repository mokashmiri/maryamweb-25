# Maryam Keshmiri - Artist Portfolio

A modern, responsive portfolio website showcasing the artwork and projects of Maryam Keshmiri. Built with React, Vite, and Tailwind CSS.

## 🎨 About

Maryam Keshmiri's practice engages the intricate relationships between sculpture, literature, and the construction of spatial experience. She utilizes forms, often derived from nature, as vessels to explore profound concepts such as intimacy, the complexities of perception, interaction, and the nuances of translation.

This portfolio website serves as a digital gallery space, presenting both current and archived projects with an intuitive, gallery-like interface.

## ✨ Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Gallery Interface**: Clean, grid-based layout for artwork presentation
- **Project Categories**: Organized into Current and Archive sections
- **Interactive Lightbox**: Fullscreen image viewing with navigation
- **Video Support**: YouTube and local video integration
- **Studio Section**: Dedicated space for studio documentation
- **Contact Information**: Easy access to email and social media
- **Biography Page**: Artist statement and background information
- **Modern UI**: Clean, minimalist design with smooth transitions

## 🛠️ Tech Stack

- **Frontend**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Language**: JavaScript (JSX)
- **Package Manager**: npm

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/maryamweb-25.git
   cd maryamweb-25
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the website

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
maryamweb-25/
├── public/
│   └── Photos/
│       ├── Projects/
│       │   ├── Current/          # Current projects
│       │   │   ├── Rosebush/
│       │   │   ├── Inside/
│       │   │   └── Leyers/
│       │   └── Archive/          # Archived projects
│       │       ├── Eating/
│       │       ├── Flatland/
│       │       └── Privacy/
│       └── Studio/               # Studio documentation
├── src/
│   ├── App.jsx                   # Main application component
│   ├── main.jsx                  # Application entry point
│   └── index.css                 # Global styles
├── index.html                    # HTML template
└── package.json                  # Dependencies and scripts
```

## 🎯 Usage

### Adding New Projects

1. **Add project images** to the appropriate folder in `public/Photos/Projects/`
2. **Update the artwork data** in `src/App.jsx`:
   ```javascript
   {
       id: [unique_id],
       title: 'Project Title',
       year: '2024',
       imageUrl: './Photos/Projects/Current/ProjectName/01.jpg',
       category: 'Current', // or 'Archive'
       description: 'Project description',
       images: [
           './Photos/Projects/Current/ProjectName/01.jpg',
           // ... more images
       ]
   }
   ```

### Adding Videos

- **YouTube Videos**: Uncomment and add YouTube video IDs
- **Local Videos**: Uncomment and add local video file paths

### Customizing Content

- **Biography**: Edit the text in the `BIOGRAPHY` case in `App.jsx`
- **Contact Information**: Update email and social media links in `ContactPage` component
- **Studio Section**: Add more images and update the description

## 🎨 Design Features

- **Typography**: Clean, readable fonts with proper hierarchy
- **Color Scheme**: Minimalist black and white with subtle grays
- **Navigation**: Intuitive dropdown menus for project filtering
- **Animations**: Smooth hover effects and transitions
- **Accessibility**: Keyboard navigation support and semantic HTML

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🔧 Configuration

### Tailwind CSS
The project uses Tailwind CSS for styling. Configuration can be found in `tailwind.config.js`.

### Vite
Build configuration is in `vite.config.js` with React plugin enabled.

## 📄 License

This project is private and proprietary. All rights reserved.

## 👨‍💻 Developer

Designed and developed by Mohamad Keshmiri

## 📞 Contact

For inquiries about the artwork:
- **Email**: Maryamkeshmiri10@gmail.com
- **Instagram**: [@kashmiri.maryam](https://www.instagram.com/kashmiri.maryam)

