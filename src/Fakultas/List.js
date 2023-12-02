import { Axios } from "axios";
import { error } from "console";
import React, { useEffect } from "react";
const List = () =>{
    const [fakultas, setFakultas] = useState([])

    useEffect(() => {
        Axios.get("https://apimi5a.vercel.app/fakultas")
        .then((res) => {
            setFakultas(res)
        }).catch((error) => {
            alert(error)
        })
    }, [])

    return(
        <>
            <h2>List</h2>
        </>
    )
}

export default List