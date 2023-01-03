import "./BioDetails.css";


export const BioDetails = (props) => {

  const items = props.items;
  const listItems = items.map((item) => 
    <li>{item}</li>
  );

  return (
    <div className="container-bio-details">
      <span className="purple-text">{props.name}</span>
      <p>{props.description}</p>
      <div className="gray-text">
        <ul>{listItems}</ul>
      </div>
    </div>
  );
};
