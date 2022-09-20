import { useTranslation } from 'next-i18next'
import Link from 'next/link' // Dynamic links
import { Navigation } from 'components/tools/navigation' // Navigation component

function FailurePage({ query }) {
  const { t } = useTranslation('common')

  return (
    <div>
      {/* Navigation header */}
      <Navigation
        history={{
          title: 'Voting',
          link: `/vote?user=${query.user}`,
        }}
        title='Vote Failure'
      />

      {/* Failure dialog */}
      <div className='failure'>
        <h1>{t('failure.title')}</h1>
        <p>{t('failure.title_description')}</p>

        {/* Return to voting */}
        <Link href={`/vote?user=${query.user}`}>
          <a>{t('failure.try_voting')}</a>
        </Link>

        {/* Redirect to event dashboard */}
        <Link href={`/event?id=${query.event}`}>
          <a>{t('failure.see_event_dashboard')}</a>
        </Link>
      </div>

      {/* Scoped styling */}
      <style jsx>{`
        .failure {
          max-width: 700px;
          width: calc(100% - 40px);
          padding: 50px 20px 0px 20px;
          margin: 0px auto;
        }

        .failure > h1 {
          font-size: 40px;
          color: #000;
          margin: 0px;
        }

        .failure > p {
          font-size: 18px;
          line-height: 150%;
          color: #80806b;
          margin-block-start: 0px;
        }

        .failure > a {
          max-width: 200px;
          width: calc(100% - 40px);
          margin: 10px 20px;
          padding: 12px 0px;
          border-radius: 5px;
          text-decoration: none;
          font-size: 18px;
          display: inline-block;
          text-decoration: none;
          transition: 100ms ease-in-out;
        }

        .failure > a:hover {
          opacity: 0.8;
        }

        .failure > a:nth-of-type(1) {
          background-color: #edff38;
          color: #000;
        }

        .failure > a:nth-of-type(2) {
          background-color: #000;
          color: #edff38;
        }
      `}</style>
    </div>
  )
}

// On initial page load:
// Failure.getInitialProps = ({ query }) => {
//   // Collect URL params
//   return { query }
// }
export async function getServerSideProps(query) {
  return {
    props: { query }, // will be passed to the page component as props
  }
}

export default FailurePage
