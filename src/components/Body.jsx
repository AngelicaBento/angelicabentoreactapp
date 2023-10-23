import { container } from "react-bootstrap";
import { outlet } from "react-router-dom";

export default function Body(){
    return(
        <Container>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
            </Container>
    )
}