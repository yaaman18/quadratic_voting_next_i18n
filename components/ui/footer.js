import Image from 'next/image'

export const Footer = () => {
  return (
    <div className=' bg-lime-100 sticky bottom-0'>
      {/* Page footer */}
      <div className='layout__footer'>
        <div>
          <div className=' flex justify-end'>
            <a
              className='px-2'
              href='https://github.com/RadicalxChange/quadratic-voting'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image src='/github.png' width={30} height={30} alt='Github logo' />
            </a>
            <a
              className='px-2'
              href='https://twitter.com/RadxChange'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image src='/twitter.png' width={30} height={30} alt='Twitter logo' />
            </a>
          </div>
        </div>
      </div>

      {/* Scoped layout styling */}
      <style jsx>{`
        .layout__footer {
          background-position: center top;
          width: calc(100% - 40px);
          padding: 37.5px 20px;
          text-align: center;
          color: #edff38;
          border-top: 3px solid #edff38;
        }
        .layout__footer > p {
          margin: 10px auto;
          line-height: 30px;
        }
        .layout__footer > p > a {
          color: #edff38;
          padding: 1px 3px;
          background-color: #edff38;
          border-radius: 2px;
          font-weight: 500;
          text-decoration: none;
          transition: 100ms ease-in-out;
        }
        .layout__footer > p > a:hover {
          opacity: 0.75;
        }
        .layout__footer > div > a,
        .layout__footer > div > div > a {
          text-decoration: none;
          transition: 100ms ease-in-out;
        }
        .layout__footer > div > a:hover,
        .layout__footer > div > div > a:hover {
          opacity: 0.75;
        }
        .layout__footer > div > a > img {
          height: 50px;
          margin: 10px 0px;
        }
        .layout__footer > div > div > a > img {
          height: 35px;
          filter: invert(100%);
          margin-top: 15px;
          margin-left: 15px;
          margin-right: 15px;
        }

        @font-face {
          font-family: 'suisse_intlbook_italic';
          src: url('./fonts/suisseintl-bookitalic-webfont.woff2') format('woff2'),
            url('./fonts/suisseintl-bookitalic-webfont.woff') format('woff');
          font-weight: normal;
          font-style: normal;
        }

        @font-face {
          font-family: 'suisse_intlbook';
          src: url('./fonts/suisseintl-book-webfont.woff2') format('woff2'),
            url('./fonts/suisseintl-book-webfont.woff') format('woff');
          font-weight: normal;
          font-style: normal;
        }

        @font-face {
          font-family: 'messerv2.1condensed';
          src: url('./fonts/messerv2.1-condensed-webfont.woff2') format('woff2'),
            url('./fonts/messerv2.1-condensed-webfont.woff') format('woff');
          font-weight: normal;
          font-style: normal;
        }
      `}</style>
    </div>
  )
}
