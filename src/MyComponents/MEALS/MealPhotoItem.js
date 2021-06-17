import React from 'react'
import styled from 'styled-components';
import './MealPhotoItem.css';

const MealPhotoItem = () => {
    return (
        <Section>
            <MealShowCase>
               
                <ListItem><img src="images/1.jpg"/></ListItem>
                <ListItem><img src="images/2.jpg" /></ListItem>
                <ListItem><img src="images/3.jpg" /></ListItem>
                <ListItem><img src="images/4.jpg" /></ListItem>
              
            </MealShowCase>
            <MealShowCase>
                <ListItem><img src="images/5.jpg" /></ListItem>
                <ListItem><img src="images/6.jpg" /></ListItem>
                <ListItem><img src="images/7.jpg" /></ListItem>
                <ListItem><img src="images/8.jpg" /></ListItem>
            </MealShowCase>

        </Section>

     
    )
}

export default MealPhotoItem;

const Section = styled.div`
   padding:0;
  
  
`
const MealShowCase = styled.div`
    width:100%;
   
    
`
const ListItem = styled.div`
    width:25%;
    display: block;
	float: left;

`