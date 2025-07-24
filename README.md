# Micro Frontend Architecture with Next.js & Module Federation

This project demonstrates a micro frontend architecture using Next.js as the host application and two React micro frontends integrated via Module Federation.

## Architecture Overview

```
┌─────────────────────────────────────────────────────────────┐
│                    Main Next.js App                         │
│                   (Host - Port 3000)                        │
│  ┌─────────────────────┐  ┌─────────────────────────────┐   │
│  │   Micro Frontend 1  │  │   Micro Frontend 2          │   │
│  │   (Remote)          │  │   (Remote)                  │   │
│  │   Port 3001         │  │   Port 3002                 │   │
│  └─────────────────────┘  └─────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

## Project Structure

```
Next JS1/
├── main-app/                 # Next.js host application (port 3000)
│   ├── src/app/
│   │   ├── page.tsx         # Main page with both micro frontends
│   │   ├── micro1/page.tsx  # Dedicated page for micro frontend 1
│   │   └── micro2/page.tsx  # Dedicated page for micro frontend 2
│   ├── types/
│   │   └── module-federation.d.ts  # Type declarations for remotes
│   └── next.config.js       # Module Federation configuration
├── microui-front1/          # First micro frontend (port 3001)
│   ├── src/App.tsx         # React component exposed via MF
│   └── webpack.config.js   # Module Federation setup
└── microui-front2/          # Second micro frontend (port 3002)
    ├── src/App.tsx         # React component exposed via MF
    └── webpack.config.js   # Module Federation setup
```

## Features

- ✅ **Module Federation**: Webpack 5 Module Federation for dynamic loading
- ✅ **Independent Deployment**: Each micro frontend can be deployed separately
- ✅ **TypeScript Support**: Full TypeScript support across all applications
- ✅ **Hot Reload**: Development mode with hot reload for all applications
- ✅ **Shared Dependencies**: React and React-DOM shared between applications
- ✅ **Routing**: Next.js App Router with dedicated pages for each micro frontend
- ✅ **Responsive Design**: Tailwind CSS for responsive UI

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation & Running

You need to run all three applications simultaneously:

#### Terminal 1 - Micro Frontend 1
```bash
cd "microui-front1"
npm start
```
This will start the first micro frontend on http://localhost:3001

#### Terminal 2 - Micro Frontend 2
```bash
cd "microui-front2"
npm start
```
This will start the second micro frontend on http://localhost:3002

#### Terminal 3 - Main Next.js App
```bash
cd "main-app"
npm run dev
```
This will start the host application on http://localhost:3000

### Access the Application

Once all three applications are running:

- **Main Application**: http://localhost:3000 (shows both micro frontends)
- **Micro Frontend 1 Only**: http://localhost:3000/micro1
- **Micro Frontend 2 Only**: http://localhost:3000/micro2
- **Standalone Micro Frontend 1**: http://localhost:3001 (independent)
- **Standalone Micro Frontend 2**: http://localhost:3002 (independent)

## How Module Federation Works

1. **Host Application** (main-app): Consumes remote modules from micro frontends
2. **Remote Applications** (microui-front1, microui-front2): Expose their components via Module Federation
3. **Dynamic Loading**: Components are loaded at runtime from remote applications
4. **Shared Dependencies**: React and React-DOM are shared to avoid duplication

## Development

### Adding New Micro Frontends

1. Create a new React application
2. Configure webpack with ModuleFederationPlugin
3. Expose components in the `exposes` configuration
4. Add the remote configuration to the host application
5. Import and use the remote component

### Modifying Existing Micro Frontends

- Each micro frontend is independent
- Changes are reflected immediately with hot reload
- No need to restart the host application

## Production Build

### Build Micro Frontends
```bash
cd microui-front1 && npm run build
cd microui-front2 && npm run build
```

### Build Host Application
```bash
cd main-app && npm run build
```

## Troubleshooting

### Common Issues

1. **"Loading micro frontend..." stuck**: Ensure all micro frontends are running on their respective ports
2. **Module not found errors**: Check that remote URLs in next.config.js match the running ports
3. **Type errors**: Ensure type declarations in `types/module-federation.d.ts` are correct

### CORS Issues
The webpack dev servers are configured with CORS headers to allow cross-origin requests from the host application.

## Technology Stack

- **Host**: Next.js 15, React 19, TypeScript, Tailwind CSS
- **Micro Frontends**: React 19, TypeScript, Webpack 5
- **Module Federation**: @module-federation/nextjs-mf, Webpack ModuleFederationPlugin
- **Styling**: Tailwind CSS, CSS Modules

## Benefits of This Architecture

1. **Independent Development**: Teams can work on different micro frontends independently
2. **Technology Diversity**: Each micro frontend can use different technologies
3. **Scalability**: Easy to add new micro frontends or scale existing ones
4. **Deployment Flexibility**: Deploy micro frontends independently
5. **Code Sharing**: Share common dependencies and utilities
