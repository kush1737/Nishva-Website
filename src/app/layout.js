import './globals.css';
import { clinic } from '@/data/clinic';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppFloat from '@/components/layout/WhatsAppFloat';

export const metadata = {
  title: { default: `${clinic.name} | ${clinic.doctor.name}, Vesu, Surat`, template: `%s | ${clinic.name}` },
  description: `${clinic.doctor.name}, consultant rheumatologist. Care for arthritis and autoimmune conditions in adults at Vesu, Surat.`,
  icons: { icon: '/images/brand/logo.png' },
  referrer: 'strict-origin-when-cross-origin',
};

export const viewport = { width: 'device-width', initialScale: 1, themeColor: '#0a1f4d' };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
