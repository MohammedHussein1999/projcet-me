import { Link } from "react-router-dom";

export default function Links() {
 
  return (
    <>
      
      <div className="links w-full flex flex-nowrap justify-center text-lg m-3">
        
       
          <Link to="/singUp" className="link-log ">
          تسجيل حساب جديد
        </Link>
        
        <span className="text-black">|</span>
        <Link to="/" className="link-log">
          نسجيل الدخول
        </Link>
      </div>
    </>
  );
}