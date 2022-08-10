import React from 'react';
import Question from '../Question';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useEffect,useState } from 'react';
import { Loader } from '../../utils/Atoms';

const QuizContainer = styled.div`
     margin-top: 0;
     padding-top: 
     min-height:100vh;
     display:flex;
     flex-direction:column;
     align-items: center;
     justify-content:space-around;
     padding-left:70px;
     background-color:#f5f7fb;

  
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
const Again = styled.button`
background-color: #4d5b9e;
color: #fff;
border: none;
width:200px;
height:50px;
border-radius: 12px;font-size: 15px;
transition:0.7s ease;
&:hover{
    cursor:pointer;
    transform: scale(1.1);
    opacity:0.8
}
`
const LoaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  height: 100vh;
`
const Loading = styled.span`
  color: #5843E4;
  margin-top: 10px;
  font-weight:600
`
const Score = styled.div`
   width: 50%;
   display:flex;
   justify-content: space-around;
   align-items:center;
`


const Result = styled.span`
color: #5843E4;
margin-top: 10px;
font-weight:600;
`

const Still = styled.span`
color: #5843E4;
margin-top: 10px;
font-weight:600;
`


export default function Quiz() {
    const navigate = useNavigate()
    function restartGame(){
        navigate('/')
    }

  

    const [dataQuiz, setDataQuiz ] = useState([]);
    const [isDataLoading,setDataLoading] =useState(true);
    const [isDisplay, setisDisplay] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState([]);
    var score = 0;

   useEffect( () => {
         setDataLoading(true)
         fetch(`https://opentdb.com/api.php?amount=10`)
         .then((res) => res.json()
           .then((data) => {
               setDataQuiz(data.results)
               setDataLoading(false)}
               )
           .catch((error) => console.log(error) )
         )

   }, [])
   
   dataQuiz.map((element) => { 
        selectedAnswer.indexOf(element.correct_answer) >= 0? 
          score = score + 1 : score= score
   })
   const  resultat =  () => {
       if(selectedAnswer.length === dataQuiz.length){
         setisDisplay(true);
         return 
       }
    }


  return (
       <QuizContainer>
        
            {
               isDataLoading ?
                  (
                        <LoaderWrapper >
                       <Loader />
                       <Loading > Loading ...</Loading>
                  </LoaderWrapper>)
                   :
                  dataQuiz.map((element,index) => {
                      return <Question text={element.question}
                       answers ={[...element.incorrect_answers, element.correct_answer]} 
                       correctAnswer = {element.correct_answer}
                       isDisplay = {isDisplay}
                       selectedAnswer ={selectedAnswer}
                       setSelectedAnswer={setSelectedAnswer}
                       />

                  })}
             {
                isDisplay ?  (<Score>
                                <Result>{` You scored ${score}/${dataQuiz.length} correct anwers` }</Result>
                                <Again onClick={restartGame}>Play again</Again>
                             </Score>):
                             <>
                             <Button onClick = {resultat}> Check answers</Button>
                             <Still>{`You have ${dataQuiz.length - selectedAnswer.length} questions left !` }</Still>
                             </>
             }
            
       </QuizContainer> 
    
         
  )
}
