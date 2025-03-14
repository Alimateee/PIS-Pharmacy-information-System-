import React , {useState} from "react"
import Content from "./Content";

export default function Sidebar({onSubmit} : any) {
    let [DrugName , setDrugName] = useState('');
    let [DrugDosage , setDrugDosage] = useState('')
    let [CountryName , setCountryName] = useState('')
    let [Description , setDescription] = useState('')
    let [Count , setCount] = useState(0)
    let [jsonList , setJsonList] = useState('');


    let handleChangeDrugName = (e : any) => {
        setDrugName(e.target.value)
    }
    let handleChangeDrugDosage = (e : any) => {
        setDrugDosage(e.target.value)
    }
    let handleChangeCountryName = (e : any) => {
        setCountryName(e.target.value)
    }
    let handleChangeDescription = (e : any) => {
        setDescription(e.target.value)
    }
    let handleChangeCount = (e : any) => {
        setCount(e.target.value);
    }
    let handleClickRegister = () => {
        setJsonList(
            {
                Drug_name : DrugName,
                Drug_Dosage : DrugDosage,
                Drug_Country_maker : CountryName,
                Drug_Desc : Description,
                Drug_count_order : Count
            }
        )
        onSubmit(jsonList);
    }
    
    return (
        <React.Fragment>
            <aside className="navBar">
                <div className="part">
                    <div className="search-container">
                        <label htmlFor="search-sidebar"> Search
                            <input type="search" id="search-sidebar" className="search-sidebar" placeholder="Drugs ..."/>
                        </label>
                    </div>
                </div>
                <label htmlFor="DrugName-input"> Drug name
                    <input value={DrugName} onChange={handleChangeDrugName} type="text" id="DrugName-input" placeholder="name of Drug" className="DrugName-input"/>
                </label> 
                <label htmlFor="DrugDosage-input">Drug Dosage
                    <input value={DrugDosage} onChange={handleChangeDrugDosage} type="text" id="DrugDosage-input" placeholder="enter Dosage" className="DrugDosage-input"/>
                </label>
                <label htmlFor="country-input">Country
                    <input value={CountryName} onChange={handleChangeCountryName} type="text" id="country-input" placeholder="enter country" className="country-input"/>
                </label>
                <label htmlFor="description-input">Description
                    <input value={Description} onChange={handleChangeDescription} type="text" id="description-input" placeholder="Description" className="description-input"/>
                </label>
                <label htmlFor="Drug-count-input">Count
                    <input value={Count} onChange={handleChangeCount} type="text" id="Drug-count-input" placeholder="enter Count" className="Drug-count-input"/>
                </label>
                
                <button 
                className="AddDrug-btn" onClick={handleClickRegister} 
                disabled={DrugDosage && DrugName && Count && Description && CountryName !== '' ? false : true}>Add to Store</button>
            </aside>
        </React.Fragment>
    )
}