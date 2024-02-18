import { useSelector } from "react-redux";
import CreateUser from "../pages/user/CreateUser";
import Button from "../components/Button";

function Home() {
  const username = useSelector((state) => state.user.username);
  return (
    <div className="my-10 px-4 text-center sm:my-16 ">
      <h1 className="mb-8 text-xl font-bold text-stone-950 md:text-3xl">
        The best pizza.
        <br />
        Straight out of the oven, straight to you.
      </h1>
      {username === "" ? (
        <CreateUser />
      ) : (
        <Button to="/menu" type="primary">
          Continue ordering, {username}
        </Button>
      )}
    </div>
  );
}

export default Home;
