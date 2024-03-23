import { TEInput, TERipple } from "tw-elements-react";
import {  useState } from "react";
import { Alert, MenuItem, Select } from "@mui/material";

import axios from "axios";
import { useNavigate } from "react-router";

// import token from "./token";

export default function SingUp() {
  const [user, setUser] = useState("");
  const [pas, setPas] = useState("");
  const [em, setEm] = useState("");
  const [select, setSelect] = useState("");
  const [err, setErr] = useState("");
  const nav = useNavigate()
  async function handClick(e) {
    e.preventDefault();





    await axios.post("http://127.0.0.1:8000/api/data",
      {
        name: user,
        number: Number(em),
        time: String(select),
        password: pas,
      },

    ).then((res) => {
      console.log(res)

      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        nav('/home')
      }

      setErr(res.data);
    }).catch((err) => {
      console.log(err);
      setErr(err.message);
    });

    setUser("");
    setPas("");
    setEm("");
    setSelect("");
  }

 /*  useEffect(() => {
    if (localStorage.getItem('token')) {

      window.location = "./home";
    }

  }, [])
 */
  return (
    <>
      <div>
        {/* <Links /> */}
        <form
          action=""
          className="form-singup"
          method="post"
          onSubmit={handClick}
        >
          {/* <img className="img-logo-cover" src="./Logo1.png" alt="" /> */}
          {err && <Alert sx={{ fontSize: '25px', }} severity="error">{err}</Alert>}

          <TEInput
            minLength={6}
            max={5}
            // required
            name="name"
            type="text"
            label="اسم المستخدم"
            // autoComplete="off"
            size="lg"
            value={user}
            onChange={(e) => { setUser(e.target.value); setErr("") }}
            className="mb-6 bg-white  "
          />

          <TEInput
            minLength={6}
            name="password"

            type="password"
            label=" كلمة المرور"
            value={pas}
            onChange={(e) => setPas(e.target.value)}

            size="lg"
            className="mb-6 bg-white "
          />
          <TEInput


            required
            type="number"

            name="number"
            label="رقم الواتس اب"
            value={em}
            onChange={(e) => setEm(e.target.value)}
            // autoComplete="off"
            size="lg"
            className="mb-6 bg-white"
          />

          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={select}
            name="select"
            required
            label="اختار الفرقة"
            onChange={(e) => {
              setSelect(e.target.value);
            }}
            className="mb-6 bg-white text-black  "
          >
            <MenuItem name="time" value="فرقة اولة">
              فرقة اولة
            </MenuItem>
            <MenuItem name="time" value="time2">
              فرقة ثانية
            </MenuItem>
            <MenuItem name="time" value="team3">
              فرقة ثالثة
            </MenuItem>
          </Select>

          <TERipple rippleColor="light" className="w-full">
            <button
              type="submit"
              className="inline-block w-full rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            // onClick={handClick}
            >
              تسجيل الدخول
            </button>
          </TERipple>
        </form>
      </div>
    </>
  );
}
