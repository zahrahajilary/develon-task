import React from 'react';
import {ButtonContainer} from "./Button.styled";

const LoadMoreBtn = ({  onClick, children }) => {
    return (
        <ButtonContainer onClick={()=>onClick()}
        >
            {children}
        </ButtonContainer>
    );
};

export default LoadMoreBtn;
