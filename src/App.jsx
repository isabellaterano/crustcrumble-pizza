import { Outlet, useNavigation } from "react-router-dom";
import Header from "./components/Header";
import CartOverview from "./pages/cart/CartOverview";
import Loader from "./components/Loader";

const App = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto] ">
      {isLoading && <Loader />}

      <Header />
      <div className="overflow-scroll">
        <main className="mx-auto max-w-3xl ">
          <Outlet />
        </main>
      </div>

      <CartOverview />
    </div>
  );
};

export default App;
