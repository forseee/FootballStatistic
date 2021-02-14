import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import img1 from '../img/football1.jpg'
import img2 from '../img/football2.jpg'
import img3 from '../img/football3.jpg'


const Home = () => {
    return (
        <section id="about" className="about">
            <div className="container">
                <div className="gallery">
                    <div >
                        <Link to='/leagueStatistic' className='content__link'>
                            <img className="picture__1" src={img1} alt="photo 1" />
                            <h1>Стасистика лиги</h1>
                        </Link>
                    </div>
                    <div >
                        <Link to='/teamsStatistic' className='content__link'>
                            <img className="picture__2" src={img2} alt="photo 2" />
                            <h1>Ститистика команды</h1>
                        </Link>
                    </div>
                    <div >
                        <Link href="/" className='content__link'>
                            <img className="picture__3" src={img3} alt="photo 3" />
                            <h1>Новости</h1>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home;