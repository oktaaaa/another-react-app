import  Axios  from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () =>{

    const navigate = useNavigate()
    const [prodi, setProdi] = useState({
        nama: "",
    })

    const [fakultas, setFakultas] = useState([])

    const handleChange = (e, name) => {
        const value = e.target.value
        setProdi({...prodi, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        try {
            Axios.post("https://apimi5a.vercel.app/prodi", prodi)
            .then((res) => {
                alert('fakultas berhasil disimpan')
                navigate('/prodi')
            })
        } catch (error) {
            alert(error)
        }
    }

    
    React.useEffect (() => {
        Axios.get('https://apimi5a.vercel.app/fakultas')
        .then((res) => {
            const {data} = res
            setFakultas(data)
        })
        .catch((error) => {
            alert(error)
        })
    }, [])


    return(
        <>
            <h2>Halaman Create</h2>
            
            <form>

                <div className="form-group mb-2">
                    <label>Nama Prodi</label>
                    <input type={"text"} value={prodi.nama} onChange={(e) => handleChange(e, "nama")}
                    className="form-control" />
                </div>

                <div className="form-group mb-2">
                    <label>Fakultas</label>
                    <select value={prodi.fakultas} onChange={(e) => handleChange(e, "fakultas")} className="form-control">
                    <option>Pilih Fakultas</option>
                    {fakultas && fakultas.map((fakultas, index) => {
                        return (
                            <option value={fakultas._id}>{fakultas.nama}</option>
                        )
                    })}
                    </select>
                </div>
                
                <button onClick={handleSubmit} className="btn btn-primary">Simpan</button>
            </form>
        </>
    )
}

export default Create