import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'

const Answer = styled.button`
  display:flex;
  min-width: auto;
  align-items: center;
  justify-content:center;
  white-space: nowrap;
  text-overflow: ellipsis;
  flex-wrap: no-wrap;
  padding: 8px 5px;
  color:   ${(props) => 
    props.itItDisplay ?
    (props.isItCorrect ?  "#3b4371" : '#8389a7' ) :  "#3b4371"
    
  };
  
  background-color: ${ (props) => 
      props.isitSelected ? 
     (props.itItDisplay ? (props.isItCorrect ? '#94d7a2' : '#f7d9db')  : ('#d6dbf5'))  : 'transparent' 
  
  };



  font-weight: ${(props) => 
    props.isitSelected ? '700' : '600' 
  };
 
  margin-right: 25px;
  border-radius: 10px;
  min-height: auto;
  border: none;
  height: 33px;

  
  &: hover{
      cursor:pointer;
  }
  outline: ${(props) => 
    props.isitSelected ? 'none': '2px solid #7e88b9'

 }
`


export default function Answers(props) {
    const [isSelected, setSelected] = useState(false);



    function onlyOneChoice(){
        if(!isSelected && props.isOneSelected){
            return true
        }
        return false
    }
    function isOneSelected(){
        props.setOneSelected( prevSelected => {
            return !prevSelected
        })
    }  
     
    function addToSelected(){
        if (!isSelected){
           props.setSelectedAnswer(prevSelected => [...prevSelected,
            props.answer])
        }
        else{
          const newTab = props.selectedAnswer.filter(element => element !== props.answer);
          props.setSelectedAnswer(newTab)

        }
    }
    function toggleSelection () {
        setSelected( prevIsSelected =>{
            return !prevIsSelected
        })
    isOneSelected()
    addToSelected()
    }

  return (
      <Answer
      disabled= {onlyOneChoice()}
      onClick={() => {
          toggleSelection()
           }} 
      style={props.style}     
      isitSelected ={isSelected}
      isItCorrect = {props.answer === props.correctAnswer}
      itItDisplay = {props.isDisplay}
      score ={props.score}
      setScore= {props.setScore}
      selectedAnswer ={props.selectedAnswer}
      setSelectedAnswer={props.setSelectedAnswer}
      >
     {props.answer}
          </Answer>
  )
}
