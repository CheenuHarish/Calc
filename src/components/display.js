import React from 'react'
const display = (props) => {
    return (
        <div>
            <form className='text-info' >
        <h3 className="d-flex justifiy-items-sm-end">{props.a}</h3> 
        <h3 className="d-flex justifiy-items-sm-end">{props.b}</h3>
            </form>
        </div>
        
    )
}
export default display;