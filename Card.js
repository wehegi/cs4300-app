import './Card.css';
const Card = (props) => {
    const class1 = 'card ' + props.className;
    return <div className={class1}>{props.children}</div>;
  };
  export default Card;