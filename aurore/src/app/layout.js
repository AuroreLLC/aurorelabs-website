import '@/styles/globals.css';
import Footer from '@/components/Footer';
import PrelineScript from '@/Wrapper/PrelineScript';
import NewNavbar from '@/components/Navbar';
export const metadata = {
  title: 'Aurore',
  description: 'Aurore LLC, 2024',
}



export default function RootLayout({ children}){
  return (
      <html lang="en">
        <body className='bg-[#040a25]'>
            <NewNavbar/>
          <main>{children}</main>
          <footer>
            <Footer />
          </footer>
        </body>
        <PrelineScript/>
      </html>
      )
}
