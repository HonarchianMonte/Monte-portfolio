# Monte Portfolio

A modern, responsive single-page portfolio website built with React and Tailwind CSS.

![Portfolio Preview](https://github.com/user-attachments/assets/6e887629-0773-4ac6-88ad-2e47be40ff68)

## Features

- 🎨 **Modern Design** - Clean, professional interface with gradient hero section
- 📱 **Fully Responsive** - Optimized for all screen sizes
- 🚀 **Single Page Scroll** - Smooth scrolling navigation between sections
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development and builds
- 🎯 **Interactive Navigation** - Fixed navbar with smooth transitions
- 📝 **Contact Form** - Easy-to-use contact section

## Sections

1. **Hero** - Eye-catching introduction with call-to-action
2. **About Me** - Professional background and passion
3. **Skills & Technologies** - Organized technical skills (Frontend, Backend, Database, Tools)
4. **Featured Projects** - Showcase of key projects with technology tags
5. **Work Experience** - Professional timeline with achievements
6. **Contact** - Contact form and social links
7. **Footer** - Copyright and credits

## Tech Stack

- **React 19** - Latest React for building user interfaces
- **Tailwind CSS 4** - Utility-first CSS framework
- **Vite** - Next-generation frontend tooling
- **ESLint** - Code quality and consistency

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/HonarchianMonte/Monte-portfolio.git
cd Monte-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit: `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Customization

To customize this portfolio for your own use:

1. **Update Personal Information** in `src/components/`:
   - `Hero.jsx` - Your name and title
   - `About.jsx` - Your background story
   - `Skills.jsx` - Your technical skills
   - `Projects.jsx` - Your projects
   - `Experience.jsx` - Your work history
   - `Contact.jsx` - Your contact details

2. **Modify Colors** in `tailwind.config.js` to match your brand

3. **Update Assets** in `public/` folder

## Deployment

Build the project for production:

```bash
npm run build
```

The optimized files will be in the `dist/` directory, ready to deploy to any static hosting service:

- **Netlify**: Drag and drop the `dist` folder
- **Vercel**: Import the repository and deploy
- **GitHub Pages**: Use the `dist` folder with GitHub Actions
- **Firebase Hosting**: Run `firebase deploy`

## License

MIT License - feel free to use this for your own portfolio!

## Contact

- Email: monte@example.com
- LinkedIn: [Your LinkedIn](https://linkedin.com)
- GitHub: [Your GitHub](https://github.com)

---

Built with ❤️ using React and Tailwind CSS
