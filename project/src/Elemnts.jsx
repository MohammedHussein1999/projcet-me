import Cardd from "./card";
import Typography from "@mui/material/Typography";

export default function Elemnts(prop) {
  return (
    <>
      <Typography variant="h2" className=" text-center" color="initial">
        فرقة {prop.numb}
      </Typography>
      <div className="show-element">
        <Cardd name={1} />
        <Cardd name={2} />
        <Cardd name={3} />
        <Cardd name={4} />
        <Cardd name={5} />
        <Cardd name={6} />
        <Cardd name={7} />
        <Cardd name={8} />
        <Cardd name={9} />
        <Cardd name={10} />
        <Cardd name={11} />
      </div>
    </>
  );
}
