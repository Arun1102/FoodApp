import React from 'react'
import './Home.css'
import image1 from '../../Assets/icecream.png'
function Home() {

    const imagePath = 'src\Assets\icecream.png'
  return (
    <div className='Home'>
            <div className="leftdiv">
                <span className='Title'>The fastest Delivery in <span className='title-in'>Your City</span></span>
                <p className='descrip'>
                orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
                </p>
                <button className='leftdiv-button'>Order Now</button>
            </div>
            <div className="rightdiv">
                {/* <img className='rightdiv-img' src="https://img.freepik.com/free-photo/liquid-marbling-paint-texture-background-fluid-painting-abstract-texture-intensive-color-mix-wallpaper_1258-82939.jpg"/> */}
               <div className="cardss">
                <div className="cards">
                    <img className='card-img' src={image1}/>
                    <span>Ice Cream</span>
                    <span>$10.00</span>
                </div>
                <div className="cards">
                    <img className='card-img' src={image1}/>
                    <span>Ice Cream</span>
                    <span>$10.00</span>
                </div>
                <div className="cards">
                    <img className='card-img' src={image1}/>
                    <span>Ice Cream</span>
                    <span>$10.00</span>
                </div>
                <div className="cards">
                    <img className='card-img' src={image1}/>
                    <span>Ice Cream</span>
                    <span>$10.00</span>
                </div>
                </div>
            </div>

    </div>
  )
}

export default Home