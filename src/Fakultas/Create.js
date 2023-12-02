import  Axios  from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Create = () =>{

    const navigate = useNavigate()
    const [fakultas, setFakultas] = useState({
        nama: ""
    })

    const handleChange = (e, name) => {
        const value = e.target.value
        setFakultas({...fakultas, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        try {
            Axios.post("https://apimi5a.vercel.app/fakultas", fakultas)
            .then((res) => {
                alert('fakultas berhasil disimpan')
                navigate('/fakultas')
            })
        } catch (error) {
            
        }
    }

    return(
        <>
            <h2>Halaman Create</h2>

            <form>
                <input type="text" value={fakultas.nama} onChange={(e) => handleChange(e, "nama")}
                className="form-control" placeholder="Input Nama Fakultas"/>
                <button onClick={handleSubmit} className="btn btn-primary">Simpan</button>
            </form>
        </>
    )
}

export default Create