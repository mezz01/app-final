import React from 'react'
import Question from './Question'

function SurveyForm(props) {
  const {survey,answers,handleBack,handleSubmit,handleNext,isLastQuestion,currentQIndex,showSurvey,setShowSurvey,handleOptionChange} = props
  
  return (
    <div className=''>
      <h1 className='h-24 text-7xl font-bold my-4 text-center gradient-title'>Survey Form</h1>
      {showSurvey ? <div className='flex justify-center gap-12 px-4 py-2 my-5 '>
        <div className='w-1/2'>
          <h1 className='text-2xl font-bold'>{survey.title}</h1>
          <div className='pt-4'>{survey.description}</div>
          <div className='w-max m-auto'><button className='mt-3 primaryGreenBtn animationBtn' onClick={() => setShowSurvey(false)}>Start</button></div>
        </div>
        <div className='w-96 h-64'><img src={survey.img} alt={survey.title} /></div>
      </div> : <div className=''>
      <div className='w-max mx-auto my-4'><button className= 'primaryEmeraldBtn' onClick={() => setShowSurvey(true)}>Back</button></div>
      <div>
      <Question handleSubmit={handleSubmit}
            handleNext={handleNext}
            handleBack={handleBack}
            answers={answers}
            isLastQuestion={isLastQuestion}
            handleOptionChange={handleOptionChange}
            question={survey.questions[currentQIndex]}
            currentQIndex={currentQIndex}
            survey={survey}
          />
      </div>
      </div>}
    </div>
  )
}

export default SurveyForm