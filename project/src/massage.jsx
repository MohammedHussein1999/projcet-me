import { Avatar, Container } from "@mui/material";


export default function Massage(props) {


  return (
    <div dir="rtl">
      <Container className="massage-form  ">
        <Avatar
          className="ml-3"
          alt="Avatar"
          src="https://mui.com//static/images/avatar/1.jpg"
        />
        <span >{props.nameUse} :</span>
        <p>{props.massageSand}</p>
      </Container>
    </div>
  );
}
