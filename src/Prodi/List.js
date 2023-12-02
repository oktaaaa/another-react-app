import Axios from "axios";
import React, { useEffect, useState } from "react";

const ProdiList = () =>{
    const [prodi, setProdi] = useState([])

    useEffect(() => {
        Axios.get("https://apimi5a.vercel.app/prodi")
        .then((res) => {
            const {data} = res
            setProdi(data)
            // console.log(res);
        })
        .catch((error) => {
            alert(error)
        })
    }, [])

    return(
        <>
            <h2>Halama List Prodi</h2>
            
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Nama Prodi</th>
                        <th>Nama Fakultas</th>
                    </tr>
                    
                </thead>

                
               
               <tbody>
                {prodi && prodi.map(
                    (prodi, index) => {
                        return (
                            <tr>
                                <td>{prodi.nama}</td>
                                <td>{prodi.fakultas.nama}</td>
                            </tr>
                        )
                    }
                )}
               </tbody>
            </table>
        </>
    )
}

export default ProdiList