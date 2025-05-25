import React from 'react'
import firstPageImage from '../../../../2447145.png'

export default function Home() {
    return (
        <React.Fragment>
            <div className="container-HomePage">
                <div className="contentOfHomePage">
                    <div className="titleHomeContext">
                        <h2 className='titleHomePage'>Future of PIS is in your hands</h2>
                    </div>
                    <div className="mainTextHome">
                        <div className='mainTextHomePage'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente inventore harum quis quae deserunt odio, hic non deleniti sunt quo cumque est corporis repellat expedita laboriosam libero dolorem, consectetur earum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur dicta tempora saepe labore nesciunt quasi mollitia a dolorum magnam aliquam reiciendis, laboriosam neque pariatur eaque aut illum odit obcaecati blanditiis!Lorem Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae temporibus corporis distinctio possimus doloribus molestiae, velit exercitationem sunt reprehenderit qui alias? Maxime animi expedita vitae maiores, id et! Eveniet, reprehenderit. L libero porro quis dolore eos corporis doloribus?</div>
                    </div>
                </div>
                <img src={firstPageImage} alt="first page of PIS Poster" className='imageOfHome' width={500} height={600}/>
            </div>
        </React.Fragment>
    )
}