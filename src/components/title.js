import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const title = (props) => {

    return (
        <div className="page-header d-flex justify-content-sm-center"> 
        <h1> {props.value} <small>{props.addres}</small> </h1>
        </div>
    )
}
export default title;