import { Layout } from '/components/layout'
import PlacePage from '../components/pages/PlacePage'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
const Place = () => <PlacePage />

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
})
Place.getLayout = (page) => <Layout>{page}</Layout>

export default Place
