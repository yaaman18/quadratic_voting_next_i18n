import { useTranslation } from 'next-i18next'
import Link from 'next/link' // Dynamic links
import { Navigation } from 'components/tools/navigation' // Navigation component

function Success({ query }) {
  const { t } = useTranslation('common')

  return (
    <div>
      {/* Navigation header */}
      <Navigation
        history={{
          title: 'Voting',
          link: `/vote?user=${query.user}`,
        }}
        title='Vote Success'
      />

      {/* Success dialog */}
      <div className='success'>
        <h1>{t('success.title')}</h1>
        <p>{t('success.description')}</p>

        {/* Go back to voting */}
        <Link href={`/vote?user=${query.user}`}>
          <a>{t('success.change_your_vote')}</a>
        </Link>

        {/* Redirect to event dashboard */}
        <Link href={`/event?id=${query.event}`}>
          <a>{t('success.see_event_dashboard')}</a>
        </Link>
      </div>

      {/* Scoped styling */}
      <style jsx>{`
        .success {
          max-width: 700px;
          width: calc(100% - 40px);
          padding: 50px 20px 0px 20px;
          margin: 0px auto;
        }

        .success > h1 {
          font-size: 40px;
          color: #000;
          margin: 0px;
        }

        .success > p {
          font-size: 18px;
          line-height: 150%;
          color: #80806b;
          margin-block-start: 0px;
        }

        .success > a {
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

        .success > a:hover {
          opacity: 0.8;
        }

        .success > a:nth-of-type(1) {
          background-color: #edff38;
          color: #000;
        }

        .success > a:nth-of-type(2) {
          background-color: #000;
          color: #edff38;
        }
      `}</style>
    </div>
  )
}

// On initial page load:
Success.getInitialProps = ({ query }) => {
  // Collect url params
  return { query }
}

export default Success
