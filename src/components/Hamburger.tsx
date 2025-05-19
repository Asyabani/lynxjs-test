import { useState } from '@lynx-js/react'
import { useNavigate } from 'react-router'


export function HamburgerMenu() {
    const nav = useNavigate()
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => setIsOpen(!isOpen)
    return (
        <view>
            <view className="hamburger" bindtap={toggleMenu}>
                <view className={`bar top ${isOpen ? 'open' : ''}`} />
                <view className={`bar middle ${isOpen ? 'open' : ''}`} />
                <view className={`bar bottom ${isOpen ? 'open' : ''}`} />
            </view>

            {isOpen && (
                <view className="overlay">
                <view className="menu">
                    <text bindtap={() => nav('/home')}>Home</text>
                    <text bindtap={() => nav('/alphabet')}>About</text>
                    <text bindtap={toggleMenu}>Services</text>
                    <text bindtap={toggleMenu}>Why Us</text>
                    <text bindtap={toggleMenu}>Our Work</text>
                    <text bindtap={toggleMenu}>FAQs</text>
                </view>
                </view>
            )}
        </view>
    )
}
