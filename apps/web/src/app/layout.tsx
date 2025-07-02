import './global.css';
import { Providers } from './providers';
import { TitleBar } from '../components/TitleBar';
import { Footer } from '../components/Footer';

export const metadata = {
  title: 'Guild Manager',
  description: 'A modern guild management application',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <TitleBar />
          <main style={{ minHeight: '80vh' }}>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
