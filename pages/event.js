import { Layout } from '/components/layout'
import EventPage from '../components/pages/Event.Page'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
const Event = () => <EventPage />

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
})
Event.getLayout = (page) => <Layout>{page}</Layout>

export default Event
