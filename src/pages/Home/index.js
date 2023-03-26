import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../../components/ProductCard";
import { auth } from "../../firebase-config";
import { READ_PRODUCTS, USER_LOGIN } from "../../store/action";

export default function Home() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user)
  const product = useSelector(state => state.product)
  console.log(user);
  console.log(product)

  useEffect(() => {
    dispatch(USER_LOGIN(auth, 'admin@admin.it', 'password'))
  },[]);

  useEffect(() => {
    dispatch(READ_PRODUCTS());
  },[user]);

  return (
    <Container>
      <ProductCard />
    </Container>
  );
}
