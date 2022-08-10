import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Answers from '../Answer';
const QuestionContainer = styled.div`
  width: 50%;
  margin-top: -15px;
`



const QuestionText = styled.h4`
   color :#293264;
   font-size: 1.3rem;
`
const AnswersContainer = styled.div`
 display :flex;
 justify-content: flex-start;
 width: 80%;
 margin-top: -13px;
`



export default function Question(props) {
    const [isOneSelected,setOneSelected] = useState(false);
    
    function getShuffledArr (arr){
        return [...arr].map( (_, i, arrCopy) => {
            var rand = i + ( Math.floor( Math.random() * (arrCopy.length - i) ) );
            [arrCopy[rand], arrCopy[i]] = [arrCopy[i], arrCopy[rand]]
            return arrCopy[i]
        })
    }

  var randomizedAnswers = props.answers;  
    function randomize(){
      randomizedAnswers = getShuffledArr(props.answers);
    }

useEffect(() => {
  randomize()
}, []) 

console.log(props.answers);

 

console.log(randomizedAnswers);
  return (
     <QuestionContainer>
         <QuestionText>{props.text} </QuestionText>
         <AnswersContainer>
              {  
                  randomizedAnswers.map((element,index) => {
                      return <Answers
                      style={{
                        backgroundColor :  props.isDisplay ?
                        (element === props.correctAnswer ? '#94d7a2' : '') : ''
                      }} 
                       answer ={element}
                       isOneSelected={isOneSelected}
                       setOneSelected={setOneSelected}
                       correctAnswer = {props.correctAnswer}
                       isDisplay= {props.isDisplay}
                       score ={props.score}
                       setScore= {props.setScore}
                       selectedAnswer ={props.selectedAnswer}
                       setSelectedAnswer={props.setSelectedAnswer}
                       />
                  }
                  )
              }

         </AnswersContainer>
         <hr style ={{ marginTop:'20px', backgroundColor:'#e5e7f4' , opacity: '0.7'}}/>
     </QuestionContainer>

  )
}
