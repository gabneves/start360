import './globals.css';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

export const metadata = {
  title: "Start 360",
  description: "Projeto Startup One",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <Header />
        {children}
        <Footer /> 
      </body>
    </html>
  );
}
