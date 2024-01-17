const Foopie = (props) => {
  //you need to initialize the value of each img title and description
  const { id, img, shape, price, title, description } = props;

  return (
    <article className="featured">
      <p className="foopieId">{`# ${id}`}</p>
      <img className="foopieImg" src={img} alt={title} />
      <div className="foopieInfo">
        <div className="foopieTitle">
          <h3>{title}</h3>
        </div>
        <p className="foopieDescription">{description}</p>
        <div className="foopieFooter">
          <p>
            <span>
              <i class="fa-solid fa-shapes"></i>
            </span>
            {shape}
          </p>
          <p>price ${price}</p>
        </div>
      </div>
    </article>
  );
};

export default Foopie;
