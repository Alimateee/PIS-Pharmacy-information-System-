import { useState } from "react"
import { AnimatePresence } from "framer-motion"
import { SubmitHandler , FieldValues , useForm } from "react-hook-form"
import Alert_Add from "./alert-Animate/Alert-Add"


interface perscriptionUseFormType extends FieldValues {
    perscribeId : number,
    percbDate : string,
    physician : string
}


export default function AddPerscription() {
    const {register , handleSubmit , formState: { errors } , reset} = useForm<perscriptionUseFormType>({
        defaultValues : {
            perscribeId : undefined,
            percbDate : '',
            physician : ''
        }
    })

    let [showpopup , setShowPopup] = useState(false);

    let handleSubmitPerscribe : SubmitHandler<perscriptionUseFormType> = async (data) => {
        let res_data : any = await fetch('http://localhost:3000/api/add-perscription' , {
            method : 'POST',
            headers : {
                "Content-type" : "application/json"
            },
            body : JSON.stringify({
                pers_ID_self : data.perscribeId,
                pers_date : data.percbDate,
                physician_name : data.physician
            })
        })
        let response : any = await res_data.json()
        console.log(`response is : ${response.message}`);
        
        if(res_data.ok) {
            console.log(`response is ok : ${res_data.statusCode}`);
            console.log(`Perscription Added Successfully`);
            reset();
            setShowPopup(true)
            setTimeout(() => {
                setShowPopup(false)
            }, 3000)
        }
        else {
            throw new Error(`Error appeared in response : ${response.error}`)
        }
        
    }
    // console.log(showpopup);
    
    return (
        <>
            <div className="container-AddPerscription">
                <h2 className="title-perscription">Add Perscription</h2>
                <form className="AddPerscription" onSubmit={handleSubmit(handleSubmitPerscribe)}>
                    <label htmlFor="perscribeID" className="perscribe pers_item">
                        Perscription ID : 
                        <input type="number" {...register("perscribeId" , {required : "Perscription ID can not be empty"})}
                            className="persInput input-item"/>
                        {errors.perscribeId && <span className="error-perscription persID">{errors.perscribeId?.message}</span>}
                    </label>
                    <label htmlFor="persDate" className="persDate pers_item">
                        Perscription Date : 
                        <input type="date" className="persInput input-item"  {...register('percbDate' , {required : "perscription Date can not be empty"})}
                            placeholder='6/26/2025' />
                        {errors.percbDate && <span className="error-perscription persDate">{errors.percbDate?.message}</span>}
                    </label>
                    <label htmlFor="physician" className="physician pers_item">
                        Physician Name : 
                        <input type="text" maxLength={50} minLength={3} className="persInput input-item" autoComplete="off" title="Physician Name should be between 3 and 15 characters and contain only letters."
                         {...register("physician" , {required : "physician name can not be empty"})}
                            placeholder="Dr. James Martin" />
                        {errors.physician && <span className="error-perscription persPhysician">{errors.physician?.message}</span>}
                    </label>
                    <div className="btn-container-perscription">
                        <button className="btn-perscription" type="submit">Register</button>
                        <button className="btn-perscription" type="button" onClick={() => reset()}>Cancel</button>
                    </div>
                </form>
                <AnimatePresence>
                    <Alert_Add popup={showpopup} text="Perscription Added !" top_position="290px"/>
                </AnimatePresence>
            </div>
        </>
    )
}
