import React from 'react'
import { Route, Routes as RouterRoutes } from 'react-router-dom'
import CreateSurveyContainer from '../containers/CreateSurveyContainer'
import HomePageContainer from '../containers/HomePageContainer'
import SurveyReportContainer from '../containers/SurveyReportContainer'
import SurveyFormContainer from '../containers/SurveyFormContainer'

function Routing() {
  return (
    <RouterRoutes>
      <Route path="/" element={<HomePageContainer />} />
      <Route path="/CreateSurvey" element={<CreateSurveyContainer/>}/>
      <Route path="/SurveyReport/:id" element={<SurveyReportContainer/>} />
      <Route path="/SurveyForm/:id" element={<SurveyFormContainer/>}/>
    </RouterRoutes>
  )
}

export default Routing