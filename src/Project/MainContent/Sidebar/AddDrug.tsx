import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { SubmitHandler, useForm, FieldValues } from "react-hook-form"
import Alert_warningDb from "./alert-Animate/Alert-warningDb";
import AlertAddDrug from "./alert-Animate/AlertAddDrug";
import { s } from "framer-motion/client";


//type of the drugAtrib and updater function 

interface drugUseFormType extends FieldValues {
    name: string,
    Dosage: number | undefined,
    Country: string,
    Distrubution_Company: string,
    ExpireDate: string,
    PerscribeId: number
}
export default function AddDrug() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<drugUseFormType>({
        defaultValues: {
            name: "",
            Dosage: undefined,
            Country: "",
            Distrubution_Company: "",
            ExpireDate: "",
            PerscribeId: undefined
        }
    });
    const [showPopup, setShowPopup] = useState(false);
    const [showPopup_dbstat, setShowPopup_dbstat] = useState(false);
    const [showPopup_dbstat_connect, setShowPopup_dbstat_connect] = useState(false);

    // useEffect(() => {
    //     fetch('http://localhost:3000/api/db_stat')
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             if (data.status === 'database is not connected') {
    //                 setShowPopup_dbstat(true)
    //                 setTimeout(() => setShowPopup_dbstat(false), 5000);
    //             }
    //             else {
    //                 setShowPopup_dbstat_connect(true)
    //                 setTimeout(() => setShowPopup_dbstat_connect(false) , 3000);
    //                 console.log('connected to db .');
    //             }
    //         })
    //         .catch(err => {
    //             console.log('catch error : ', err);
    //         })
    // } , [])
    // const [connected , setConnected] = useState(true)
    useEffect(() => {
        let ws : any
        let dbTimeout : any;
        let checkWebsocketConnection = () => {
            ws = new WebSocket('ws://localhost:3000');

            ws.onopen = () => {
                console.log('WebSocket connection established');
            };
            ws.onmessage = (event : any) => {
                let status = JSON.parse(event.data);
                console.log('WebSocket message received:', status);
                if (status.status === 'disconnected') {
                    setShowPopup_dbstat(true)
                    setTimeout(() => setShowPopup_dbstat(false), 3000);
                }
                else {
                    setShowPopup_dbstat_connect(true)
                    setTimeout(() => setShowPopup_dbstat_connect(false), 3000);
                }
            }
            ws.onclose = () => {
                console.log('WebSocket connection closed');
                setShowPopup_dbstat(true)
                setTimeout(() => setShowPopup_dbstat(false) , 3000);
            }
            
            ws.onerror = (error : any) => {
                console.error('WebSocket error:', error);
            }
            
        }
        
        checkWebsocketConnection(); // Initial connection attempt

        return () => {
            ws?.close(); // Clean up WebSocket connection on component unmount
        }
    } , []);

    let handleSubmitDrug: SubmitHandler<drugUseFormType> = async (data) => {
        try {
            let controller = new AbortController();
            let timeoutId = setTimeout(() => controller.abort(), 10000); // Abort after 10 seconds
            console.log('sending data to server ...');
            // send data to server
            let response = await fetch('http://localhost:3000/api/add-drug', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    drugName: data.name,
                    dosage: data.Dosage,
                    country: data.Country,
                    distro_company: data.Distrubution_Company,
                    exp_date: data.ExpireDate,
                    perscribe_Id: data.PerscribeId
                }),
                signal: controller.signal
            })

            clearTimeout(timeoutId); // Clear the timeout if the request completes in time
            const responseData = await response.json(); // get the response data from server.js
            console.log("Response Data: ", responseData);
            if (response.ok) {
                console.log("Drug added successfully");
                reset(); // Reset the form after successful submission
                setShowPopup(true);
                setTimeout(() => {
                    setShowPopup(false);
                }, 3000)
            }
            else {
                console.log("Failed to add drug: ", responseData.error);
            }
        }
        catch (error) {
            console.log(`Error occurred while adding drug: ${error}`);
        }
    }

    return (
        <>
            <div className="container-AddDrug">
                <h2 className="AddDrugTitle">Add Drug</h2>
                <form className="AddDrugFrom" onSubmit={handleSubmit(handleSubmitDrug)}>
                    <label htmlFor="nameDrug" className="DrugName itemDrug">
                        Drug Name :
                        <input type="text" {...register("name", { required: "Drug name can not be empty" })} id="nameDrug" className="inputForm" placeholder="Fluoxetine" />
                        {errors.name && <span className="error-Drug">{errors.name.message}</span>}
                    </label>
                    <label htmlFor="dosage" className="Dosage itemDrug">
                        Dosage :
                        <input type="number" {...register("Dosage", { required: "Dosage of drug can not be empty" })} id="dosage" className="inputForm" placeholder="120 mg" />
                        {errors.Dosage && <span className="error-Drug">{errors.Dosage.message}</span>}
                    </label>
                    <label htmlFor="country" className="Country itemDrug">
                        Country :
                        <input type="text" {...register("Country", { required: "Country can not be empty" })} id="country" className="inputForm" placeholder="Germany" />
                        {errors.Country && <span className="error-Drug">{errors.Country.message}</span>}
                    </label>
                    <label htmlFor="distribution" className="DistCompany itemDrug">
                        Distribution Company :
                        <input type="text" {...register("Distrubution_Company", { required: "Distro_Inc must entered" })} id="distribution" className="inputForm" placeholder="Razi Company" />
                        {errors.Distrubution_Company && <span className="error-Drug">{errors.Distrubution_Company.message}</span>}
                    </label>
                    <label htmlFor="expireDate" className="ExpireDate itemDrug">
                        Expire Date :
                        <input type="date" {...register("ExpireDate", { required: "Expire Date can not be empty" })} id="expireDate" className="inputForm" placeholder="2025/23/4" />
                        {errors.ExpireDate && <span className="error-Drug">{errors.ExpireDate.message}</span>}
                    </label>
                    <label htmlFor="perscribeId" className="PerscribeId itemDrug">
                        Perscription id :
                        <input type="number" {...register("PerscribeId", { required: "Perscribe id can not be empty" })} id="perscribeId" className="inputForm" placeholder="1000" />
                        {errors.PerscribeId && <span className="error-Drug">{errors.PerscribeId.message}</span>}
                    </label>
                    <div className="btn-container-addDrug">
                        <button type="submit" className="btn-AddDrug btn-Drug2">Register</button>
                        <button type="button" className="btn-AddDrug btn-Drug1" onClick={() => reset()}>Cancel</button>
                    </div>
                </form>
                {/* <button onClick={() => {
                    setShowPopup_dbstat(true);
                    setTimeout(() => setShowPopup_dbstat(false), 3000);
                }}>Test Disconnect Popup</button>

                <button onClick={() => {
                    setShowPopup_dbstat_connect(true);
                    setTimeout(() => setShowPopup_dbstat_connect(false), 3000);
                }}>Test Connect Popup</button> */}

                <AnimatePresence>
                    <AlertAddDrug popup={showPopup} />
                    <Alert_warningDb popupWarningDb={[showPopup_dbstat, showPopup_dbstat_connect]} />
                </AnimatePresence>
            </div>
        </>
    )
}