import React from 'react'
import InputBox from './InputBox'
import { IoIosCloseCircle } from "react-icons/io";

function QuestionBox(props) {
  const {question,handleOption,qsIndex,handleQuestion,addOption,removeOption} = props
  return (
    <div className='w-full  my-3 border rounded-md'>
        <div className='w-[35rem] m-auto py-3'><input type="text" onChange={(e)=>{handleQuestion(question.id,e)}} className='w-full h-10 text-black outline-none px-2 py-1 text-sm rounded-md' placeholder='Enter Your Question'/>
        <InputBox handleOption={handleOption} options={question.options} qsIndex={qsIndex} addOption={addOption} />
        </div>
    </div>
  )
}

export default QuestionBox