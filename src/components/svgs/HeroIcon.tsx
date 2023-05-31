import React from 'react'

type Props = {
  color: string,
}

const HeroIcon = ({ color }: Props): JSX.Element => {
  return (
    <svg width='50' height='50' viewBox='0 0 50 50' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <g clip-path='url(#clip0_7_18)'>
        <path
          d='M25 2C19.2135 7.30125 11.5073 10.2088 3.52823 10.1014C2.51299 13.0853 1.99711 16.2062 2.00001 19.3468C2.00001 33.1335 11.7725 44.716 25 48C38.2276 44.716 48 33.1335 48 19.3468C48 16.1171 47.4633 13.0106 46.4718 10.1014H46.0833C37.9158 10.1014 30.4945 7.02208 25 2Z'
          stroke={color}
          stroke-width='4'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </g>
      <defs>
        <clipPath id='clip0_7_18'>
          <rect width='50' height='50' fill='white' />
        </clipPath>
      </defs>
    </svg>
  )
}

export default HeroIcon
