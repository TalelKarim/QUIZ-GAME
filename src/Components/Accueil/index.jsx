import React from 'react'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const MainContainer = styled.div`
   height: 100vh;
   display:flex;
   justify-content:center;
   align-items:center;
   background-color:#f5f7fb;
   &:after {
    position: absolute;
    top:0px;
    content: "";
    right:0px;
    width:150px;
    height: 150px;
    background-color: #fffad1;
    border-radius: 50% 0 0 50%;
    transform : rotate(-10deg);
    tranform:translateX(100px)
  }

  &:before {
    position: absolute;
    bottom:0px;
    content: "";
    left:0px;
    width:150px;
    height: 150px;
    background-color: #deebf8;
    border-radius: 0 100% 100% 0;
    transform : rotate(-10deg);
  }
`

const AccueilContainer = styled.div`
   display:flex;
   flex-direction: column; 
   justify-content: flex-start;
   align-items: center;
   margin-top: -110px;
`

const Title = styled.h1`
    color :#2d3667;
    font-size: 3.4rem;
`

const Subtitle = styled.span`
  color :#8086a5;
  display:inline-block;
  margin-top: -38px;
  font-size: 1.4rem;
`

const Button = styled.button`
    background-color: #4d5b9e;
    color: #fff;
    border: none;
    width:230px;
    height:50px;
    border-radius: 12px;
    margin-top: 40px;
    font-size: 15px;
    transition:0.7s ease;
    &:hover{
        cursor:pointer;
        transform: scale(1.1);
        opacity:0.8
    }
`







export default function Accueil() {
    let navigate = useNavigate();
    function goToQuiz(){
         navigate('/quiz')
    }
  return (
     <MainContainer>
           <AccueilContainer>
                <Title>Quizzical</Title>
                <Subtitle>Let's check your knowledge !</Subtitle>
                <Button onClick={goToQuiz}>Start quiz</Button> 
           </AccueilContainer>
     </MainContainer>

  )
}
