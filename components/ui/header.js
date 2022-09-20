// import { mdiTranslate } from '@mdi/js'
// import Icon from '@mdi/react'
import { i18n } from 'next-i18next'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useCallback, useMemo } from 'react'

export const Header = () => {
  const router = useRouter()
  const languages = useMemo(() => {
    const languages = [
      {
        code: 'ko',
        label: '한국어',
      },
      {
        code: 'en',
        label: 'English',
      },
      {
        code: 'ru',
        label: 'русский',
      },
      {
        code: 'ja',
        label: '日本語',
      },
    ]
    return languages
  }, [])
  const handleClickLanguage = useCallback(
    (languageCode) => () => {
      void i18n.changeLanguage(languageCode, () => {
        const { pathname, query, asPath } = router
        void router.push({ pathname, query }, asPath, {
          locale: languageCode,
        })
      })
    },
    [router],
  )
  return (
    <>
      <div className=' bg-lime-100  flex justify-between h-14'>
        <div className='pl-6'>
          <p className=' pt-3 font-montserrat text-xl text-slate-600 font-bold'>Radical_X_Change</p>
        </div>
        <div className='pr-4 pt-3'>
          <div className='dropdown dropdown-left'>
            <label tabIndex={0}>
              {/* <Icon path={mdiTranslate} title='language translate' size={1} color='#64748b' /> */}
              language
            </label>
            <ul
              tabIndex={0}
              className='dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52'
            >
              {languages.map((language) => {
                const disalbed = language.code === i18n.language

                return (
                  <li key={language.code} className='px-1'>
                    <button
                      className='text-slate-500 font-bold  disabled:opacity-60'
                      onClick={handleClickLanguage(language.code)}
                      disabled={disalbed}
                    >
                      {language.label}
                    </button>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
Header.displayName = 'header'
