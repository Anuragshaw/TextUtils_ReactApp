import React from "react";

function Alert(props) {
    const Capital =(word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    <div style={{position: 'absolute', width: '100vw'}}>
    {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
      <strong>{Capital(props.alert.type)}</strong>: {props.alert.msg}

    </div>}
    </div>
  );
}

export default Alert;
