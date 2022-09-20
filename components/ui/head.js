import Head from 'next/head' // Header settings
import Link from 'next/link' // Dynamic links

export const HeadComponent = (props) => {
  return (
    <div>
      {/* Header */}
      <Head>
        <link rel='apple-touch-icon' sizes='57x57' href='/favicon/favicon-rxc.png' />
        <link rel='apple-touch-icon' sizes='60x60' href='/favicon/favicon-rxc.png' />
        <link rel='apple-touch-icon' sizes='72x72' href='/favicon/favicon-rxc.png' />
        <link rel='apple-touch-icon' sizes='76x76' href='/favicon/favicon-rxc.png' />
        <link rel='apple-touch-icon' sizes='114x114' href='/favicon/favicon-rxc.png' />
        <link rel='apple-touch-icon' sizes='120x120' href='/favicon/favicon-rxc.png' />
        <link rel='apple-touch-icon' sizes='144x144' href='/favicon/favicon-rxc.png' />
        <link rel='apple-touch-icon' sizes='152x152' href='/favicon/favicon-rxc.png' />
        <link rel='apple-touch-icon' sizes='180x180' href='/favicon/favicon-rxc.png' />
        <link rel='icon' type='image/png' sizes='192x192' href='/favicon/favicon-rxc.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon/favicon-rxc.png' />
        <link rel='icon' type='image/png' sizes='96x96' href='/favicon/favicon-rxc.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon/favicon-rxc.png' />
        <link rel='manifest' href='/favicon/manifest.json' />
        <meta name='msapplication-TileColor' content='#ffffff' />
        <meta name='msapplication-TileImage' content='/favicon/favicon-rxc.png' />
        <meta name='theme-color' content='#ffffff' />
        <title>Quadratic voting next i18n</title>
        <meta name='title' content='RxC QV' />
        <meta name='description' content='An easy tool to host a quadratic vote' />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://quadraticvote.radicalxchange.org/' />
        <meta property='og:title' content='RxC QV' />
        <meta property='og:description' content='An easy tool to host a quadratic vote' />

        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='https://quadraticvote.radicalxchange.org/' />
        <meta property='twitter:title' content='RxC QV' />
        <meta property='twitter:description' content='An easy tool to host a quadratic vote' />
        {props.event ? null : (
          <>
            <meta property='og:image' content='/open-graph-logo.png' />
            <meta property='twitter:image' content='/open-graph-logo.png' />
          </>
        )}
      </Head>
    </div>
  )
}
