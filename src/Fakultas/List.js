import Axios from "axios";
import React, { useEffect, useState } from "react";

const List = () =>{
    const [fakultas, setFakultas] = useState([])

    useEffect(() => {
        Axios.get("https://apimi5a.vercel.app/fakultas")
        .then((res) => {
            const {data} = res
            setFakultas(data)
            // console.log(res);
        })
        .catch((error) => {
            alert(error)
        })
    }, [])

    return(
        <>
            <h2>Halama List Fakultas</h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Nama Fakultas</th>
                    </tr>
                    
                </thead>

                
               
               <tbody>
                {fakultas && fakultas.map(
                    (fakultas, index) => {
                        return (
                            <tr>
                                <td>{fakultas.nama}</td>
                                <td>{fakultas.prodi}</td>
                            </tr>
                        )
                    }
                )}
               </tbody>
            </table>
        </>
    )
}

export default List