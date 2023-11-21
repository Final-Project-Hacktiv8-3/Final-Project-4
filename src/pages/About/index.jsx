import { useEffect } from "react";

import { DevCard } from "@components/molecules";
import { developer } from "@lib/constant";

export const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 md:px-12 lg:-mt-[10vh]">
      <div className="mb-12 flex justify-center">
        <h1 className="text-center text-3xl font-bold capitalize">
          About Developers
        </h1>
      </div>
      <div className="flex flex-wrap justify-center gap-12">
        {developer.map((dev) => (
          <div key={dev.id}>
            <DevCard data={dev} />
          </div>
        ))}
      </div>
    </div>
  );
};
