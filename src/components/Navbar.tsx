import { useNavigate } from 'react-router'
import { HamburgerMenu } from './Hamburger.js'
import lynxLogo from './../assets/lynx-logo.png'
import reactLynxLogo from './../assets/react-logo.png'
import { useCallback, useState } from '@lynx-js/react'

export function Navbar  () {
    const [alterLogo, setAlterLogo] = useState(false)
    const nav = useNavigate()
  
    const onTap = useCallback(() => {
      'background only'
      setAlterLogo(!alterLogo)
    }, [alterLogo])
    return (
        <view className='navbar d-flex align-items-between'>
        <view class='d-flex'>
        <view className='Logo' bindtap={onTap}>
          {alterLogo
            ? <image src={reactLynxLogo} className='Logo--react' />
            : <image src={lynxLogo} className='Logo--lynx' />}
        </view>
          <text bindtap={() => nav('/home')} className='title'> Exempli Gratia </text>
        </view>
        <HamburgerMenu />
      </view>
    )
}
