import { useCallback, useEffect, useState } from '@lynx-js/react'
import './App.css'
import { Navbar } from './components/Navbar.js'
import { GameList } from './components/GameList.js'
import { Game } from './components/Game.js'
import EgLogo from './assets/EG.png'

export function App() {
 

  return (
    <scroll-view scroll-orientation="vertical" style="width:100%; height:100%;">
    <view className="container landscape:row portrait:column">
      <Navbar />
      <view className='section1'>
        <text className='title'>Game Populer</text>
        <text className='subtitle'>Recommendations for the Best Children's Games</text>
        <GameList />
        <image src={EgLogo} className='Logo--EG' />
      </view>
    </view>
  </scroll-view>
  
  )
}
