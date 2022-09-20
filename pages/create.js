import { Layout } from '/components/layout'
import CreatePage from '../components/pages/Create.Page'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
const Create = () => <CreatePage />

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
})
Create.getLayout = (page) => <Layout>{page}</Layout>

export default Create
