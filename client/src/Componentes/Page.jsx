import { Link } from "react-router-dom";

const Page = (recipe) => {
  return (
    <div>
      <Link to="/home">
        <p>HOME</p>
      </Link>
      <Link to="/landing">
        <p>LANDING</p>
      </Link>
      <Link to="/formPage">
        <p>FORM PAGE</p>
      </Link>
    </div>
  );
};

export default Page;
