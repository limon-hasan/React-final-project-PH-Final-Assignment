import { use } from "react";
import type { Technology } from "../../types/technologyTypes";

interface ITechnologyPromise {
    technologyPromise : Promise<Technology[]>;
}

const Technologies = ({ technologyPromise } : ITechnologyPromise) => {
    const technology = use(technologyPromise);
    console.log(technology);
  return <div>
    
  </div>;
};

export default Technologies;