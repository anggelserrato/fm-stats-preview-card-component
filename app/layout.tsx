import type { Metadata } from 'next';
import { Inter, Lexend_Deca } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
});

const lexendDeca = Lexend_Deca({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Frontend Mentor | Stats preview card component',
  description:
    'A responsive stats preview card component built with Next.js, featuring a modern design, engaging statistics, and optimized layouts for desktop and mobile devices.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.className} ${lexendDeca.className} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
