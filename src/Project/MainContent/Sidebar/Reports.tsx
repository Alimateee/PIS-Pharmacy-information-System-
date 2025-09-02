
import { useState } from "react"


export default function Reports() {
    const [reportType, setReportType] = useState('prof');
    const [listData, setListData] = useState([]);

    let handleChange = (e: any) => {
        setReportType(e.target.value);
    }
    let ReportQuery = async () => {
        try {
            let response: any = await fetch(`http://localhost:3000/api/get-${reportType}`)
            let data: [] = response.json();
            return data
            // console.log(data);
        }
        catch (err: any) {
            throw new Error(err)
        }
    }
    let triggerResponse = () => {
        ReportQuery()
            .then(data => {
                setListData(data)
            })
            .catch(err => {
                throw new Error(`this error is from the catch block of fullfield promise : ${err}`);
            })
    }
    // let HeadColumn = () => {
    //     if (Object.keys(listData[0])[0] == 'drugID') {
    //         return (
    //             <>
    //                 <th>Drug ID</th>
    //                 <th>Drug Name</th>
    //                 <th>Dosage</th>
    //                 <th>Country</th>
    //                 <th>Distribution Company</th>
    //             </>
    //         )
    //     }
    //     else if (Object.keys(listData[0])[0] == 'id') {
    //         return (
    //             <thead>
    //                 <th>user ID</th>
    //                 <th>Name</th>
    //                 <th>last Name</th>
    //                 <th>Birthday</th>
    //                 <th>P_code</th>
    //             </thead>
    //         )
    //     }
    // }
    return (
        <div className="Report-section">
            <h2 className="Report-title">Reports</h2>
            <div className="report-list">
                <label htmlFor="Report-id" className="label-report">Report Type : </label>
                <select name="reports-part" onChange={handleChange} value={reportType} id="Report-id">
                    <option value="prof">Profiles</option>
                    <option value="drug">Drugs</option>
                    <option value="perscription">Perscriptions</option>
                </select>
                <button type="button" className="btn-report" onClick={triggerResponse}>Generate Report</button>
            </div>
            <table className="table">
                {
                    listData.map((item: any) => {
                        if (Object.keys(item)[0] == 'drugID') {
                            return <>
                                <tbody>
                                    <td>{item.drugID}</td>
                                    <td>{item.drugName}</td>
                                    <td>{item.dosage}</td>
                                    <td>{item.country}</td>
                                    <td>{item.distro_company}</td>
                                </tbody>
                            </>
                        }
                        else if (Object.keys(item)[0] == 'id') {
                            return <>
                                <tbody>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.lastName}</td>
                                    <td>{item.birthday}</td>
                                </tbody>
                            </>
                        }
                        else if (Object.keys(item)[0] == 'perscription_ID') {
                            return <>
                                <tbody>
                                    <td>{item.perscription_ID}</td>
                                    <td>{item.pers_ID_self}</td>
                                    <td>{item.pers_date}</td>
                                    <td>{item.physician_name}</td>
                                </tbody>
                            </>
                        }
                    })
                }
            </table>
        </div>
    )
}