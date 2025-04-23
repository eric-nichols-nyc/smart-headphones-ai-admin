# Smart Headphones AI Admin Dashboard

An advanced admin dashboard built with Next.js for managing smart headphone configurations, analytics, and user settings.

## Tech Stack

- **Framework**: Next.js 15.3.1
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Linting**: ESLint
- **Development Server**: Turbopack

## Features

- Modern Next.js 15.3.1 with App Router
- TypeScript for type safety
- Tailwind CSS for styling
- ESLint for code quality
- Turbopack for fast development builds
- Custom port configuration (3002)
- Real-time updates and synchronization
- Multi-user support
- Cloud-based data management

## Getting Started

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/eric-nichols-nyc/smart-headphones-ai-admin.git
cd smart-headphones-ai-admin
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

The application will be available at [http://localhost:3002](http://localhost:3002)

### Building for Production

```bash
npm run build
npm run start
# or
yarn build
yarn start
```

## Project Structure

```
smart-headphones-ai-admin/
├── src/
│   ├── app/          # App router pages and layouts
│   ├── components/   # Reusable components
│   ├── lib/         # Utility functions and libraries
│   └── styles/      # Global styles and Tailwind config
├── public/          # Static assets
├── next.config.ts   # Next.js configuration
└── package.json     # Project dependencies and scripts
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.