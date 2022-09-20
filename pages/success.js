import { Layout } from '/components/layout'
import SuccessPage from '../components/pages/Event.Page'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
const Success = () => <SuccessPage />

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
})
Success.getLayout = (page) => <Layout>{page}</Layout>

export default Success
