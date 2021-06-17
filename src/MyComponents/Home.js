import React from 'react'

import Section from '../MyComponents/Section';
import Features from '../MyComponents/FEATURES/Features';
import MealPhoto from './MEALS/MealPhoto';
import styled from 'styled-components'

const Home = () =>{
    const Block = [
        {
        icons:'images/fb.png',
        title:'UP TO 365 DAYS/YEAR',
        paragraph:'Never cook again! We really mean that. Our subscription plans include up to 365 days/year coverage.You can also choose to order more flexibly if thats your style.'
    },
    {
        icons:'',
        title:'READY IN 20 MINUTES',
        paragraph:'You are only twenty minutes away from your delicious and super healthy meals delivered right to your home. We work with the best chefs in each town to ensure that you are 100% happy.'
    },
    {
        icons:'',
        title:'100% ORGANIC',
        paragraph:'All our vegetables are fresh, organic and local. Animals are raised without added hormones or antibiotics. Good for your health, the environment, and it also tastes better!'
    },
    {
      icons:'',
      title:'ORDER ANYTHING',
      paragraph:'We dont limit your creativity, which means you can order whatever you feel like. You can also choose from our menu containing over 100 delicious meals. Its up to you!'
    }
    
    ]
    return (
        <>
        <Container>
                <Section
                titleUp=" Goodbye junk food."
                titleDown="hello super healthy meals."
                LeftButtonText ="I'm hungry"
                RightButtonText = "Show me more"
                >
                </Section>

                <Features items={Block}></Features>
                <MealPhoto></MealPhoto>
        </Container>
      </>
    )
}

export default Home

const Container = styled.div`
    margin-bottom:20%;
    @media(max-width:768px){
        margin-bottom:50%;
        }
`