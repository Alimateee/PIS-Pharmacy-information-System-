import React , {useState} from "react"
import Sidebar from "./MainContent/Sidebar"
import Content from "./MainContent/Content"

export default function MainContent() {
    let [formData , setFormData] = useState({});

    let handleData = (data : any) => {
        setFormData(data);
    }
    return (
        <React.Fragment>
            <div className="Main-container">
                <Content dataTransfer={formData}/>                
                <Sidebar onSubmit={handleData}/>  
            </div>
        </React.Fragment>
    )
}