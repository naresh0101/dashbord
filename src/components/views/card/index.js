
import React from 'react';
import "./index.css"
const  cards = [
    {
        title:'Total Assessment sent',
        num:300,time:'(all time)'
    },
    {
        title:'Completed Assessments',
        num:150,time:'(all time)'
    },
    {
        title:'Average survey rating',
        num:4.5,time:'(all time)'
    },
    {
        title:'Incomplete Assessments',
        num:50,time:'(all time)'
    }
]

function AssessmentCard() {
  return (
        <div className="row">
        
    {
        cards.map((card,i)=>{
            return(
                <div class="col-xl-3 col-md-6 mb-4">
                <div class="custom-card h-100 py-2 p-3">
                    <h6>{card.title}</h6>
                    <h3>{card.num}</h3>
                    <p>{card.time}</p>
                </div>
              </div>
            )
        })
    }
    </div>
  )
}
export default AssessmentCard;