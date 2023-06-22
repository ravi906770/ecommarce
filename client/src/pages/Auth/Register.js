import React, { useState } from 'react'
import Layout from '../../componants/layout/Layout'
import toast from "react-hot-toast";
import axios from "axios"
import { useNavigate } from "react-router-dom"
import "../../styles/AuthStyles.css"

const Register = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [answer, setAnswer] = useState("");



    const Navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/register`, { name, email, password, phone, address ,answer})
            if (res && res.data.success) {
                toast.success(res && res.data.message)
                Navigate("/login")
            }
            else {
                toast.error(res && res.data.message)
            }
        } catch (error) {
            console.log(error);
            toast.error("Something Went Wrong!")
        }
    }



    return (


        <Layout title={"Register - Ecommarce App"}>

            <div className="register form-container">
                <h1>Register Now</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">

                        <input type="text" value={name} required onChange={(e) => setName(e.target.value)} className="form-control" id="exampleInputEmail1" placeholder='Enter Your Name' />
                    </div>
                    <div className="mb-3">

                        <input type="email" value={email} required onChange={(e) => setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" placeholder='Enter Your Email' />
                    </div>
                    <div className="mb-3">

                        <input type="password" value={password} required onChange={(e) => setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder='Enter Your Password' />
                    </div>
                    <div className="mb-3">

                        <input type="text" value={phone} required onChange={(e) => setPhone(e.target.value)} className="form-control" id="exampleInputEmail1" placeholder='Enter Your Phone' />
                    </div>
                    <div className="mb-3">

                        <input type="text" value={address} required onChange={(e) => setAddress(e.target.value)} className="form-control" id="exampleInputEmail1" placeholder='Enter Your Address' />
                    </div>
                    <div className="mb-3">

                        <input type="text" value={answer} required onChange={(e) => setAnswer(e.target.value)} className="form-control" id="exampleInputEmail1" placeholder='Enter Your Best Friend Name..' />
                    </div>
                    <button type="submit" className="btn btn-primary">Register</button>
                </form>
            </div>
        </Layout>

    )
}

export default Register
