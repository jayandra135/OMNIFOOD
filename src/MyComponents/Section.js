import React from 'react'
import styled from 'styled-components';
import '../index.css';
import Fade from 'react-reveal/Fade';

const Section = ({titleUp, titleDown ,LeftButtonText,RightButtonText}) => {
    return ( 
        <Wrap>
            <TitleTextUp>
               {titleUp }
            </TitleTextUp>
            <TitleTextDown>
               {titleDown}
            </TitleTextDown>
            <Fade bottom>
                <ButtonGroup>
                    <LeftButton>
                        {LeftButtonText}
                    </LeftButton>
                    <RightButton className="rightbtntxt">
                        {RightButtonText}
                    </RightButton>
                </ButtonGroup>
            </Fade>
        </Wrap>
    )
}

export default Section;

const Wrap = styled.div`
    width:100%;
    height:100vh;
    background-position:center;
    background-repeat: no-repeat;
    background-size:cover;
    justify-content:center;
    display:flex;
    flex-direction:column;
    padding:35px;
    background-image:  linear-gradient(rgba(0, 0, 0,0.7),rgba(0, 0, 0,0.7)), url('images/hero.jpg');
    @media(max-width:768px){
        justify-content:center;
        align-items:center;
        width:100%;
        }
`

const TitleTextUp = styled.div`
    text-transform:uppercase;
    display:flex;
    font-size:50px;
    top:50%;
    left:50%;
    color:white;
    font-weight:300;
    @media(max-width:768px){
        font-size:30px;
        text-align:center;
       
        justify-content:center;
        align-items:center;
          }
    
`
const TitleTextDown = styled(TitleTextUp)`

`

const ButtonGroup = styled.div`
        display:flex;
        margin-left:50px;
        margin-top:20px;
      
        @media(max-width:768px){
           flex-direction:column;
           align-items:center;
            margin:10px;
         
           }
        
`
const LeftButton = styled.div`
        background-color:orange;
        color:white;
        padding:12px;
        cursor:pointer;
        font-size:20px;
        width:256px;
        text-align:center;
        border-radius:100px;
        
        opacity:0.9
        margin-right:20px;
        @media(max-width:768px){
            margin-bottom:20px;
            padding:10px;
            font-size:30px;
        }
    

`
const RightButton = styled(LeftButton)`
        border: 1px solid #e67e22;
        background: #e67e22;
        
        margin-left:20px;
        @media(max-width:768px){
            margin-right:20px;
            
              }
`

