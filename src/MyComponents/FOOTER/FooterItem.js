import React from 'react'
import styled from 'styled-components'
import   './FooterItem.css'
const FooterItem = () => {
    return (
        
        <Wrap>
                <LeftList>
                    <ul>
                        <li>About</li>
                        <li>Blog</li>
                        <li>Press</li>
                        <li>iOS app</li>
                        <li>Android app</li>
                    </ul>
                </LeftList>
                <RightList>
                    <ul>
                        <li><ion-icon name="logo-facebook"></ion-icon></li>
                        <li><ion-icon name="logo-twitter"></ion-icon></li>
                        <li><ion-icon name="logo-google"></ion-icon></li>
                        <li><ion-icon name="logo-instagram"></ion-icon></li>
                    </ul>
                </RightList>
               
        </Wrap>
     
        
    )
}

export default FooterItem

const Wrap = styled.div`
    background-color: #333;
    padding: 30px;
    font-size: 20px; 
    color:#fff;
    position:fixed;
    bottom:0;
    width:100%;
    
    @media(max-width:768px){
        display:flex;
        flex-direction:column;
        padding-bottom:30px;
        min-width:100%;
    }
   
`

const LeftList = styled.div`
    float:left
   
`
const RightList = styled(LeftList)`
    float:right;
    font-size:30px;
`