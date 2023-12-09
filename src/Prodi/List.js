import Axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink , useNavigate } from "react-router-dom";

const ProdiList = () =>{
    const [prodi, setProdi] = useState([])
    const navigate = useNavigate()
    const handleDelete = async (id, nama) => {
        if(window.confirm(`yakin mau hapus prodi: ${nama} ?`)){
            try{
                await Axios.delete(`https://apimi5a.vercel.app/prodi/${id}`)
                .then(window.location.reload())
            }catch(error){
                alert(error)
            }
        }
    }
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
            <button className="btn btn-primary" onClick={() => navigate('/prodi/create')}> +Tambah</button>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Nama Prodi</th>
                        <th>Nama Fakultas</th>
                        <th>#</th>
                    </tr>
                    
                </thead>

                
               
               <tbody>
                {prodi && prodi.map(
                    (prodi, index) => {
                        return (
                            <tr>
                                <td>{prodi.nama}</td>
                                <td>{prodi.fakultas? prodi.fakultas.nama : null}</td>
                                <td>
                                    <NavLink to = {`/prodi/update/${prodi._id}`} className = "btn btn-sm btn-warning">Ubah</NavLink> &nbsp;
                                    <button className="btn btn-sm btn-danger" onClick={() => handleDelete(prodi._id, prodi.nama)}>Hapus</button>
                                </td>
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