import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import React from "react";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import { API, ADD } from "../constants";


export default function PostPageAdd() {
  const [ caption, setCaption ] = useState("");
  const [ image, setImage ] = useState("");
  const navigate = useNavigate();
  return (
<>
    <Navbar variant="light" bg="light">
      <Container>
        <Navbar.Brand href="/">Real Instagram</Navbar.Brand>
        <Nav>
          <Nav.Link href="/add">New Post</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    <Container>
        <h1 style={{ marginBlock: "1rem" }}>Add New Post</h1>
        <Form>
          <Form.Group className="mb-3" controlId="caption">
            <Form.Label>Caption</Form.Label>
            <Form.Control type="text"
            placeholder="Enter your caption here"
            value={caption}
            onChange={(text) => setCaption(text.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="image">
            <Form.Label>Image URL</Form.Label>
            <Form.Control type="text" 
            placeholder="Enter image URL here"
            value={image}
            onChange={(text) => setImage(text.target.value)} /> 
            <Form.Text className="text-muted">
              Make sure the url has a image type at the end: .jpg, .jpeg, .png.
            </Form.Text>
          </Form.Group>
          <Button variant="primary"
          onClick={ async (e) => {const post = { image, caption };
          try {
            await axios.post(API + ADD, post);
            navigate("/");
          } catch (error) {
            console.error(error.message);
          }
          }}>Submit</Button>
        </Form>
      </Container>
</>
  );
}
