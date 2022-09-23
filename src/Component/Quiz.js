import { useState } from "react"
import QuestionData from "../data/QuestionData"

const Quiz = ()=>{
    const [current,setCurent]= useState(0)
    const [selectChoice,setSelectChoice]=useState("")
    return(
        <div className="quiz">
            <h1>{QuestionData[current].question}</h1>
            <div className="choise">
                <button onClick={()=>setSelectChoice}>{QuestionData[current].A}</button>
                <button onClick={()=>setSelectChoice}>{QuestionData[current].B}</button>
                <button onClick={()=>setSelectChoice}>{QuestionData[current].C}</button>
                <button onClick={()=>setSelectChoice}>{QuestionData[current].D}</button>
            </div>
            <p>{`${current+1} / ${QuestionData.length}`}</p>
        </div>
    )
}
export default Quiz