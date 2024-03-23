import axios from "axios";
// import token from "./token";

let token;
export async function Post(
  urlData = null,
  nameData = null,
  numData = null,
  pasData = null
) {
  let config = {
    headers: {
      headers: {
        Authorization: "Bearer " + token,
      },
    },
  };

  axios.defaults.headers.common["Authorization"] = "Bearer " + token;

  const res = await axios
    .post(
      urlData,
      {
        name: nameData,
        email: numData,
        password: pasData,
      },
      config
    )
    .then((res) => {
      if (res.data.token) {
        localStorage.setItem("token", token);
        // window.location = "./home";
      }
      return res.data;
    })
    .catch((err) => {
      console.log(err.message);
    });

  return res;
}

export async function Get(urlGet) {
  try {
    const res = await axios.get("http://127.0.0.1:8000/api/login");
    return console.log(res.data);
  } catch (error) {
    return error.message;
  }
}
