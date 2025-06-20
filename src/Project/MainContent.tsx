import React , {useState} from "react"
import Sidebar , {contentMap} from "./MainContent/Sidebar/Sidebar"
import Content from "./MainContent/Content"

export default function MainContent() {
    const [changeSelection , setChangeSelection] = useState("home")

    let handleSectionChange = (sectionID : string) => {
        setChangeSelection(sectionID);
    }

    const renderSelect = () => {
            switch (changeSelection) {
                case 'home' : 
                    return contentMap.home;
                case 'profile' : 
                    return contentMap.profile; 
                case 'AddDrug' : 
                    return contentMap.AddDrug;
                case 'AddPerscription' : 
                    return contentMap.AddPerscription;
                case 'Reports' : 
                    return contentMap.Reports
                default : 
                    return contentMap.home;
            }
        }
    return (
        <React.Fragment>
            <div className="Main-container">
                <Content content={renderSelect()}/>                
                <Sidebar changeSelection={changeSelection} onchangeSelection={handleSectionChange}/>  
            </div>
        </React.Fragment>
    )
}