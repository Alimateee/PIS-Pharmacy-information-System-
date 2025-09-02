import { useState } from "react"
import {SubmitHandler, useForm , FieldValues} from "react-hook-form"
import { AnimatePresence} from "framer-motion"
import Alert_Add from "./alert-Animate/Alert-Add";


interface useFormType extends FieldValues {
    fName : string,
    lName : string,
    birthDate : string,
    pCode : number
}
export default function Profile() {
    const {register , handleSubmit , formState : { errors } , reset} = useForm<useFormType>({
        defaultValues : {
            fName : '',
            lName : '',
            birthDate : '',
            pCode : undefined
        }
    });
    const [showPopup , setShowPopup] = useState(false);

    let handleSubmitProf : SubmitHandler<useFormType> = async (data) => {
        try { 
            let controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 10000); // Abort after 10 seconds

            console.log('sending data to server ...');

            let response = await fetch('http://localhost:3000/api/add-prof',
            {
                method : 'POST',
                headers : {
                    'content-type' : 'application/json'
                },
                body : JSON.stringify({
                    name : data.fName,
                    lastName : data.lName,
                    birthday : data.birthDate,
                    p_code : data.pCode
                }),
                signal: controller.signal
            }
            );

            clearTimeout(timeoutId) // Clear the timeout if the request completes in time

            const responseData = await response.json();
            console.log("Response Data: ", responseData);
            if(response.ok) {
                console.log("Profile added successfully");
                reset(); // Reset the form after successful submission
                setShowPopup(true);
                setTimeout(() => {
                    setShowPopup(false);
                } , 3000)
            }
            else {
                console.log("Failed to add profile: ", responseData.error);
            }
        }
        catch (error) {
            console.error("Error for adding profiles : ", error);
        }
        
    } 
    return (
        <>
            <div className="container-profile">
                <h2 className="ProfileTitle">Patints Profile</h2>
                <form className="AddProfile" onSubmit={handleSubmit(handleSubmitProf)}>
                    <label htmlFor="namePersonel" className="itemProf">
                        Name : 
                        <input type="text" {...register("fName" , {required : 'please enter your first name'})} 
                            name="fName" maxLength={20}  minLength={3} title="Name should be between 3 and 20 characters and contain only letters."
                            placeholder="Adam" id="namePersonel" className="profInput"/>
                        {errors.fName && <span className="error-prof">{errors.fName?.message}</span>}
                    </label>
                    <label htmlFor="lastNamePersonel" className="itemProf">
                        Last Name : 
                        <input type="text" {...register("lName", {required : 'please enter your last name'})} autoComplete="off" maxLength={20} minLength={3}
                            autoFocus={true} name="lName" title="Last name should be between 3 and 20 characters and contain only letters." 
                            placeholder="Moradi" id="lastNamePersonel" className="profInput"/>
                        {errors.lName && <span className="error-prof">{errors.lName?.message}</span>}
                    </label>
                    <label htmlFor="birthDatePersonel" className="itemProf">
                        Birth Date : 
                        <input type="date" {...register("birthDate" , {required : 'date can not be empty'})}  id="birthDatePersonel" className="profInput" />
                        {errors.birthDate && <span className="error-prof">{errors.birthDate?.message}</span>}
                    </label>
                    <label htmlFor="codePersonel" className="itemProf">
                        Code : 
                        <input type="number" {...register("pCode" , {required : 'enter the P code of patient'})} minLength={3} maxLength={10} placeholder="22212" id="codePersonel" className="profInput"/>
                        {errors.pCode && <span className="error-prof">{errors.pCode?.message}</span>}
                    </label>
                    <div className="btn-container-profile">
                        <button type="submit" className="btn-profile btn-prof2">Register</button>
                        <button type="button" className="btn-profile btn-prof1" onClick={() => reset()}>Discard</button>
                    </div>
                </form>
            </div>
            <AnimatePresence>
                <Alert_Add popup={showPopup} text="Profile Added !" top_position="305px"/>
            </AnimatePresence>
        </>
    )
}