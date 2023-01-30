import Title from "./Title";

const Header = (props) => {
  return (
    <header>
      <div className="container">
        <Title name={props.name} />
      </div>
    </header>
  );
};

export default Header;
