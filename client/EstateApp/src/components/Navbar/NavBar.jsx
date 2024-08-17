import { useState } from 'react'
import './NavBar.scss'
function NavBar() {
const [open,setOpen] = useState(false);
    return (
        <nav>
            <div className="left">
                <a href='/' className='logo'>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAADQElEQVR4nO2aS2vUUBTHfx21+C64E3xt7NJJRorfwW+g1n4AVyJUV4p0IW5UBLW1PjsFXblwJ7pQFEW3uhFsl7qw9bH2FbnlBC6HmSRzk0wmmRw4MLknc+/5/3IfuXcGaquttt
                pqq6222mor1A4AH8TN56GyJrACBOLfgYMMqfhgmCA0lfgf4uH1S
                pWHQ1OJ/wkcAlrAt6r3hGYX8aFVGkIzRnylITQTiq8kBA9YVRPehBUfAY6Km8+hTVRhYvSUeP3kjeDrVvw20KhKT/B6FF8pC
                J6j+EpA8FWyeswbYfNK8Jy4XTavIOg54esgzgmew5O/JUJN7JqK3SlTT/ASiL8R85RLC8HLQHxpIXiO4u01v7QQ/BzE
                lwaCn0D8rKP4KAh3BwGC7yD+Zo/iBxaCrxrLU/zAQfATiJ/LWHwUhHv9hODHiG9IQvoNLwvxURAeAOvyhtBKIP5+zu
                KjIDzME0JrgMT3HULLQfxszuLTQOhpA9VyEH+lT+LjIKxPC2Gf2nrqLa2hvFCw+KiVZ0H1hE5b6Z1RlR5RFc5YMVNxW8UvU6
                yNqHwCydGGMKPih6Mq3Ay8s27+A0xmIH4cmAbOJPRp+U4S
                CyIgTIqGsPw5sCGuwrEOEF6qBi7Rmy13STTKl1IACCRnW/wLYEvShDWENOKjkozzXuvWc4KTeBvC2wzE9xNAp9XhF
                bDVMW/GpCv9Ay64VtJHAAiEq3L91OXJdzJnggUAyCrnTK0IALnaOHAq5VJVagDLGS1VpQUQpEiyBkDdAyj1ENidIsm/8p7
                els+lArALeKzer3tN0mxXQ2uXCYAve+m0SRrRoS2WBcB2We7CRn6nHAKL4qUZAietBlalNwzNMrgXeG81MOXYaOkA
                7AGeyC7QbmDHMABoqtPUoMNr7yAAMMd359X95npTCu1sAz5ZFf4CHgFngf1dBBUBYCPwpst3XkvcyU6of2h6CQQVAUA/ee3n4hJqAMc7nMZ+tCp5FnFqazeW5JTX
                FUC3+r5Y90zLqc9pq+yz6At/QW7ICbHxtd8wplIkNWg+KiJHO8QMBER4WHYMCQQV8KWY4/fJbgAaUnixxK4nZm
                Pm2pSbuNEXDgHT7Y3wtX+m/wc6ejPR03pPUgAAAABJRU5ErkJggg=="/>
                    <span style={{marginTop:"15px"}}>IroshEstate</span>
                </a>
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Contract</a>
                <a href="">Agents</a>

            </div>
            <div className="right">
                <a href="">SignIn</a>
                <a href="" className='register'>SignUp</a>
                <div className="menuicon">
                    <img src="/menu.png" alt="" onClick={() => setOpen( (prev) => !prev)}/>
                </div>
                <div className={open ? "menu active" : "menu"}>
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Contract</a>
                <a href="">Agents</a>
                <a href="">SignIn</a>
                <a href="">SignUp</a>
                </div>
            </div>
        </nav>
    )

}

export default NavBar