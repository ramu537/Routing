import { useNavigate } from "react-router-dom";

function Homepage() {
  const navigation = useNavigate();
  function navigationHandler() {
    navigation("/products");
  }
  return (
    <div>
      <p>In Home</p>
      <button onClick={navigationHandler}>Navigate</button>
    </div>
  );
}

export default Homepage;
