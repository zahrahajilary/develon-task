import React from 'react';

const MenuItem =({item,clicked})=> {
    return(
        <div style={{color:'black'}} onClick={clicked}>{item.name}</div>
    )
}
export default MenuItem
