import '@/app/ui/global.css';
import { inter, lusitana } from '@/app/ui/fonts';
import Navigation from '@/app/ui/navigation';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${lusitana.className}`}>
        <Navigation />
        {children}
        <h1>Hellloooo</h1>
        </body>
    </html>
  );
}
