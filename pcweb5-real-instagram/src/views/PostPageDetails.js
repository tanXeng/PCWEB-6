import { useState, useEffect } from "react";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import axios from "axios";
import { API, POST, DELETE } from "../constants";
import SiteNav from "../templates/SiteNav";
import { useNavigate, useParams } from "react-router-dom";

export default function PostPageDetails() {
    const [caption, setCaption] = useState("");
    const [image, setImage] = useState("");
    const params = useParams();
    const id = params.id;
    const navigate = useNavigate();
    async function getPost(id) {
        const url = API + POST + `/${id}`;
        const response = await axios.get(url);
        const { caption, image } = response.data;
        setCaption(caption);
        setImage(image);
    }
    async function deletePost(id) {
        const url = API + DELETE + `/${id}`;
        const response = await axios.delete(url);
        console.log(response.data.status);
        navigate("/");
    }

    useEffect(() => {
        getPost(id);
    }, [id])
    return (
        <>
          <SiteNav />
          <Container>
            <Row style={{ marginTop: "2rem" }}>
              <Col md="6">
                <Image src={image} style={{ width: "100%" }} />
              </Col>
              <Col>
                <Card>
                  <Card.Body>
                    <Card.Text>{caption}</Card.Text>
                    <Card.Link href={`/post/${id}/edit`}>Edit</Card.Link>
                    <Card.Link onClick={() => deletePost(id)}>Delete</Card.Link>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </>
      );
    }
    
    
    