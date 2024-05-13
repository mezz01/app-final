import React from 'react'

function Option(props) {
    const {handleOptionChange,answers,question,option} = props
    return (
        <div>
            <label>
                <input
                    className="input"
                    name={`question_${question.id}`}
                    type="radio"
                    value={option.id}
                    onChange={() => handleOptionChange(question.id, option.id)}
                    checked = {answers[question.id]=== option.id}
                />
                <span>{option.op}</span>
            </label>
        </div>
    )
}

export default Option