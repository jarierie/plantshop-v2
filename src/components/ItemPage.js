import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { addToCart } from "../actions/actionCreator/addToCart";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 1000px;
  margin: auto;
  img {
    width: 400px;
    height: 600px;
  }
`;

const ItemPage = ({ match }) => {
  const item = useSelector((state) =>
    state.initialItems.find((item) => item.name === match.params.name)
  );
  const dispatchAddToCart = useDispatch();

  return (
    <>
      <>
        <Container>
          <img src={item.imageUrl} alt=''></img>
          <h2>{item.name}</h2>
          <p>{item.price}</p>
          <button onClick={() => dispatchAddToCart(addToCart(item))}>
            Add to Cart
          </button>
        </Container>
      </>
    </>
  );
};

export default ItemPage;
