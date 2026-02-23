import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'post pilot',
  description: 'Plan. Create. Schedule. Grow — with AI.'
};

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
