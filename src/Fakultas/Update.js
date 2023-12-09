import Axios  from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Update = () =>{
    const navigate = useNavigate()
    const {fakultasId} = useParams()
    const [fakultas, setFakultas] = useState({nama: ""})

    const handleChange = (e, name) => {
        const value = e.target.value
        setFakultas({...fakultas, [name]:value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await Axios.put(`https://apimi5a.vercel.app/fakultas/${fakultasId}`, fakultas)
                .then((res) => {
                    navigate("/fakultas")
                })
        } catch (error) {
            alert(error)
        }
    }
    useEffect(() => {
        const getFakultas = async () =>{
            try {
                await Axios.get(`https://apimi5a.vercel.app/fakultas/${fakultasId}`)
                .then((res) => {
                    const {data} = res
                    console.log(data);
                    setFakultas ({
                        nama: data?.nama
                    })
                })
            } catch (error) {
                alert(error)
            }
           
        }
        getFakultas()
    }, [fakultasId])

    
    return(
        <>
            <h2>Halaman Update Fakultas</h2>
            <form>
                <input type="text" value={fakultas.nama} onChange={(e) => handleChange(e, "nama")}
                className="form-control" placeholder="Input Nama Fakultas"/>
                <button className="btn btn-primary" onClick={handleSubmit}>Simpan</button>
                <button className="btn btn-light" onClick={() => navigate("/fakultas")}>Kembali</button>
            </form>
        </>
    )
}

export default Update