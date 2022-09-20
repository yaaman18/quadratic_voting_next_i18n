import axios from 'axios' // Axios for requests
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router' // Router for page change
import { useState, useEffect } from 'react' // State management
import Countdown from 'react-countdown' // Countdown timer
import { Loader } from 'components/tools/loader' // Loader
import { Navigation } from 'components/tools/navigation' // Navigation component

function PlacePage({ query }) {
  const { t } = useTranslation('common')
  const router = useRouter() // Setup router instance
  const [code, setCode] = useState('') // Code input handler
  const [error, setError] = useState(false) // Error state handler
  const [loading, setLoading] = useState(false) // Loading state handler

  // Run on page load
  useEffect(() => {
    // If error URL param
    // if (query) {
    //   // Throw error
    //   throwError()
    //   console.log('読み込みできない')
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  /**
   * Gets /api/events/exists to check if voter exists
   */
  const checkVoterExists = () => {
    setLoading(true) // Toggle loading to true

    // Get endpoint passing code as voter ID param
    axios
      .get(`/api/events/exists?id=${code}`)
      // If status === 200
      .then(() => {
        // Redirect to voting page
        router.push(`/vote?user=${code}`)
        // Toggle loading to false
        setLoading(false)
      })
      // If status !== 200
      .catch(() => {
        // Run throw error
        throwError()
        // Toggle loading to false
        setLoading(false)
      })
  }

  /**
   * Manages error state if enterred voting code does not exist
   */
  const throwError = () => {
    // Toggle error to true
    setError(true)

    // Setup a timed untoggling
    setTimeout(() => {
      // Running tryAgain
      tryAgain()
    }, 5000) // After 5 seconds
  }

  /**
   * Restores from error state
   */
  const tryAgain = () => {
    // Clear enterred code
    setCode('')
    // Toggle error to false
    setError(false)
  }

  /**
   * Renderer for react-countdown
   * @param {integer} seconds remaining in countdown
   */
  const renderer = ({ seconds }) => {
    return <span>{seconds}</span>
  }

  return (
    <div className='flex flex-col h-screen'>
      {/* Navigation header */}
      <Navigation
        history={{
          title: 'Home',
          link: '/',
        }}
        title='Place Votes'
      />

      <div className='flex justify-center pt-24'>
        {!error ? (
          <div className='card w-96 bg-base-100 shadow-xl '>
            <div className='card-body items-center text-center'>
              <h2 className='card-title'>{t('place.invalid_voting')}</h2>
              <p>{t('place.description')}</p>
              <input
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder='0918cd22-a487-4cd0-8e29-8144b9580b80'
              />
              {!loading ? (
                <div className='card-actions'>
                  <button onClick={checkVoterExists} className='btn btn-primary'>
                    Submit
                  </button>
                </div>
              ) : (
                <button disabled>
                  <Loader />
                </button>
              )}
            </div>
          </div>
        ) : (
          <div className='place__votes'>
            <h2>{t('place.invalid_voting')}</h2>
            <p>{t('place.oops!')}</p>
            <button className='retry__button' onClick={tryAgain}>
              {t('place.try_again')}
            </button>
            <span>
              {t('place.automatic_redirect')}{' '}
              <Countdown date={Date.now() + 5000} renderer={renderer} /> {t('place.seconds')}
            </span>
          </div>
        )}
      </div>
    </div>
  )
}

PlacePage.getInitialProps = ({ query }) => {
  // Collect url params
  return { query }
}

export default PlacePage
