import './globals.css'

export const metadata = {
  title: "Start 360",
  description: "Projeto Startup One",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}