import { Tooltip, Zoom } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  href: string
  src: string
  alt: string
  title: string
}

const SvgLink = ({ href, src,alt, title }: Props): JSX.Element => {
  return (
    <Tooltip TransitionComponent={Zoom} title={title} placement='top'>
      <Link
        href={href}
        target='_blank'
        rel='nofollow noopener noreferrer'
      >
        <Image
          src={src}
          alt={alt}
          width={20} 
          height={20}
          style={{  display: 'inline', position: 'relative', marginInline: '5px', bottom: '2px' }}
        />
      </Link>
    </Tooltip>
  )
}

export default SvgLink
