import React from 'react'
import styled from 'styled-components'

const ContactItem = () =>{
    return (
        
       <Container>

            <ContactTitle>
                WE'RE HAPPY TO HEAR FROM YOU
            </ContactTitle>
            <ContactForm>
            
                <form>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    
                    </div>
                
                    <div className="form-group">
                        <label >Phone Number</label>
                        <input type="number" className="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div className="form-group">
                        <label >Email</label>
                        <input type="email" className="form-control" id="exampleInputPassword1"/>
                    </div>
                
                
                    <button type="submit" className="btn btn-primary">Submit</button>
                
                </form>
            </ContactForm>
       </Container>
      
    )
}

export default ContactItem

const Container = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    margin-top:50px;
    margin-bottom:20%;
     @media(max-width:768px){
        margin-bottom:55%;
         }
    
`
const ContactTitle = styled.div`
    font-size:35px;
    font-weight:300;
    margin:10px;
    @media(max-width:768px){
       font-size:20px;
    }
`
const ContactForm = styled.div`
    border: 1px solid rgb(214, 212, 212);
    padding: 50px;
    width:50%;
    background-color:#bfdf9f;
    @media(max-width:768px){
        width:70%;
    }
`
