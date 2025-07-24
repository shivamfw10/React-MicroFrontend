'use client';

import { RemoteComponent } from '@/component/RemoteComponent';
import Link from 'next/link';
import { ROUTES } from './constants/routes';


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <h1 className="text-3xl font-bold text-gray-900">
              🏗️ Micro Frontend Architecture Demo
            </h1>
            <nav className="space-x-4">
              <Link href={ROUTES.HOME} className="text-blue-600 hover:text-blue-800">
                Home
              </Link>
              <Link href={ROUTES.MICRO_UI_NAVIGATION} className="text-blue-600 hover:text-blue-800">
                Micro 1
              </Link>
              <Link href={ROUTES.MICRO_UI_CONTENT} className="text-blue-600 hover:text-blue-800">
                Micro 2
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Welcome to the Main Next.js Application
          </h2>
          <p className="text-gray-600 mb-6">
            This application demonstrates Module Federation with two independent micro frontends 
            running on different ports and integrated seamlessly into this Next.js host application.
          </p>
        </div>

        {/* Micro Frontend Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Micro Frontend 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="px-6 py-4 bg-blue-50 border-b">
              <h3 className="text-lg font-semibold text-gray-800">
                Micro Frontend 1 (Port 3001)
              </h3>
              <p className="text-sm text-gray-600">
                Independent React application with Module Federation
              </p>
            </div>
            <div className="p-0">
              <RemoteComponent
                remoteUrl={process.env.NEXT_PUBLIC_MICROUI_NAVIGATION_REMOTE_URL??''}
                moduleName={process.env.NEXT_PUBLIC_MICROUI_NAVIGATION_MODULE_NAME??''}
              />
            </div>
          </div>

          {/* Micro Frontend 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="px-6 py-4 bg-red-50 border-b">
              <h3 className="text-lg font-semibold text-gray-800">
                Micro Frontend 2 (Port 3002)
              </h3>
              <p className="text-sm text-gray-600">
                Another independent React application with Module Federation
              </p>
            </div>
            <div className="p-0">
              <RemoteComponent
                remoteUrl={process.env.NEXT_PUBLIC_MICROUI_CONTENT_REMOTE_URL??''}
                moduleName={process.env.NEXT_PUBLIC_MICROUI_CONTENT_MODULE_NAME??''}
              />
            </div>
          </div>
        </div>

        {/* Information Section */}
        <div className="mt-12 bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            🏗️ Architecture Overview
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">⚡</span>
              </div>
              <h4 className="font-semibold text-gray-800">Host Application</h4>
              <p className="text-sm text-gray-600">Next.js app running on port 3000</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🚀</span>
              </div>
              <h4 className="font-semibold text-gray-800">Micro Frontend 1</h4>
              <p className="text-sm text-gray-600">React app on port 3001</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">⚡</span>
              </div>
              <h4 className="font-semibold text-gray-800">Micro Frontend 2</h4>
              <p className="text-sm text-gray-600">React app on port 3002</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-gray-300">
            Micro Frontend Architecture with Next.js & Module Federation
          </p>
        </div>
      </footer>
    </div>
  );
}
