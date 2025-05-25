import React  ,  { useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import {motion , AnimatePresence} from "framer-motion"

interface profObjectType {
    fName : string | undefined,
    lName : string | undefined,
    birthDate : string | undefined,
    pCode : number | undefined
}
type useFormType = {
    fname : string,
    lname : string,
    birthDate : string,
    Pcode : number
}
export default function Profile() {
    const [profObject , setProfObject]  = useState<profObjectType>({
        fName : '',
        lName : '',
        birthDate : '',
        pCode : undefined
    })
    const {register , handleSubmit , formState : { errors }} = useForm<useFormType>();
    const [showPopup , setShowPopup] = useState(false);

    let handleSubmitProf : SubmitHandler<useFormType> = (data) => {
        setShowPopup(true);
        setTimeout(() => {
            setShowPopup(false);
        } , 3000)
        console.log(JSON.stringify(data));
    } 

    let handleFnameProf = (e : any) => {
        setProfObject({
            ...profObject,
            fName : e.target.value
        })
    }
    let handleLnameProf = (e : any) => {
        setProfObject({
            ...profObject,
            lName : e.target.value
        })
    }
    let handleBirthDateProf = (e : any) => {
        setProfObject({
            ...profObject,
            birthDate : e.target.value
        })
    }
    let handlePcodeProf = (e : any) => {
        setProfObject({
            ...profObject,
            pCode : e.target.value
        })
    }

    const popupVariants = {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 9, transition: { duration: 0.3 } },
        exit: { opacity: 0, y: -50, transition: { duration: 0.3 } },
    };
    return (
        <>
            <div className="container-profile">
                <h2 className="ProfileTitle">Patints Profile</h2>
                <form className="AddProfile" onSubmit={handleSubmit(handleSubmitProf)}>
                    <label htmlFor="namePersonel" className="itemProf">
                        Name : 
                        <input type="text" {...register("fname" , {required : 'please enter your first name'})}  autoComplete="off"  autoFocus={true}
                            name="fname"  maxLength={20}  minLength={3}  pattern="[A-Za-z]{3,20}"  title="Name should be between 3 and 20 characters and contain only letters."
                            placeholder="Adam" id="namePersonel" className="profInput" value={profObject.fName} onChange={handleFnameProf} />
                        {errors.fname && <span className="error-prof">{errors.fname.message}</span>}
                    </label>
                    <label htmlFor="lastNamePersonel" className="itemProf">
                        Last Name : 
                        <input type="text" {...register("lname", {required : 'please enter your last name'})} autoComplete="off" maxLength={20} minLength={3}
                            autoFocus={true} name="lname" pattern="[A-Za-z]{3 , 20}" title="Last name should be between 3 and 20 characters and contain only letters." 
                            placeholder="Moradi" id="lastNamePersonel" className="profInput" value={profObject.lName} onChange={handleLnameProf} />
                        {errors.lname && <span className="error-prof">{errors.lname.message}</span>}
                    </label>
                    <label htmlFor="birthDatePersonel" className="itemProf">
                        Birth Date : 
                        <input type="date" {...register("birthDate" , {required : 'date can not be empty'})}  id="birthDatePersonel" className="profInput" value={profObject.birthDate} onChange={handleBirthDateProf} />
                        {errors.birthDate && <span className="error-prof">{errors.birthDate.message}</span>}
                    </label>
                    <label htmlFor="codePersonel" className="itemProf">
                        Code : 
                        <input type="number" {...register("Pcode" , {required : 'enter the P code of patient'})} placeholder="22212" id="codePersonel" className="profInput" value={profObject.pCode} onChange={handlePcodeProf} />
                        {errors.Pcode && <span className="error-prof">{errors.Pcode.message}</span>}
                    </label>
                    <div className="btn-container-profile">
                        <button type="submit" className="btn-profile btn-prof2">Register</button>
                        <button type="button" className="btn-profile btn-prof1">Discard</button>
                    </div>
                </form>
            </div>
            <AnimatePresence>
                {showPopup && (
                    <motion.div
                        style={{
                            position: 'fixed',
                            background: 'white',
                            padding: '.6rem',
                            backgroundColor: '#8BC34A',
                            color: 'white',
                            borderRadius: '8px',
                            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                            zIndex: 1000,
                        }}
                        className="popup"
                        initial= "hidden"
                        animate= "visible"
                        exit= "exit"
                        variants={popupVariants}
                    >
                        <div className="contain-Animate">
                            <h4 className="head-Animate">Profile created !</h4>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}