import React from 'react';
const Input = ({ type, value, onClick }) => {
    return ( 
        <div className="form-group">
            <input 
            type={type} 
            value={value}
            onClick={onClick} 
            className="form-control"/>
        </div>
     );
}
 
export default Input;