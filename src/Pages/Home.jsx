import React, { useEffect, useState } from "react";
import CardGame  from "../Components/CardGame"
import '../Styles/Home.css'



function Home(){
       
        const [productos, setProductos] = useState([])
        useEffect ( () =>{
            fetch('https://two7-web-a-2-backend.onrender.com/games')
            .then(response => response.json())
            .then(data => setProductos(data))
        }, []);
    
    return(
        <>
            <div className="container-center">
                <div className="container row mt-5">
                {
                        productos.map((item, index) =>{ 
                            return(
                                <div className="col-3 mt-5 mr-2" key={index}>
                                    <CardGame image={item.image} title={item.name_game} description={item.reviews} />
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