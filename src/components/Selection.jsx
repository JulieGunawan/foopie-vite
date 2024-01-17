const Selection = (prop) => {
  const { id, icon, type, text } = prop;
  return (
    <article className="selection">
      <span className="selection-icon">
        <i className={icon}></i>
      </span>
      <div className="selection-info">
        <h3 className="selection-type">{type}</h3>
        <p className="selection-text">{text}</p>
      </div>
    </article>
  );
};

export default Selection;
