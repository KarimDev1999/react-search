import React from 'react';
import styled from 'styled-components';

const StyledContent = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`
const StyledTitle = styled.h2`
    margin-bottom: 15px;
`

const StyledImg = styled.img`
    max-width: 250px;
    max-height: 250px;
    margin-bottom: 10px;
`


function Country({ country }) {
    return (
        <StyledContent>
            <StyledImg src={country.flag} alt="flag" />
            <StyledTitle>{country.name}</StyledTitle>
        </StyledContent>
    )
}

export default Country
