// import React from 'react'
import Logo from '../assets/logo.png'
import Shape from '../assets/Shape.png'
import Texture from '../assets/Texture.png'


const header = () => {
  return (
    <>
        <div className="header">
            <img className='texture' src={Texture} alt="" />
            <img className='shape' src={Shape} alt="" />
            <div className="logo">
                <img src={Logo} alt="" />
            </div>
            <div className='nav'>
                <h3>Weddings</h3>
                <h5>destinations</h5>
                <h5>packages</h5>
                <h5>tours</h5>
                <h5>promotions</h5>
                <h5>gallery</h5>
                <h5>contact</h5>
                <div className='enter'>
                    <p>create a new account</p>
                    <button>enter</button>
                </div>
            </div>
            <div className='text'>
                <p>your wedding on the best beaches on the world</p>
                <button>quote your event</button>
                <h5>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt aut fuga assumenda, dolore perferendis asperiores in odit earum nobis nam? Minus ea obcaecati culpa illum. Ullam molestias aut tempora perferendis.</h5>
            </div>
        </div>
    </>
)
}

export default header