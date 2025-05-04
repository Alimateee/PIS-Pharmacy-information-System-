import { useState } from "react";


export default function Content({content} : any) {

    return(
        <>
            <div className="main-data-compoent">
                {content}
            </div>
        </>
    )
}