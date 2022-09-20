import { HeadComponent } from '/components/ui/head'
import { Header } from '/components/ui/header'
import { Footer } from '/components/ui/footer'

export const Layout = ({ children }) => (
  <div data-theme='pastel' className=''>
    <HeadComponent />
    <Header />
    {children}
    <Footer />
  </div>
)
