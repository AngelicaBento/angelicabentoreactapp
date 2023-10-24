import { Container } from "react-bootstrap";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

export default function Body() {
  return (
    <Container>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </Container>
  );
}
