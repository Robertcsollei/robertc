import * as React from 'react';

interface buttonControl{
    decrease: any,
    increase: any,
    height?: number
}

function Buttons(props : buttonControl) {
    return(
        <div className="navButtons" style={{height: props.height + '%'}}>
        
        <button  className="btn" onClick={props.decrease}>
            <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="1">
                    <path className="path" fillRule="evenodd" clipRule="evenodd" d="M20.5 39.2917C10.1217 39.2917 1.70834 30.8783 1.70834 20.5C1.70834 10.1216 10.1217 1.70833 20.5 1.70833C30.8784 1.70833 39.2917 10.1216 39.2917 20.5C39.2917 30.8783 30.8784 39.2917 20.5 39.2917ZM20.5 35.875C28.9914 35.875 35.875 28.9914 35.875 20.5C35.875 12.0086 28.9914 5.12499 20.5 5.12499C12.0086 5.12499 5.12501 12.0086 5.12501 20.5C5.12501 28.9914 12.0086 35.875 20.5 35.875ZM18.2913 12.4587L15.8754 14.8746L21.5007 20.5L15.8754 26.1254L18.2913 28.5413L26.3326 20.5L18.2913 12.4587Z" fill="white"/>
                </g>
            </svg>
            <span>Back</span>
              </button>
        <button className="btn" onClick={props.increase}> 
            <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="1">
                    <path className="path" fillRule="evenodd" clipRule="evenodd" d="M20.5 39.2917C10.1217 39.2917 1.70834 30.8783 1.70834 20.5C1.70834 10.1216 10.1217 1.70833 20.5 1.70833C30.8784 1.70833 39.2917 10.1216 39.2917 20.5C39.2917 30.8783 30.8784 39.2917 20.5 39.2917ZM20.5 35.875C28.9914 35.875 35.875 28.9914 35.875 20.5C35.875 12.0086 28.9914 5.12499 20.5 5.12499C12.0086 5.12499 5.12501 12.0086 5.12501 20.5C5.12501 28.9914 12.0086 35.875 20.5 35.875ZM18.2913 12.4587L15.8754 14.8746L21.5007 20.5L15.8754 26.1254L18.2913 28.5413L26.3326 20.5L18.2913 12.4587Z" fill="white"/>
                </g>
            </svg>
            <span>Next</span>
         </button>
    </div>
    )
}


export default Buttons;