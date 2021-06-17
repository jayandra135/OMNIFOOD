import React from 'react'
import styled from 'styled-components';
import MealPhotoItem from './MealPhotoItem';
const MealPhoto = () => {
    return (
        <MealRow>
            <MealPhotoItem></MealPhotoItem>
        </MealRow>
      
    )
}

export default MealPhoto

const MealRow = styled.div`
    display:flex;
    flex-direction:row;
    margin-bottom:80px;
  
`