import 'react-datetime/css/react-datetime.css' // React datetime styling
import 'react-accessible-accordion/dist/fancy-example.css' // React accordion styling
import '../styles/global.css'
import { appWithTranslation } from 'next-i18next'
// Default application setup
function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout ?? ((page) => page)
  // Return page component with props
  return getLayout(<Component {...pageProps} />)
}

export default appWithTranslation(MyApp)
