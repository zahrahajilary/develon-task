import React from 'react';
import {useParams} from "react-router";
import Content from "../pages/content/content";
import Menu from "../components/menu/Menu";

const Container = ()=> {
    const {categoryId} = useParams();
    return(
        <div style={{display:'flex',flexDirection:"row"}}>
                <Menu/>
                    <div style={{marginLeft:'240px'}}>
                        {categoryId ?
                            <Content id={categoryId}/> :
                            <h1>Hello !! Select a Category</h1>
                        }
                    </div>
        </div>
    );


}
export default Container;
