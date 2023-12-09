import Axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const List = () =>{
    const [fakultas, setFakultas] = useState([])
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        Axios.get("https://apimi5a.vercel.app/fakultas")
        .then((res) => {
            const {data} = res
            setFakultas(data)
            setLoading(true)
            // console.log(res);
        })
        .catch((error) => {
            alert(error)
        })
    }, [])

    const handleDelete = async(id, nama) =>{
        if(window.confirm(`Yakin mau hapus fakultas : ${nama} ?`)){
            try{
                await Axios.delete(`https://apimi5a.vercel.app/fakultas/${id}`)
                .then(window.location.reload())
            } catch(error){
                alert("Error", error)
            }
        }
        
    }

    return(
        <>
            <h2>Halaman List Fakultas</h2>

            <button className="btn btn-primary" onClick={() => navigate('/fakultas/create')}> +Tambah</button>
            {loading ? 
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Nama Fakultas</th>
                        <th>#</th>
                    </tr>
                    
                </thead>

                
               
               <tbody>
                {fakultas && fakultas.map(
                    (fakultas, index) => {
                        return (
                            <tr key={index}>
                                <td>{fakultas.nama}</td>
                                <td>
                                    <NavLink to = {`/fakultas/update/${fakultas._id}`} className = "btn btn-sm btn-warning">Ubah</NavLink> &nbsp;
                                    <button className="btn btn-sm btn-danger" onClick={() =>handleDelete(fakultas._id, fakultas.nama)}>Hapus</button>
                                </td>
                            </tr>
                        )
                    }
                )}
               </tbody>
            </table>

            :
            <div className="d-flex align-items-center">
                <strong>Loading...</strong>
                <div className="spinner-border ml-auto" role="status" aria-hidden="true"></div>
            </div>

            }
        </>
    )
}

export default List