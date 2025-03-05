import React , {useState} from "react"


export default function MainContent() {
    return (
        <React.Fragment>
            <div className="Main-container">
                <div className="drugContent">
                    <ul>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis reprehenderit debitis, modi necessitatibus consequatur qui magni cum ducimus! Nesciunt ea excepturi consequatur aut voluptas quod facilis animi quia quae odit.</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis tempora, atque qui, non officia magni ipsa quidem enim, voluptas quasi odit harum nemo! Quos sapiente error eligendi atque, sit corrupti!</li>
                        <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis sed praesentium ut at, impedit fuga, nemo facere unde veniam odio asperiores nihil sequi voluptatibus corporis expedita! Necessitatibus eius repudiandae dolores?</li>
                        
                    </ul>
                </div>
                <aside className="navBar">
                    <div className="part">
                        <div className="search-container">
                            <label htmlFor="search-sidebar"> Search
                                <input type="search" id="search-sidebar" className="search-sidebar" placeholder="Drugs ..."/>
                            </label>
                        </div>
                    </div>
                    <label htmlFor="DrugName-input"> Drug name
                        <input type="text" id="DrugName-input" placeholder="name of Drug" className="DrugName-input"/>
                    </label> 
                    <label htmlFor="DrugDosage-input">Drug Dosage
                        <input type="text" id="DrugDosage-input" placeholder="enter Dosage" className="DrugDosage-input"/>
                    </label>
                    <label htmlFor="country-input">Country
                        <input type="text" id="country-input" placeholder="enter country" className="country-input"/>
                    </label>
                    <label htmlFor="description-input">Description
                        <input type="text" id="description-input" placeholder="Description" className="description-input"/>
                    </label>
                    <label htmlFor="Drug-count-input">Count
                        <input type="" id="Drug-count-input" placeholder="enter Dosage" className="Drug-count-input"/>
                    </label>
                    
                    <button className="AddDrug-btn">Add to Store</button>
                </aside>
            </div>
        </React.Fragment>
    )
}