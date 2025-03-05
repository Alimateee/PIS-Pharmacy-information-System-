import React , {useState} from "react"
import Sidebar from "./MainContent/Sidebar"
import Content from "./MainContent/Content"

export default function MainContent() {
    return (
        <React.Fragment>
            <div className="Main-container">
                <Content />                
                <Sidebar />  
            </div>
        </React.Fragment>
    )
}