import '@/styles/globals.css';
import Footer from '@/components/Footer';
import PrelineScript from '@/Wrapper/PrelineScript';
import NewNavbar from '@/components/NewNavBar';
import NewFooter from '@/components/NewFooter';
export const metadata = {
  title: 'Aurore',
  description: 'Aurore LLC, 2024',
}



export default function RootLayout({ children}){
  return (
      <html lang="en">
        <body className='bg-white'>
            <NewNavbar/>
          <main>{children}</main>
          <footer>
            <NewFooter/>
          </footer>
        </body>
        <PrelineScript/>
      </html>
      )
}
