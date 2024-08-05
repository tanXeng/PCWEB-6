import SiteNav from './templates/SiteNav';
import './App.css';
import { useEffect, useState } from "react";
import { Container, Image, Row } from 'react-bootstrap';
import { Link } from "react-router-dom"
import { API, POSTS } from "./constants";
import axios from "axios";

// import { Container,Nav, Navbar } from 'react-bootstrap';

function App() {
  const [ posts, setPosts ] = useState([]);
  async function getAllPosts() {
    try {
      const response = await axios.get(API + POSTS);
      const posts = response.data;
      console.log(posts);
      setPosts(posts);
    }catch (error) {
      console.error(error.message);
    }
  }
  // this is for side effects. Runs once when the page is loaded
  useEffect(() => {
    getAllPosts();
  }, [])
  const ImageRow = () => {
    return posts.map((post, caption, index) => <ImageSquare key={index} post={post} caption={caption}/>);
  }
  return (
  <> 
    <SiteNav />
    <Container>
      <h1>front page</h1>
      <Row>
        <ImageRow />
      </Row>
    </Container>
  </>
  
  );
}
function ImageSquare({ post }) {
  const { image, id } = post;
  return (
    <>
    <Link
      to={`post/${id}`}
      style={{
        width: "18rem",
        marginLeft: "1rem",
        marginTop: "2rem",
      }}
    >
      <Image
        src={image}
        style={{
          objectFit: "cover",
          width: "18rem",
          height: "18rem",
        }}
      />
    </Link>
    </>
  );
}


export default App;
