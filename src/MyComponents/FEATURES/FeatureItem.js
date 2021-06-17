import React from 'react'
import styled from 'styled-components';
import Tada from 'react-reveal/Tada';

const FeatureItem = (props) => {
    return (
        <Container>
        <Tada>
        <CardBlock >
            <Icon>
            {props.icons}
            </Icon>
            <Title>
               {props.title}
            </Title>
            <Para>
                {props.paragraph}
            </Para>
   
        </CardBlock>
        </Tada>
        </Container>
       
    )
}

export default FeatureItem
const Container = styled.div`
   
`

const CardBlock = styled.div`
    display:flex;
    flex-direction:column;
    border: 1px solid rgb(214, 212, 212);
    padding: 16px;
    position: relative;
    margin-right:15px;
    margin-left:15px;
    @media(max-width:768px){
        margin-bottom:10px;
        }
  
    

`
const Icon = styled.div`
    font-size:20px;
    font-weight:300;
`
const Title = styled.div`
    font-size:20px;
    margin-top:10px;
    margin-bottom:10px;
    font-weight:300;
    font-weight:300;
`
    
const Para = styled.div`

    line-height: 145%;
    font-weight:300;

`