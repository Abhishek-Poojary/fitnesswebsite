import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getAllClasses, getEventDate, updateEventDate } from "../../../actions/UserAction";
import { Table } from 'react-bootstrap'
import { useSelector } from "react-redux";
import ClassCard from "./ClassCard";



const DashBoard = () => {

    const dispatch = useDispatch();

    const { loading, classes } = useSelector(state => state.classes);
    const {loading:updateDetailsLoading, message}= useSelector(state=>state.updateAdmin);
    useEffect(() => {
        dispatch(getAllClasses())
        //   dispatch(getAllClasses())
    }, [message])


    const updateDate = (name,date) => {
    
        console.log(name,date)
        dispatch(updateEventDate(name,date));

    }

    return (
        <div className="container-fluid">

                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>Class</th>
                            <th>Intake</th>
                            <th>Current Seats taken</th>
                            <th>Current Date Value</th>
                            <th>Update</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading === false && (
                            classes.map((item, index) => {
                                return (

                                    <ClassCard item={item} key={index} updateDate={updateDate}/>);
                            })
                        )}
                    </tbody>
     
                </Table>
               {updateDetailsLoading=== false && (<span className="text-success">{message}</span>)} 
        </div>





    );
}

export default DashBoard;