import React  ,  { useState } from "react"

interface profObjectType {
    fName : string,
    lName : string,
    birthDate : string,
    pCode : number | undefined
}

export default function Profile() {
    const [profObject , setProfObject]  = useState<profObjectType>({
        fName : '',
        lName : '',
        birthDate : '',
        pCode : undefined
    })

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
    return (
        <>
            <div className="container-profile">
                <h2 className="ProfileTitle">Patints Profile</h2>
                <form action="" className="AddProfile">
                    <label htmlFor="namePersonel" className="itemProf">
                        Name : 
                        <input type="text" placeholder="Adam" id="namePersonel" className="profInput" value={profObject.fName} onChange={handleFnameProf} />
                    </label>
                    <label htmlFor="lastNamePersonel" className="itemProf">
                        Last Name : 
                        <input type="text" placeholder="Moradi" id="lastNamePersonel" className="profInput" value={profObject.lName} onChange={handleLnameProf} />
                    </label>
                    <label htmlFor="birthDatePersonel" className="itemProf">
                        Birth Date : 
                        <input type="date" id="birthDatePersonel" className="profInput" value={profObject.birthDate} onChange={handleBirthDateProf} />
                    </label>
                    <label htmlFor="codePersonel" className="itemProf">
                        Code : 
                        <input type="number" placeholder="22212" id="codePersonel" className="profInput" value={profObject.pCode} onChange={handlePcodeProf} />
                    </label>
                </form>
                <div className="btn-container-profile">
                    <button type="submit" className="btn-profile btn-prof2">Register</button>
                    <button type="button" className="btn-profile btn-prof1">Discard</button>
                </div>
            </div>
        </>
    )
}