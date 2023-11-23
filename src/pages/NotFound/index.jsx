import { Button } from "@components/atoms";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-5">
      <h1 className="mb-5 text-7xl font-bold ">Oops!</h1>
      <p className="mb-12 text-center text-lg">{`Sorry, we cannot find the page you are looking for :(`}</p>
      <Button
        size="px-4 py-2"
        className="border hover:border-purple-600 hover:bg-purple-600"
      >
        <Link to="/"> Back to main page</Link>
      </Button>
    </div>
  );
};
