import './globals.css';

export const metadata = {
  title: "CueSync with React + Next.js",
  description: "CueSync with React + Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
