import React from 'react';


const Card = ({imgUrl,index,title})=> {
    return(<div>
        <div style={{border: '1px solid white', padding: 16, margin: 16,flexGrow:1}} key={index}>
            <img src={`${imgUrl}`} alt={title} width={250} height={250}/>
        </div>
    </div>)
}
export default Card
