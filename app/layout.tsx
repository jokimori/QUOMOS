
import '../globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Quomos — Diseño Argentino',
  description: 'Exposición de diseño argentino',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://use.typekit.net/xxxxxxx.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
