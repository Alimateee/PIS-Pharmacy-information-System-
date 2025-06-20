import { div, ul } from "framer-motion/client"
import { useEffect, useState } from "react"


export default function Reports() {
    const [reportType, setReportType] = useState('');
    const [listData, setListData] = useState([]);

    let handleChange = (e: any) => {
        setReportType(e.target.value);
    }
    let ReportQuery = async () => {
        try {
            let response = await fetch(`http://localhost:3000/api/get-${reportType}`);
            let data = response.json();
            data.then(data => {
                console.log(`data recieved !`);
                setListData(data);
            })
                .catch(err => {
                    console.log(`Error when fetching data from server : ${err}`);
                })
        }
        catch (err) {
            console.log(`this Error is from catch block : ${err}`);
        }
        console.log(listData);
    }
    // console.log(ReportQuery());
    return (
        <div className="Report-section">
            <h2 className="Report-title">Reports</h2>
            <div className="report-list">
                <label htmlFor="Report-id" className="label-report">Report Type : </label>
                <select name="reports-part" onChange={handleChange} value={reportType} id="Report-id">
                    <option value="prof">Profiles</option>
                    <option value="drug">Drugs</option>
                    <option value="persc">Perscriptions</option>
                </select>
                <button type="button" className="btn-report" onClick={ReportQuery}>Generate</button>
            </div>
            <div className="table">
            </div>
        </div>
    )
}