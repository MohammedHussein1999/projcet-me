import {  useState } from "react";
import { TEInput, TERipple } from "tw-elements-react";
import { Alert } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router";


export default function Log() {
  // const nav = useNavigate();
  const [user, setUser] = useState("");
  const [pas, setPas] = useState("");
  const [err, setErr] = useState("");
  const nav = useNavigate();

  async function handClick() {
    // e.preventDefault();

    

    await axios.post("http://127.0.0.1:8000/api/login",
      {
        name: user,
        password: pas,

      },
      // config
    ).then((res) => {
      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        nav('/home')
      }
      return setErr(res.data);;
    }).catch((err) => {
      setErr(err.message);
    });

  
    setUser("");
    setPas("");

  }

  return (
    <>
      <div className="page-logIn">
        {/* <Links /> */}
        <div className="section-logIn">
          {/* <img className="img-logo-cover" src="./Logo1.png" alt="" /> */}
          <form className="form-logIn" name="LOgIn"  onSubmit={handClick}>
            {err && <Alert sx={{ fontSize: '25px', width: 'max-content' }} severity="error">{err}</Alert>}
            <div className="userName-logIn">
              <TEInput
                // required
                minLength={6}
                type="text"
                name="name"
                // autoComplete="off"
                label="اسم المستخدم"
                value={user}
                onChange={(e) => {
                  setUser(e.target.value);
                  setErr("");
                }}
                size="lg"
                className="mb-6 bg-white"
              />
            </div>

            <TEInput

              type="password"
              autoComplete="off"
              minLength={6}
              // required
              label="كلمة المرورو"
              // onChange={(e) => console.log(e.target.value)}
              size="lg"
              value={pas}
              onChange={(e) => { setPas(e.target.value); setErr('') }}
              className="mb-6 bg-white"
            ></TEInput>

            <TERipple rippleColor="light" className="w-full">
              <button
                type="submit"
                // onClick={handClick}
                className="inline-block w-full rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              >
                تسجيل الدخول
              </button>
            </TERipple>
          </form>
        </div>
      </div>
    </>
  );
}
