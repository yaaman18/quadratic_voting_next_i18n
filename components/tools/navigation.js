import Link from 'next/link' // Dynamic links

export const Navigation = (props) => {
  return (
    // Navigation bar
    <div className=' bg-yellow-200 h-12 flex justify-between'>
      {/* Navigation title and history */}
      <Link href={props.history.link}>
        <a className='pt-3 pl-5 opacity-80 underline hover:underline-offset-4'>
          ⟵ Return to {props.history.title}
        </a>
      </Link>
      <span className='pt-3 pr-5 opacity-80'>{props.title}</span>
    </div>
  )
}
