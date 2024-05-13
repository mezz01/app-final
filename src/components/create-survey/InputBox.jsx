import React, { useState } from 'react'
import { IoIosCloseCircle } from "react-icons/io";


function InputBox(props) {
    const {addOption,handleOption,options,qsIndex} = props
    return (
        <div className='w-full pt-3 bg-black flex gap-4 flex-col '>
            {options.map((e,i)=>{
                return (
                    <div key={i} className='card h-max  FlexBetween px-2 py-2'>
                        <input className='bg-transparent outline-none px-2 py-1 text-sm flex-1 caret-green-600' type="text" placeholder='Add Option'  onChange={e=>handleOption(qsIndex,i,e)}/>
                    </div>
                )
            })}
            <button type='button' className='w-64 h-10 bg-green-500 text-md rounded-md' onClick={()=>{addOption(qsIndex)}}>+ Add</button>
        </div>
    )
}

export default InputBox