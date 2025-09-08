# Cap Centre - Service Provider Platform

A modern web application built with Next.js 15.3 that connects startups with verified service providers. The platform features a sleek dark theme UI with glass-morphic effects and a professional design.

## Features

### Service Provider Directory
- Browse and search through verified service providers
- Filter by industry, service type, and verification status
- Modern card layout with:
  - Company information and verification status
  - Industry categorization
  - Expertise badges
  - Quick access to provider websites and LinkedIn profiles
  - Detailed view for each provider

### Service Provider Details
- Comprehensive provider profiles with:
  - Company overview and description
  - Areas of expertise
  - Available services with pricing
  - Contact information
  - Connection request system
  - Messaging capabilities for connected providers

### UI/UX Features
- Dark theme with glass-morphic effects
- Responsive design for all screen sizes
- Modern color scheme:
  - Primary: Teal (#1DA783) for branding and interactive elements
  - Secondary: Purple (#482E72) for calls-to-action
  - Dark Blue (#141836) for backgrounds
  - White with varying opacity for text hierarchy
- Loading states and error handling
- Smooth transitions and hover effects

## Tech Stack

- **Framework**: Next.js 15.3
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom components with shadcn/ui
- **Icons**: Lucide React
- **State Management**: React Hooks
- **API Integration**: Axios
- **Notifications**: Sonner

## Getting Started

### Prerequisites
- Node.js 18.17 or later
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd cap-centre
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```
Edit `.env.local` with your configuration.

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

## Project Structure

```
cap-centre/
├── src/
│   ├── app/                 # App router pages
│   │   ├── (dashboard)/     # Dashboard layout and pages
│   │   └── layout.tsx       # Root layout
│   ├── components/          # Reusable components
│   │   ├── ui/             # UI components
│   │   └── ...             # Feature components
│   ├── lib/                 # Utilities and helpers
│   └── styles/             # Global styles
├── public/                  # Static assets
└── ...config files
```

## Design System

### Colors
- **Primary**: #1DA783 (Teal)
- **Secondary**: #482E72 (Purple)
- **Background**: #141836 (Dark Blue)
- **Text**:
  - Primary: White (100%)
  - Secondary: White (70%)
  - Tertiary: White (50%)

### Components
- Cards with glass-morphic effect
- Custom buttons with hover states
- Badges for status and categories
- Form elements with consistent styling
- Loading states and animations

## API Integration

The application integrates with a backend API for:
- Service provider listings
- Provider details
- Connection management
- Messaging system
- User authentication

## Deployment

The application can be deployed using Vercel:

```bash
npm run build
# or
yarn build
```

For production deployment, follow the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
