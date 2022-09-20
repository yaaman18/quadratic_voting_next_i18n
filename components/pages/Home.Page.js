import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import Link from 'next/link' // Dynamic links

export const HomePage = () => {
  const { t } = useTranslation('common')

  return (
    <div>
      <div className=''>
        {/* Home heading */}
        <div className=''>
          <h1 className='mt-8 mb-6 flex justify-center font-sans  text-3xl  text-slate-500'>
            {' '}
            {t('global.title')}
          </h1>
          <h2 className='mx-12 mb-6 flex justify-center text-slate-500'>{t('home.subtitle')}</h2>
          <p className='mx-10 mt-14 flex justify-center text-slate-500'>
            {t('home.qv_description_1')}
          </p>
          <p className='mx-10 mb-6 flex justify-center text-slate-500'>
            {t('home.qv_description_2')}
          </p>
          <h2 className='mx-12 mb-6 flex justify-center text-slate-500'> {t('home.host')}</h2>
        </div>
        <div className='flex flex-wrap px-10'>
          <article className='w-full md:w-1/2 md:pr-2 lg:pr-4  py-10'>
            <div className='card w-96 bg-base-100 shadow-xl'>
              <figure className='px-10 pt-10'>
                <Image
                  src='/vectors/create_event.svg'
                  width={195}
                  height={150}
                  alt='Create event'
                />
              </figure>
              <div className='card-body items-center text-center'>
                <h2 className='card-title'>{t('home.create_event')}</h2>
                <p>{t('home.create_event_description')}</p>
                <div className='card-actions'>
                  <button className='btn bg-yellow-400'>
                    {' '}
                    <Link href='/create'>
                      <a>{t('home.set_up_event')}</a>
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </article>

          <aside className='w-full md:w-1/2 md:pl-2 lg:pl-4 py-10'>
            <div className='card w-96 bg-base-100 shadow-xl'>
              <figure className='px-14 pt-10'>
                <Image src='/vectors/place_vote.svg' width={195} height={150} alt='Place vote' />
              </figure>
              <div className='card-body items-center text-center'>
                <h2 className='card-title'>{t('home.to_polling place')}</h2>
                <p>{t('home.vote_place_description')}</p>
                <div className='card-actions'>
                  <button className='btn bg-yellow-400'>
                    {' '}
                    <Link href='/place'>
                      <a>{t('home.place_vote')}</a>
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
