import { useState } from "react";


export default function Content({dataTransfer} : any) {
    // console.log(dataTransfer);
    return(
        <>
            <div className="drugContent">
                <ul>
                    <li>Drug Name : {dataTransfer.Drug_name}</li>
                    <li>Drug Name : {dataTransfer.Drug_Desc}</li>
                    <li>Drug Name : {dataTransfer.Drug_Dosage}</li>
                    <li>Drug Name : {dataTransfer.Drug_count_order}</li>
                    <li>Drug Name : {dataTransfer.Drug_Country_maker}</li>
                    {/* <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis reprehenderit debitis, modi necessitatibus consequatur qui magni cum ducimus! Nesciunt ea excepturi consequatur aut voluptas quod facilis animi quia quae odit.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis tempora, atque qui, non officia magni ipsa quidem enim, voluptas quasi odit harum nemo! Quos sapiente error eligendi atque, sit corrupti!</li>
                    <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis sed praesentium ut at, impedit fuga, nemo facere unde veniam odio asperiores nihil sequi voluptatibus corporis expedita! Necessitatibus eius repudiandae dolores?</li> */}
                </ul>
            </div>
        </>
    )
}