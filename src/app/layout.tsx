
import type { Metadata } from "next";
import "./globals.css";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'


export const metadata: Metadata = {
  title: "Quizmos",
  description: "Nustiu",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
          {children}
        
      </body>
    </html>
  );
}
