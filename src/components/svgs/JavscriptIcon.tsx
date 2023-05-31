import React from 'react'

type Props = {
  color: string,
}

const JavscriptIcon = ({ color }: Props): JSX.Element => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='50px' height='50px' viewBox='0 0 15 15' fill='none'>
      <path
        d='M12.5 8V7.83333C12.5 7.09695 11.903 6.5 11.1667 6.5H10C9.17157 6.5 8.5 7.17157 8.5 8C8.5 8.82843 9.17157 9.5 10 9.5H11C11.8284 9.5 12.5 10.1716 12.5 11C12.5 11.8284 11.8284 12.5 11 12.5H10C9.17157 12.5 8.5 11.8284 8.5 11M6.5 6V11C6.5 11.8284 5.82843 12.5 5 12.5C4.17157 12.5 3.5 11.8284 3.5 11M0.5 0.5H14.5V14.5H0.5V0.5Z'
        stroke={color}
      />
    </svg>
  )
}

export default JavscriptIcon
