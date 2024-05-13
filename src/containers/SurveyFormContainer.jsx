import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import SurveyForm from '../components/survey-form/SurveyForm'
import {demo} from '../data/data'

function SurveyFormContainer() {
  const {id} = useParams()
  const [surveys,setSurveys] = useState(demo)
  const [survey,setSurvey] = useState(surveys.find(survey => survey.id === Number(id)))
  //
  const [showSurvey, setShowSurvey] = useState(true);
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const isLastQuestion = currentQIndex === survey.questions.length - 1;
  const [answers, setAnswers] = useState({});
  //
  const handleNext = () => {
    setCurrentQIndex(prevIndex => prevIndex + 1);
  };
  const handleBack = () => {
    if (currentQIndex > 0) {
      setCurrentQIndex(prevIndex => prevIndex - 1);
    }
  };
  //
  const handleOptionChange = (questionId, optionId) => {
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      [questionId]: optionId
    }));
    setSurvey(prev=>{
      const updatedQuestion = prev.questions.map((question)=>{
        if(question.id === questionId){
          const updatedOptions = question.options.map((option)=>{
            if(option.id === optionId){
              return {...option, count : option.count + 1}
            }else return {...option}
          })
          return {...question, options : updatedOptions}
        }else return question
      })
      return {...prev,questions : updatedQuestion}
    })
  };
  const handleSubmit = () => {
    
  };
  return (
    <SurveyForm showSurvey={showSurvey} answers={answers} handleSubmit={handleSubmit} handleNext={handleNext} handleBack={handleBack} isLastQuestion={isLastQuestion} currentQIndex={currentQIndex} setShowSurvey={setShowSurvey} survey={survey} handleOptionChange={handleOptionChange} />
  )
}

export default SurveyFormContainer