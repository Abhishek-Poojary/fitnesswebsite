import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateEventDate } from "../../../actions/UserAction";



const ClassCard = ({ item, updateDate }) => {


    const [date, SetDate] = useState( );

    const [dateError, setDateError] = useState();

    const verifyDate = (event) => {
        let date = new Date();

        let value = event.target.value;
        let selected = new Date(value);
        if (selected < date) {
            setDateError("Date cannot be in past");

        } else {
            setDateError("");
            SetDate(new Date(selected).toISOString().split('T')[0]);
        }

    }




    return (
        <tr>

            <td>{item.name}</td>
            <td>{item.intake}</td>
            <td>{item.taken}</td>
            <td> <input type="date" className="form-control form-control-lg custom-form" value={ date? new Date(date).toISOString().split('T')[0]:new Date(item.date).toISOString().split('T')[0]} id="inputDate" onChange={(e) => verifyDate(e)} /></td>
            <td><button type="submit" className="btn btn-primary custom-btn" onClick={() => updateDate(item.name, date)}> Update </button></td>
            <td> <span className="text-danger">{dateError}</span></td>

        </tr>
    );
}

export default ClassCard;