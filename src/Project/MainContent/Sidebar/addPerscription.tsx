import { SubmitHandler , FieldValues , useForm } from "react-hook-form"
import { AnimatePresence , motion } from "framer-motion"
import { useState } from "react"


interface perscriptionUseFormType extends FieldValues {
    perscribeId : number | undefined,
    percbDate : string | undefined,
    physician : string | undefined
}


export default function AddPerscription() {

    let [showpopup , setShowPopup] = useState(false);

    const {register , handleSubmit , formState: {errors} , reset} = useForm<perscriptionUseFormType>({
        defaultValues : {
            perscribeId : undefined,
            percbDate : '',
            physician : ''
        }
    })

    let handleSubmitPerscribe : SubmitHandler<perscriptionUseFormType> = async (data) => {
        
    }


    return (
        <>
            <div className="container-AddPerscription">
                <h2>Add Perscription</h2>
                <form action="" onSubmit={handleSubmit(handleSubmitPerscribe)}>
                    <label htmlFor="perscribeID" className="perscribe pers_item">
                        <input type="number" {...register("persID" , {required : "perscription ID can not be empty"})}
                         className="persInput" placeholder="perscribtion ID" />
                    </label>
                    <label htmlFor="persDate" className="persDate pers_item">
                        <input type="data" className="persInput" />
                    </label>
                    <label htmlFor="physician" className="physician pers_item">
                        <input type="text" className="persInput" />
                    </label>
                </form>
            </div>
        </>
    )
}
