import './globals.css';
import { ReactNode } from 'react';
import ThemeToggle from '../components/ThemeToggle';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-gray-900 text-gray-100">
        <header className="p-4 flex justify-end">
          <ThemeToggle />
        </header>
        <main className="flex">
          {children}
        </main>
      </body>
    </html>
  );
}
