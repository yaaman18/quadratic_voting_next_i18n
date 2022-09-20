import { Layout } from '/components/layout'
import VotePage from '../components/pages/Event.Page'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
const Vote = () => <VotePage />

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
})
Vote.getLayout = (page) => <Layout>{page}</Layout>

export default Vote
