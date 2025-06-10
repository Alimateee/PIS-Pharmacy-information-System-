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
                <form action="" onSubmit={handleSubmit(handleSubmitPerscribe)}></form>
                <h2>Add Perscription</h2>
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore beatae ipsa quasi atque commodi modi consectetur totam accusamus, ipsum sequi nemo optio accusantium libero porro quis dolore eos corporis doloribus?</div>
            </div>
        </>
    )
}
