import { useState } from "react"
import { AnimatePresence , motion } from "framer-motion"
import { SubmitHandler , FieldValues , useForm } from "react-hook-form"


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
        console.log(data);
    }

    console.log(errors.perscribeId);
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
                        <input type="text" maxLength={15} minLength={3} className="persInput input-item" autoComplete="off" title="Physician Name should be between 3 and 15 characters and contain only letters."
                         {...register("physician" , {required : "physician name can not be empty"})}
                            placeholder="Dr. James Martin" />
                        {errors.physician && <span className="error-perscription persPhysician">{errors.physician?.message}</span>}
                    </label>
                    <div className="btn-container-perscription">
                        <button className="btn-perscription" type="submit">Register</button>
                        <button className="btn-perscription" type="button" onClick={() => reset()}>Cancel</button>
                    </div>
                </form>
            </div>
        </>
    )
}
