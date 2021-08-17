import React from 'react'
const display = (props) => {
    return (
        <div>
            <form className='text-info' >
                <h3  >{props.a}</h3>
                <h3  >{props.b}</h3>
            </form>
        </div>
        
    )
}
export default display;