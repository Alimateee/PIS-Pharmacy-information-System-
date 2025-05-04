import { useState } from "react"

export default function AddDrug() {
    const [drugAtrib , setDrugAtrib] = useState({
        name : "",
        Dosage : "",
        Country : "",
        Distribution_Company : "",
        ExpireDate : ""
    })
    
    return (
        <>
             <h2>Add Drug</h2>
             <form action="nameDrug" className="AddDrugFrom">
                <label htmlFor="nameDrug" className="DrugName">
                    Drug Name : 
                    <input type="text" id="nameDrug" className="inputForm" placeholder="Fluoxetine"/>
                </label>
                <label htmlFor="dosage" className="Dosage">
                    Dosage : 
                    <input type="text" id="dosage" className="inputForm" placeholder="120 mg"/>
                </label>
                <label htmlFor="country" className="Country">
                    Country : 
                    <input type="text" id="country" className="inputForm" placeholder="Germany"/>
                </label>
                <label htmlFor="distribution" className="DistCompany">
                    Distribution Company : 
                    <input type="text" id="distribution" className="inputForm" placeholder="Razi Company"/>
                </label>
                <label htmlFor="expireDate" className="ExpireDate">
                    Expire Date : 
                    <input type="date" id="expireDate" className="inputForm" placeholder="2025/23/4"/>
                </label>
             </form>
        </>
    )
}