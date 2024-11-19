import '@/styles/globals.css';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FlyonuiScript from '@/Wrapper/FlyionuiScript';
export const metadata = {
  title: 'Aurore',
  description: 'Aurore LLC, 2024',
}



export default function RootLayout({ children}){
  return (
      <html lang="en">
        <body>
          <header> 
            <Header />
            <Navbar />
          </header>
          <main>{children}</main>
          <footer>
            <Footer />
          </footer>
        </body>
        <FlyonuiScript />
      </html>
      )
}
