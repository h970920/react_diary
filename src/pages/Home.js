import { useSearchParams } from "react-router-dom";

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("sort"));

  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to the Home page</p>
    </div>
  );
};

export default Home;
