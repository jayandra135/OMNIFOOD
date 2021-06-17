import React from 'react'
import styled from 'styled-components';

const FeatureTitle = () => {
    return (
        <>
        <FeatureContent>
            <Titletext>
            get food fast &mdash; not fast food
            </Titletext>

            <ParaGraph>
                Hello, we’re Omnifood, your new premium food delivery service. We know you’re always busy. No time for cooking.
                So let us take care of that, we’re really good at it, we promise!
            </ParaGraph>
        </FeatureContent>
       
       </>
    )
}

export default FeatureTitle
const FeatureContent = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    @media(max-width:768px){
      
    }
`
const Titletext = styled.div`
    text-transform:uppercase;
    font-weight:300;
    word-spacing: 2px;
    letter-spacing: 1px;
    display:block;
    margin-top: 30px;
    font-size: 30px;
	margin-bottom: 30px;
    @media(max-width:768px){
        
       }
`


const ParaGraph = styled.div`
    
    margin-bottom: 50px;
    display:flex;
    word-spacing: 2px;
    font-size:20px;
    font-weight:300;
    margin-left:50px;
    margin-right:50px;
    @media(max-width:768px){
     margin:10px;
    }
   
`