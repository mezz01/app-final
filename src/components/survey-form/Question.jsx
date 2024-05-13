import React from 'react'
import Option from './Option'

function Question(props) {
    const {survey,answers,question,handleSubmit,handleBack,handleNext,isLastQuestion,currentQIndex,handleOptionChange} = props
    return (
        <div className='w-[40rem] m-auto'>
            <div className='w-[30rem] bg-zinc-900 rounded-md p-3 m-auto'>
                <h1 className='text-xl font-bold m-2'>{question.qs}</h1>
                <div className=''>
                    {question.options.map((option,i)=>{
                        return (
                            <div className='ml-5' key={i}><Option answers={answers} index={i} question={question} handleOptionChange={handleOptionChange} option={option} /></div>
                        )
                    })}
                </div>
            </div>
            <div className='w-[30rem] m-auto'>
                <h4 className='my-3'>Question {currentQIndex + 1} of {survey.questions.length}</h4>
                <div className='FlexBetween my-3'>
                    <div>{currentQIndex > 0 && <button onClick={handleBack} className="primaryZincBtn">Back</button> }</div>
                    <div>{isLastQuestion ? <button onClick={handleSubmit} className="primaryGreenBtn">Submit</button> : <button onClick={handleNext} className="primaryZincBtn">Next</button>}</div>
                </div>
            </div>
        </div>
    )
}

export default Question