
import QuestionBox from './QuestionBox';
import AddQuestion from './AddQuestion';

function CreateSurvey(props) {
  const {handleImg,questionBox,handleOption,handleQuestion,addOption,handleSubmit,addQuestionBox,title,description} = props
  return (
    <div className='w-[40rem] mx-auto'>
      <h1 className='h-24 font-bold text-7xl my-4 text-center gradient-title'>Create Survey</h1>
      <div className="container min-vh-100 d-flex justify-content-center align-items-center ">
        <form onSubmit={handleSubmit}>
          <div className="row row-l">
              <input name='title' className="form-control mb-4 " placeholder="Input box" type="text" ref={title} />
              <textarea name ='description' className="form-control mb-2" placeholder="Textarea" rows="4" ref={description}></textarea>
              <div className='w-max mx-auto my-3 '>
                <input type="file"  name="file" id="file" onChange={handleImg} className="inputfile" />
                <label htmlFor="file">Choose a file</label>
              </div>
              {questionBox.map((e,index)=>{
                return(
                  <div key={index}><QuestionBox handleOption={handleOption} question={e} qsIndex={index} handleQuestion={handleQuestion}  addOption={addOption} /></div>
                )
              })}
              <AddQuestion addQuestionBox={addQuestionBox}/>
          </div>
          <button type='submit' className='w-full h-10 mb-5 py-1 bg-green-500 text-xl rounded-md'>Add Survey</button>
        </form>
      </div>
      
    </div>
  )
}

export default CreateSurvey