'use client';

import { MICRO_FRONTENDS } from '@/app/constants/micro-frontends';
import { ROUTES } from '@/app/constants/routes';
import { RemoteComponent } from '@/component/RemoteComponent';
import Link from 'next/link';

export default function Micro2Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <h1 className="text-3xl font-bold text-gray-900">
              ⚡ Micro Frontend 2
            </h1>
            <nav className="space-x-4">
              <Link href={ROUTES.HOME} className="text-blue-600 hover:text-blue-800">
                Home
              </Link>
              <Link href={ROUTES.MICRO_UI_NAVIGATION} className="text-blue-600 hover:text-blue-800">
                Micro 1
              </Link>
              <Link href={ROUTES.MICRO_UI_CONTENT} className="text-blue-600 hover:text-blue-800 font-semibold">
                Micro 2
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Dedicated Page for Micro Frontend 2
          </h2>
          <p className="text-gray-600 mb-6">
            This page showcases the second micro frontend running independently on port 3002.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <RemoteComponent
            remoteUrl={MICRO_FRONTENDS.CONTENT_UI.remoteUrl}
            moduleName={MICRO_FRONTENDS.CONTENT_UI.module}
          />
        </div>
      </main>
    </div>
  );
}
