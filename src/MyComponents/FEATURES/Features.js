import React from 'react'
import styled from 'styled-components';
import FeatureTitle from './FeatureTitle';
import FeatureItem from './FeatureItem';

const Features = (props)=> {

    return (
        
            <Container>
                <FeatureTitle> </FeatureTitle>
                <FeatureRow>
                        <FeatureItem
                        icon={props.items[0].icons}
                        title={props.items[0].title}
                        paragraph={props.items[0].paragraph}
                    ></FeatureItem>
                    <FeatureItem
                        icon={props.items[1].icons}
                        title={props.items[1].title}
                        paragraph={props.items[1].paragraph}
                    ></FeatureItem>
                    <FeatureItem
                        icon={props.items[2].icons}
                        title={props.items[2].title}
                        paragraph={props.items[2].paragraph}
                    ></FeatureItem>
                    <FeatureItem
                    icon={props.items[3].icons}
                    title={props.items[3].title}
                    paragraph={props.items[3].paragraph}
                ></FeatureItem>
                </FeatureRow>
               
            </Container>
            
        
    )
}

export default Features

const Container = styled.div`
    width:100%;
    padding-right:20px;
    padding-left:20px;
    margin-right:auto;
    margin-left:auto;   
    margin-bottom:80px;
    margin-top:80px;
`
const FeatureRow = styled.div`
    display:flex;
    flex-direction:row;
   
    @media(max-width:768px){
        display:flex;
        flex-direction:column;
        min-width:100%;
    }

`