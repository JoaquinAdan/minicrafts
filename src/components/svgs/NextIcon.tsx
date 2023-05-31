import React from 'react'

type Props = {
  color: string,
}

const NextIcon = ({ color }: Props): JSX.Element => {
  return (
    <svg width='50px' height='50px' fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 26 26'>
      <g id='Capa_1' data-name='Capa 1'>
        <circle stroke={color} strokeWidth='2px' cx='12.75' cy='12.75' r='12' />
        <path
          d='m8.62,7.7l.6-.43c-.19-.26-.52-.37-.82-.27-.3.1-.51.38-.51.7h.74Zm.74,11.06V7.7h-1.47v11.06h1.47Zm-1.23-10.7l8.74,12.25-.08-2.44-7.57-10.61-1.09.8Zm7.75-.36v6.09l1.47,2.02V7.7c0-.41-.33-.74-.74-.74h0c-.41,0-.74.33-.74.74Zm.99,12.61l1.68,2.34.53-.15-2.29-4.62.08,2.44Z'
          stroke={color}
          fill={color}
        />
      </g>
    </svg>
  )
}

export default NextIcon
