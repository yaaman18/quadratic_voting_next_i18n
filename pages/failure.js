import { Layout } from '/components/layout'
import FailurePage from '../components/pages/Failure.Page'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
const Failure = () => <FailurePage />

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
})
Failure.getLayout = (page) => <Layout>{page}</Layout>

export default Failure
