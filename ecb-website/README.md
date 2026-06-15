# European Central Bank Website

A modern, responsive website for the European Central Bank built with React, Vite, and Tailwind CSS.

## Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dynamic Content**: Real-time economic data and monetary policy information
- **Interactive Charts**: Visualize interest rates, inflation trends, and economic indicators
- **Multi-language Support**: Support for multiple EU languages
- **Accessible**: WCAG 2.1 AA compliant
- **SEO Optimized**: Proper meta tags and structured data

## Project Structure

```
ecb-website/
├── src/
│   ├── pages/           # Page components
│   ├── components/      # Reusable UI components
│   ├── services/        # API services and utilities
│   ├── hooks/           # Custom React hooks
│   ├── styles/          # Global styles
│   ├── assets/          # Images, fonts, etc.
│   ├── App.jsx         # Main app component
│   └── main.jsx        # Entry point
├── public/             # Static files
├── index.html          # HTML template
├── vite.config.js      # Vite configuration
├── tailwind.config.js  # Tailwind CSS configuration
├── postcss.config.js   # PostCSS configuration
└── package.json        # Dependencies
```

## Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

```bash
cd ecb-website
npm install
```

### Development

```bash
npm run dev
```

The site will open at `http://localhost:3000`

### Build

```bash
npm run build
```

### Preview

```bash
npm run preview
```

## Pages

1. **Home** - Landing page with key information
2. **About** - History and mission of the ECB
3. **Monetary Policy** - Current policy rates and decisions
4. **Economic Data** - Key economic indicators and statistics
5. **News** - Latest ECB announcements and press releases
6. **Career** - Job opportunities at the ECB
7. **Contact** - Contact information and inquiries

## Technologies Used

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router v6
- **Charts**: Recharts
- **Icons**: Lucide React
- **HTTP Client**: Axios
- **Date Utilities**: date-fns

## License

MIT

## Contact

For inquiries about the ECB, visit [www.ecb.europa.eu](https://www.ecb.europa.eu)
