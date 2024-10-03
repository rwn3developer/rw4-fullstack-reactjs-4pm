import React, { useEffect, useState } from 'react'

const DynamicDependent = () => {

    const [country, setCountry] = useState("")
    const [contryData, setCountryData] = useState([]);
    const [contryId, setCountrId] = useState("");

    const [state, setState] = useState("")
    const [stateData, setStateData] = useState([]);

    const getCountry = async () => {
        try {
            let response = await fetch(`http://localhost:8000/country`, {
                method: "GET"
            })
            let res = await response.json();
            setCountryData(res)
        } catch (err) {
            console.log(err);
            return false;
        }
    }

    const getState = async () => {
        try {
            let response = await fetch(`http://localhost:8000/state`, {
                method: "GET"
            })
            let res = await response.json();
            setStateData(res)
        } catch (err) {
            console.log(err);
            return false;
        }
    }

    useEffect(() => {
        getCountry();
        getState();
    }, [])


    const addCountry = async (e) => {
        e.preventDefault();
        try {
            let response = await fetch(`http://localhost:8000/country`, {
                method: "POST",
                body: JSON.stringify({
                    country: country
                })
            })
            let res = await response.json();
            if (res) {
                alert('country successfully add');
                setCountry("");
                getCountry();
            }
        } catch (err) {
            console.log(err);
            return false;
        }
    }

    const addState = async (e) => {
        e.preventDefault();
        let response = await fetch(`http://localhost:8000/state`, {
            method: "POST",
            body: JSON.stringify({
                countryId: contryId,
                state: state
            })
        })
        let res = await response.json();
        if (res) {
            alert('state successfully add');
            setCountrId("")
            setState("")
        }
    }


    return (
        <div align="center">

            <div style={{ width: "1200px", display: "flex" }}>
                <div style={{ width: "33%" }}>
                    <h2>Country name</h2>
                    <form onSubmit={addCountry}>
                        <table border={1}>
                            <tr>
                                <td>Country :- </td>
                                <td><input type="text" onChange={(e) => setCountry(e.target.value)} value={country} /></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td><input type="submit" /></td>
                            </tr>
                        </table>
                    </form>
                </div>
                <div style={{ width: "33%" }}>
                    <h2>State name</h2>
                    <form onSubmit={addState}>
                        <table border={1}>
                            <tr>
                                <td>Country :- </td>
                                <td>
                                    <select onChange={(e) => setCountrId(e.target.value)} value={contryId}>
                                        <option value="">select country</option>
                                        {
                                            contryData.map((con) => {
                                                const { id, country } = con;
                                                return (
                                                    <option value={id}>{country}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>state :- </td>
                                <td><input type="text" onChange={(e) => setState(e.target.value)} value={state} /></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td><input type="submit" /></td>
                            </tr>
                        </table>
                    </form>
                </div>
                <div style={{ width: "33%" }}>
                    <h2>City name</h2>
                    <form>
                        <table border={1}>
                            <tr>
                                <td>Country :- </td>
                                <td>
                                    <select>
                                        <option>select country</option>
                                        {
                                            contryData.map((con) => {
                                                const { id, country } = con;
                                                return (
                                                    <option value={id}>{country}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>State :- </td>
                                <td>
                                    <select>
                                        <option>select state</option>
                                        {
                                            stateData.map((st) => {
                                                const { id, state } = st;
                                                return (
                                                    <option value={id}>{state}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>City :- </td>
                                <td><input type="text" /></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td><input type="submit" /></td>
                            </tr>
                        </table>
                    </form>
                </div>
            </div>

            <div style={{ marginTop: "100px" }}>
                <h2>Dynamic Dependent</h2>
                <select>
                    <option>---select country---</option>
                </select>
                &nbsp;&nbsp;
                <select>
                    <option>---select state---</option>
                </select>
                &nbsp;&nbsp;
                <select>
                    <option>---select city---</option>
                </select>
            </div>
        </div >
    )
}

export default DynamicDependent