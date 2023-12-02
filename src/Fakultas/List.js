import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const List = () =>{
    const [fakultas, setFakultas] = useState([])
    const navigate = useNavigate()
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
            <h2>Halaman List Fakultas</h2>

            <button className="btn btn-primary" onClick={() => navigate('/fakultas/create')}> +Tambah</button>
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