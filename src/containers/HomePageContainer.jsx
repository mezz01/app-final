
import React, { useReducer, useRef, useState, useEffect, useMemo} from 'react'
import CreateSurvey from '../components/create-survey/CreateSurvey'
import { initializeApp } from "firebase/app";
import { getFirestore ,addDoc, collection, getDocs} from "@firebase/firestore";
import { db } from '../data/data';
import HomePage from '../components/HomePage'
import { useParams } from 'react-router-dom';


function HomePageContainer() {
    const [search,setSearch] = useState('')
    const [data, setData] = useState([]);
    const surveyRef = collection(db, "surveys");

    useEffect(() => {
        const getSurvey = async () => {
        const data = await getDocs(surveyRef);
      setData(data.docs.map((doc) => ({...doc.data(),id: doc.id })));
    };
        getSurvey();
    },[])
    return (
        <HomePage surveys={data} setSearch={setSearch} search={search} />
    )
}

export default HomePageContainer