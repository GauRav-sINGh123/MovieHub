import Button from "./components/Button";
import Details from "./components/Details";

function App() {
  return (
    <>
      <div className=" flex justify-center items-center mt-16">
        <Button />
      </div>
      <h2 className="text-5xl font-bold text-center mt-8 text-white">
        The Movie{" "}
        <span className="text-clip bg-clip-text text-transparent bg-gradient-to-r from-gray-300 to-gray-500">
          Database
        </span>
      </h2>
      <p className="text-gray-400 text-center mt-4">
        Find All The Details Of Your Favourite Movies 🍿
      </p>
      <Details />
    </>
  );
}

export default App;
