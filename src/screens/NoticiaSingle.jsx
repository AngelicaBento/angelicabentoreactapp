import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import MostraId from "../components/MostreId";

export default function NoticiaSingle() {
  const [noticia, setNoticia] = useState({});

  const { idNoticia } = useParams();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/" + idNoticia)
      .then((res) => res.json())
      .then((res) => {
        setNoticia(res);
      });
  }, [idNoticia]);

  return (
    <Container>
      <h1>{noticia.title}</h1>
      <p>{noticia.body}</p>
      <MostraId idAtual={noticia.id} />
    </Container>
  );
}
