import React from 'react';


const Display1 = props => {

    return (
        <>
        <div>
        <h3>Strikes: {props.strike}</h3>
        <h3>Ball: {props.ball}</h3>
        <h3>Foul: {props.foul}</h3>
        <h3>Hit: {props.hit}</h3>

        </div>

        </>

    )

}

export default Display1;