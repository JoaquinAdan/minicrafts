import CssLayout from '@/components/CssLayout'
import { Box, Typography } from '@mui/material'
import React from 'react'
import useTranslations from '@/hook/useTranslation'

const css: any = {
  frame: {
    width: '90%',
    height: '90%',
    borderRadius: '2px',
    boxShadow: '1px 2px 10px 0px rgba(0,0,0,0.3)',
    background: 'linear-gradient(to top right, #43389F 0%, #4ec6ca 100%)',
    fontFamily: "'Courier New', 'Courier', sans-serif",
    color: '#fff',
  },
  center: {
    position: 'absolute',
    top: '50.8%',
    left: '50.5%',
    transform: 'translate(-50%,-50%)',
  },
  number: {
    position: 'relative',
    height: '100px',
    width: '200px',
    oneOne: {
      position: 'absolute',
      zIndex: 1,
      top: 0,
      left: '-16px',
      height: '40px',
      width: '20px',
      background: '#fff',
      borderRadius: '3px',
      transform: 'rotate(50deg)',
      boxShadow: '0 0 13px 0 rgba(0,0,0,0.2)',
    },
    oneTwo: {
      position: 'absolute',
      zIndex: 10,
      top: 0,
      left: '0px',
      height: '100px',
      width: '24px',
      background: '#fff',
      borderRadius: '3px',
      boxShadow: '0 0 13px 0 rgba(0,0,0,0.2)',
    },
    zeroOne: {
      position: 'absolute',
      zIndex: 8,
      top: 0,
      left: '17px',
      boxSizing: 'border-box',
      height: '100px',
      width: '100px',
      borderRadius: '50%',
      border: '24px solid #fff',
      boxShadow: '0 0 13px 0 rgba(0,0,0,0.2)',
    },
    zeroTwo: {
      position: 'absolute',
      top: '0',
      boxSizing: 'border-box',
      height: '100px',
      width: '100px',
      borderRadius: '50%',
      border: '24px solid #fff',
      boxShadow: '0 0 13px 0 rgba(0,0,0,0.2)',
      zIndex: 6,
      left: '100px',
    },
  },

  big: {
    position: 'relative',
    zIndex: 20,
    display: 'block',
    fontSize: '82px',
    lineHeight: '60px',
    textTransform: 'uppercase',
    fontWeight: '700',
    marginTop: '6px',
  },
  small: {
    position: 'relative',
    zIndex: 20,
    display: 'block',
    fontSize: '23px',
    lineHeight: '20px',
    textTransform: 'uppercase',
    fontWeight: 700,
    letterSpacing: '.04em',
  },
}

const DayOne = (): JSX.Element => {
  const t = useTranslations()
  return (
    <CssLayout text={t.daysOfCss.one}>
      <Box sx={{ width: '100%', height: '100%', display: 'grid', placeItems: 'center', position: 'relative' }}>
        <Box sx={css.frame}>
          <Box sx={css.center}>
            <Box sx={css.number}>
              <Box sx={css.number.oneOne}></Box>
              <Box sx={css.number.oneTwo}></Box>
              <Box sx={css.number.zeroOne}></Box>
              <Box sx={css.number.zeroTwo}></Box>
            </Box>
            <Typography sx={css.big}>Days</Typography>
            <Typography sx={css.small}>CSS Challenge</Typography>
          </Box>
        </Box>
      </Box>
    </CssLayout>
  )
}

export default DayOne
