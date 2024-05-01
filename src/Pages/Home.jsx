import React, { useState } from "react";
import CardGame  from "../Components/CardGame"
import '../Styles/Home.css'



function Home(){
    const [test, setTest] = useState([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]);
    return(
        <>
            <div className="container-center">
                <div className="container row mt-5">
                {
                        test.map((item) =>{ 
                            return(
                                <div className="col-3 mt-5 mr-2">
                                    <CardGame />
                                </div>
                            )
                        })
                    }  
                </div>
            </div>
        </>
    )
}

export default Home; 