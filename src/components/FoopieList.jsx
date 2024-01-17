import "../App.css";
import { FoopieItems } from "../Foopies";
import Title from "./Title";
import Foopie from "./Foopie";

const FoopieList = () => {
  return (
    <section className="section featured-foopies" id="featured">
      <Title title="Featured" subTitle="Foopies" />

      <div className="section-center featured-center">
        {FoopieItems.map((foopie) => {
          return (
            //...foopie is the same as const {id, img, title, description} = foopie
            //the () is the same as {return <FoopieItem>}
            <Foopie key={foopie.id} {...foopie} />
          );
        })}
      </div>
    </section>
  );
};

export default FoopieList;
