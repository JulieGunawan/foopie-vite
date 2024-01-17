import Selection from "./Selection";
import Title from "./Title";
import { products } from "../Foopies";

const Selections = () => {
  return (
    <section className="selections" id="selections">
      <Title title="our" subTitle="selections" />
      <div className="selections-center">
        {products.map((product) => {
          return <Selection key={product.id} {...product} />;
        })}
      </div>
    </section>
  );
};

export default Selections;
