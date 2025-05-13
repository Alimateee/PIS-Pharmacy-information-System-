import { useState } from "react"

<<<<<<< HEAD
//type of the drugAtrib and updater function 
interface DrugAtribType {
    name : string,
    Dosage : number | undefined,
    Country : string,
    Distribution_Company : string,
    ExpireDate : string
}
=======
>>>>>>> 204eb48 (add some changes)

export default function AddDrug() {
    const [drugAtrib , setDrugAtrib] = useState<DrugAtribType>({
        name : "",
        Dosage : undefined,
        Country : "",
        Distribution_Company : "",
        ExpireDate : ""
    })
    
    let handleChangeDrugName = (e : any) => {
        setDrugAtrib({
            ...drugAtrib,
            name : e.target.value
        })
    }
    let handleChangeDrugDosage = (e : any) => {
        setDrugAtrib({
            ...drugAtrib,
            Dosage : e.target.value
        })
    }
    let handleChangeDrugCountry = (e : any) => {
        setDrugAtrib({
            ...drugAtrib,
            Country : e.target.value
        })
    }
    let handleChangeDrugDistributionCompany = (e : any) => {
        setDrugAtrib({
            ...drugAtrib,
            Distribution_Company : e.target.value
        })
    }
    let handleChangeDrugExpireDate = (e : any) => {
        setDrugAtrib({
            ...drugAtrib,
            ExpireDate : e.target.value
        })
    }
    return (
        <>
             <h2>Add Drug</h2>
             <form action="nameDrug" className="AddDrugFrom">
                <label htmlFor="nameDrug" className="DrugName itemDrug">
                    Drug Name :
                    <input type="text" value={drugAtrib.name} onChange={handleChangeDrugName} id="nameDrug" className="inputForm" placeholder="Fluoxetine"/>
                </label>
                <label htmlFor="dosage" className="Dosage itemDrug">
                    Dosage : 
                    <input type="number" value={drugAtrib.Dosage} onChange={handleChangeDrugDosage} id="dosage" className="inputForm" placeholder="120 mg"/>
                </label>
                <label htmlFor="country" className="Country itemDrug">
                    Country : 
                    <input type="text" value={drugAtrib.Country} onChange={handleChangeDrugCountry} id="country" className="inputForm" placeholder="Germany"/>
                </label>
                <label htmlFor="distribution" className="DistCompany itemDrug">
                    Distribution Company : 
                    <input type="text" value={drugAtrib.Distribution_Company} onChange={handleChangeDrugDistributionCompany} id="distribution" className="inputForm" placeholder="Razi Company"/>
                </label>
                <label htmlFor="expireDate" className="ExpireDate itemDrug">
                    Expire Date : 
                    <input type="date" value={drugAtrib.ExpireDate} onChange={handleChangeDrugExpireDate} id="expireDate" className="inputForm" placeholder="2025/23/4"/>
                </label>
             </form>
        </>
    )
}