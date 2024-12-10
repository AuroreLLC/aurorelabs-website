import '@/styles/globals.css';
import Footer from '@/components/Footer';
import PrelineScript from '@/Wrapper/PrelineScript';
import Navbar from '@/components/Navbar';
export const metadata = {
  title: 'Aurore',
  description: 'Aurore LLC, 2024',
}



export default function RootLayout({ children}){
  return (
      <html lang="en">
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        </head>
        <body className='bg-white'>
            <Navbar/>
          <main>{children}</main>
          <footer>
            <Footer/>
          </footer>
        </body>
        <PrelineScript/>
      </html>
      )
}
