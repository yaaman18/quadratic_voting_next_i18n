import { Layout } from '/components/layout'
import { HomePage } from '../components/pages/Home.Page'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Home = () => <HomePage />
export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
})
Home.getLayout = (page) => <Layout>{page}</Layout>

export default Home
