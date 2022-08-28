import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getAllClasses, getEventDate, updateEventDate } from "../../../actions/UserAction";
import { useSelector } from "react-redux";
import EventCards from "./EventCards";


const DashBoard = () => {

    const [date, SetDate] = useState();
    const dispatch = useDispatch();
    const [dateError, setDateError] = useState();
    const { loading, date: eventDate } = useSelector(state => state.event);
 //   const { loading: loadingClassDetails, classes } = useSelector(state => state.classes);

    const verifyDate = (event) => {
        let date = new Date();

        let value = event.target.value;
        let selected = new Date(value);
        if (selected < date) {
            setDateError("Date cannot be in past");

        } else {
            setDateError("");
            SetDate(value);
        }

    }

    const updateDate = (e) => {
        e.preventDefault();
        if (date && !dateError) {
            dispatch(updateEventDate(date));
        }

    }

    useEffect(() => {
        dispatch(getEventDate())
     //   dispatch(getAllClasses())
    }, [])

    return (

        <div className="container-fluid">
            {loading === false && (<div className="custom-container-2 pt-4">

                <h2>Event Date: {eventDate}</h2>
                <form onSubmit={(e) => updateDate(e)}>

                    <div className="form-group">
                        <label htmlFor="inputDate" className="custom-label">Please Change the Date to end the current event intake and start with Next Event Intakes</label>
                        <input type="date" className="form-control form-control-lg custom-form" id="inputDate" onChange={(e) => verifyDate(e)} />
                        <span className="text-danger">{dateError}</span>
                    </div>
                    <button type="submit" className="btn btn-primary btn-block custom-btn"> Update </button>
                </form>
            </div>

            )
            }
            {/* <div className="custom-container-3">

                {loadingClassDetails === false && (

                    classes.map((item, index) => {
                        return (<EventCards item={item} key={index} />);
                    })
                )}
            </div> */}
            

        </div>


    );
}

export default DashBoard;