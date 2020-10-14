import React from 'react'
import './ResearchPage.css'
function ResearchPage() {
    return (
        <div className="research" id ="rnd">
            <div className="rnd__heading">
                <h1 >Research and Skill Development</h1>
            </div>
           
                <p style={{fontSize:"20px" ,paddingLeft:"20px"}}>Key consulting, research and skill development areas:</p>
           
            <div className="rnd__points">
            <ul className="rnd__inf0">
                <li>RF Tx/Rx level planning, RF front-end design for 5G and IoT products

                </li>
                <li>Hardware lab setup for wireless system validation</li>
             <li> Signal processing in baseband and radio engineering</li>


                <li>Software Defined Radio (SDR)/ FPGA based designs for Industrial applications</li>
                <li>
                    Antenna design and customization for consumer, industrial and defense
                    applications</li>
            </ul>
            </div>
        

        </div>
    )
}

export default ResearchPage
