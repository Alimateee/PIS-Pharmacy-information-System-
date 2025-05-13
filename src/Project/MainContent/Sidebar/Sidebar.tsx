import React , {useState} from "react"
import Content from "../Content";
import Home from "./home";
import Profile from "./profile";
import AddDrug from "./AddDrug";
import AddPerscription from "./addPerscription";


export const contentMap =  {
    home : <Home />,
    profile : <Profile />,  
    AddDrug : <AddDrug />,
    AddPerscription : <AddPerscription />
}



let menuList  = [
    {id : 'home' , label : 'Home Page'},
    {id : 'profile' , label : 'Profile'},
    {id : 'AddDrug' , label : 'Add drug'},
    {id : 'AddPerscription' , label : 'Add Perscription'},
]

const Sidebar = ({changeSelection , onchangeSelection} : any) =>  {


    return (
        <React.Fragment>
            <aside className="navBar">
                <ul>
                     {menuList.map(item => {
                        return <li key={item.id} className={changeSelection == item.id ? 'active' : '' + 'menuListItem'} onClick={() => onchangeSelection(item.id)}>
                            {item.label}
                        </li>
                     })}
                </ul>
            </aside>
        </React.Fragment>
    )
}

export default Sidebar