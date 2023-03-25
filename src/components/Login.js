import React, { useState, useContext } from "react";
import { TailSpin } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { query, where, getDocs } from "firebase/firestore";
import { usersRef } from "./firebase/firebase";
import bcrypt from "bcryptjs";
import { Appstate } from "../App";

const Login = () => {
  const navigate = useNavigate();
  const useAppstate = useContext(Appstate);
  const [form, setForm] = useState([
    {
      mobile: "",
      password: "",
    },
  ]);
  const [loading, setLoading] = useState(false);
  const login = async () => {
    setLoading(true);
    try {
      const quer = query(usersRef, where("mobile", "==", form.mobile));
      const querySnapshot = await getDocs(quer);
      querySnapshot.forEach((doc) => {
        const _data = doc.data();
        const isUser = bcrypt.compareSync(form.password, _data.password);
        if (isUser) {
          useAppstate.setLogin(true);
          useAppstate.setUserName(_data.name);
          navigate("/")

          swal({
            title: "Logged In",
            icon: "success",
            buttons: false,
            timer: 3000,
          });
          
        }else{
          swal({
            title:"Invalid credentials",
            icon:"error",
            buttons:false,
            timer:3000

          })
        }
      });
    } catch (error) {
      swal({
        text: error.message,
        icon: "error",
        buttons: false,
        timer: 3000,
      });
    }
  };
  return (
    <div className="flex flex-col mt-4 items-center">
      <div className="w-full flex mt-4 flex-col items-center">
        <h1 className="text-lg font-bold">Login</h1>
        <div className="p-2 w-full md:w-1/3">
          <div className="relative">
            <label htmlFor="name" className="leading-7 text-sm text-gray-300">
              Mobile no
            </label>
            <input
              type={"number"}
              value={form.mobile}
              onChange={(e) => setForm({ ...form, mobile: e.target.value })}
              id="name"
              name="name"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="p-2 w-full md:w-1/3">
          <div className="relative">
            <label htmlFor="email" className="leading-7 text-sm text-gray-300">
              Password
            </label>
            <input
              type="password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              id="email"
              name="email"
              className="w-full bg-white  rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="p-2 w-full">
          <button
            onClick={login}
            className="flex mx-auto text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-700 rounded text-lg"
          >
            {loading ? <TailSpin height={25} color="white" /> : "Add"}
          </button>
        </div>
        <div>
          Do not have account?
          <Link to={"/signup"}>
            <span className="text-blue-500">Sign up</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
