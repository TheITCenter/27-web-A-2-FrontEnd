import React, {useState, useEffect} from 'react'

const Searcher = () => {
    
    //setttera los hooks useState
    const [users, setUsers] = useState ([]);
    const [search, setSearch] = useState ("");

    //función para traer los datos de las API
    const URL = 'https://two7-web-a-2-backend.onrender.com/games'

    const showData = async () => {
        const response = await fetch (URL);
        const data = await response.json()
        console.log(data);
    }

    showData();
    console.log("hola bichos");
    //método de filtrado

    //función de búsqueda
    
    //renderizar la vista del componente
    return ( 
        <div>Searcher</div>
    
    )
}

export default Searcher