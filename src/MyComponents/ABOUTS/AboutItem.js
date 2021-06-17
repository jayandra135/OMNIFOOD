import React from 'react'
import styled from 'styled-components';
const AboutItem = () =>{
    return (
       <Container>
            <Wrap>
               <AboutTitle>
                    About Us
               </AboutTitle>
               <AboutPara>
               When you have a great story about how your product or service was built to change lives, share it. The "About Us" page is a great place for it to live, too. Good stories humanize your brand, providing context and meaning for your product. What’s more, good stories are sticky -- which means people are more likely to connect with them and pass them on.

               Yellow Leaf Hammocks tells users about its product by describing how the hammocks empower artisan weavers and their families. The company breaks down different pieces of the story into sections that combine words and easily digestible graphics, painting a picture instead of big chunks of text. They're clear about why they're different: "Not a Charity," the page reads. And then: "This is the basis for a brighter future, built on a hand up, not a handout."
               </AboutPara>
            </Wrap>
       </Container>
    )
}

export default AboutItem

const Container = styled.div`
    padding-left:50px;
    padding-right:50px;
    margin-top:50px;
    margin-bottom:20%;
    height:auto;
     @media(max-width:768px){
        margin-bottom:55%;
         }
`
const Wrap = styled.div`
    border: 1px solid rgb(214, 212, 212);
    padding: 20px;
    position: relative;
    display: flex;
    justify-content:center;
    align-items:center;
   
    flex-direction:column;
`

const AboutTitle = styled.div`
        font-size:20px;
        color:blue;
`
const AboutPara = styled.div`
    font-size:20px;
    line-height:40px;
    word-spacing: 7px;
   
`
