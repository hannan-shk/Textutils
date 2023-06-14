import React from 'react';

function Alert(props) {

  const capitalize = (word) =>{
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }

  return (
    <div style={{height: '60px'}}>
{  props.alert2 && <div className={`alert alert-${props.alert2.type2} alert-dismissible fade show my-2`} role="alert">
  <strong>{capitalize(props.alert2.type2)}</strong>:{props.alert2.msg}
  </div>}
</div>
  )
}

export default Alert;
