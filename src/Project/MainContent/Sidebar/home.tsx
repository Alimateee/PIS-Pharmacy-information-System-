import React from 'react'
import firstPageImage from '../../../../photo_2025-05-13_18-54-02.jpg'

export default function Home() {
    return (
        <React.Fragment>
            <div className="container-HomePage">
                <h2 className='titleHomePage'>Future of PIS is in your hands</h2>
                <div className='mainTextHomePage'>L libero porro quis dolore eos corporis doloribus?</div>
                <img src={firstPageImage} alt="first page of PIS Poster" width={1000} height={800}/>
            </div>
        </React.Fragment>
    )
}