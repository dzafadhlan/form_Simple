import React, { useState } from 'react'
import 'bulma/css/bulma.css'
import {useNavigate} from "react-router-dom"
import axios from 'axios'


const AddData = () => {
    const[name, setName] =useState("")
    const[email, setEmail] =useState("")
    const[alamat, setAlamat] =useState("")
    const[nohp, setNoHp] =useState("")
    const[gender, setGender] =useState("Male")
    const[status, setStatus] =useState("Aktif")
    const[univ, setUniv] =useState("")
    const navigate= useNavigate();
    const saveData = async(e) =>{
        e.preventDefault()
        try {
            await axios.post('http://localhost:5000/users',{
                alamat,
                email,
                gender,
                name,
                nohp,
                univ,
                status
            })
            navigate("/");
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div>
        <form onSubmit={saveData}>
        <div>
            <div>
                <label class='label'>Name</label>
            </div>
            <div>
                <input 
                className='input' 
                type='text' 
                placeholder='e.g Alexandra'
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
            </div>
        </div>
        <div>
            <div>
                <label class='label'>Email</label>
            </div>
            <div>
                <input 
                className='input' 
                type='email' 
                placeholder='e.g xxx@xxx.com'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            </div>
        </div>
        <div>
            <div>
                <label class='label'>Address</label>
            </div>
            <div>
                <input className='input'type='text' placeholder='e.g Jl.xxx Rtxx/Rwxx no.xxx kota xxxx' value={alamat} onChange={(e)=>setAlamat(e.target.value)}/>
            </div>
        </div>
        <div>
            <div>
                <label class='label'>No.Telp</label>
            </div>
            <div>
                <input className='input' type='tel'placeholder='62xxxxxxxx' value={nohp} onChange={(e) => setNoHp(e.target.value)}/>
            </div>
        </div>
        <div class="field is-horizontal">
            <div class="field-label is-normal">
                <label class="label">Gender</label>
            </div>
            <div class="field-body">
                <div class="field is-narrow">
                <div class="control">
                    <div class="select is-fullwidth">
                    <select value={gender} onChange={(e) => setGender(e.target.value)}>
                        <option>Male</option>
                        <option>Female</option>
                    </select>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <div class="field is-horizontal">
            <div class="field-label is-normal">
                <label class="label">Status</label>
            </div>
            <div class="field-body">
                <div class="field is-narrow">
                <div class="control">
                    <div class="select is-fullwidth">
                    <select value={status} onChange={(e) => setStatus(e.target.value)}>
                        <option>Aktif</option>
                        <option>Non-Aktif</option>
                    </select>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <div>
            <div>
                <label className='label'>Jurusan</label>
            </div>
            <div>
                <input className='input' type='text' placeholder='e.g Teknik xxxxx' value={univ} onChange={(e) => setUniv(e.target.value)}/>
            </div>
        </div>
        <div>
            <button className='button success' type='submit'>Submit</button>
        </div>
        </form>
    </div>
  )
}
export default AddData
