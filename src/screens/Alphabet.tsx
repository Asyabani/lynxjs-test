import { Navbar } from '../components/Navbar.js'
const Alphabet = () => {
    return (
        <view className="container landscape:row portrait:column">
            <Navbar />
            <view className='gameContainer'>
            <text>Alphabet</text>
            </view>
        </view>
    )
}

export default Alphabet