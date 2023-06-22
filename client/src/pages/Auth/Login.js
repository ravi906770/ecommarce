import React , {useState} from 'react'
import Layout from '../../componants/layout/Layout'
import toast from "react-hot-toast"; 
import axios from "axios"
import {useNavigate , useLocation} from "react-router-dom"
import "../../styles/AuthStyles.css"
import { useAuth } from '../../context/auth';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [auth ,setAuth] = useAuth();

    const Navigate = useNavigate();
    const Location = useLocation();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/login`, {
            email,
            password,
          });
          if (res && res.data.success) {
            toast.success(res.data && res.data.message);
            setAuth({
              ...auth,
              user: res.data.user,
              token: res.data.token,
            });
            localStorage.setItem("auth", JSON.stringify(res.data));
            Navigate(Location.state  || "/");
          } else {
            toast.error(res.data.message);
          }
        } catch (error) {
          console.log(error);
          toast.error("Something went wrong");
        }
      };


  return (
    <div>
      <Layout title="Login - Ecommer App">
      <div className="form-container " style={{ minHeight: "70vh" }}>
        <form onSubmit={handleSubmit}>
          <h4 className="title">LOGIN FORM</h4>

          <div className="mb-3">
            <input
              type="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Email "
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Your Password"
              required
            />
          </div>
          <div className="mb-3">
            <button
              type="button"
              className="btn forgot-btn"
              onClick={() => {
                Navigate("/forgot-password");
              }}
            >
              Forgot Password
            </button>
          </div>

          <button type="submit" className="btn btn-primary">
            LOGIN
          </button>
        </form>
      </div>
    </Layout>
    </div>
  )
}

export default Login