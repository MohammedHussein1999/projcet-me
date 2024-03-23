import { Divider } from "@mui/material";
import Cardd from "./card";
import TeamCard from "./teamCard";


export default function Home() {


 
  return (
    <>

      <div className="min-page-home">
        <div className="card-ad-min">
          <Cardd />
          <Cardd />
          <Cardd />
          <Cardd />
        </div>
      </div>
      <div className="card-data">
        <Divider />
        <TeamCard />
        <Divider classes='mb-5' />
      </div>
    </>
  );
}
