import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { API, POST, PUT } from "../constants";
import SiteNav from "../templates/SiteNav";
import { useParams } from "react-router-dom";

export default function PostPageAdd() {
  const [ NewCaption, setNewCaption ] = useState("");
  const [ NewImage, setNewImage ] = useState("");
  const params = useParams();
  const id = params.id;
  const navigate = useNavigate();
  async function getPost(id) {
    const url = API + POST + `/${id}`;
    const response = await axios.get(url);
    const { caption, image } = response.data;
    setNewCaption(caption);
    setNewImage(image);
  }
  useEffect(() => 
  {getPost(id)}, 
  [id]);
  return (
<>
    <SiteNav />
    <Container>
        <h1 style={{ marginBlock: "1rem" }}>Edit post</h1>
        <Form>
          <Form.Group className="mb-3" controlId="caption">
            <Form.Label>Caption</Form.Label>
            <Form.Control type="text"
            placeholder=""
            value={ NewCaption }
            onChange={(text) => setNewCaption(text.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="image">
            <Form.Label>Image URL</Form.Label>
            <Form.Control type="text" 
            placeholder=""
            value={ NewImage }
            onChange={(text) => setNewImage(text.target.value)} /> 
            <Form.Text className="text-muted">
              Make sure the url has a image type at the end: .jpg, .jpeg, .png.
            </Form.Text>
          </Form.Group>
          <Button variant="primary"
          onClick={ async (e) => {
          const put = { image: NewImage, caption: NewCaption };
          const url = API + PUT + `/${id}`;
          console.log(url);
          console.log(NewCaption);
          console.log(NewImage);
          try {
            await axios.put(url, put);
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