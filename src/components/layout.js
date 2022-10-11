import React, { useState } from "react";
import "./layout.css";
import JSONDATA from "../Quiz_Data.json";

export default function Layout() {
  const [count,setCount]=useState(0);
  const [showResult,setShowResult]=useState(false);
  const [result,setResult]=useState(0);

  let goToNextQues=(isCorrected)=>{
    if(count===JSONDATA.length-1){
      setShowResult(true);
    }
    if(isCorrected){setResult(result+1)}
    //next question
    setCount(count+1);
  }
  return (<>
    {(showResult)?
    <div class="jumbotron-container bg-dark text-white ">
    <div className="question-container">
    <div><p className="result">You Scored {result} out of {JSONDATA.length}</p></div>
    </div>
    </div> 
    :<div class="jumbotron-container bg-dark text-white ">
        <div className="question-container d-flex">
          <div>
            <div className="question-count">Q: {count+1} out of {JSONDATA.length}</div>
            <div className="question-text ml-3">{JSONDATA[count]["question-text"]}</div>
          </div>
          <div className="question-options d-flex">
            {JSONDATA[count].options.map((options)=>{
              return <button onClick={()=>{goToNextQues(options.isCorrected)}} className=" btn-lg">{options.answerText}</button>
            })}
          </div>
        </div>
    
    </div>}

    </>
  );
}
