import express from "express";
import mysql from "mysql2";
import cors from "cors"

const pool = mysql.createPool({
    host: "127.0.0.1",
    user: "root",
    password: "Tanxengian1234",
    database: "realInstagram"
}).promise();

const app = express();
const port = "8080";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});

// this is to test if the database is connected
// const result = await pool.query("SELECT * FROM posts;");
// console.log(result);

app.post("/post", async (req, res) => {
    const { caption, image } = req.body;
    const post = await addPost(caption, image);
    console.log(`post added ${post}`);
    res.status(201).send({status: "success"});
});

app.put("/post/:id", async (req,res) => {
    const { id } = req.params;
    const { caption, image } = req.body;
    const updatedPost = await updatePost(id, caption, image);
    res.status(202).send(updatedPost)
})

app.get("/post/:id", async (req, res) => {
    const { id } = req.params;
    const post = await getPost(id);
    res.status(200).send(post); 
})

app.get("/post", async(req, res) => {
    const allPost = await getAllPost();
    res.status(200).send(allPost);
})

app.delete("/post/:id", async(req,res) => {
    const { id } = req.params;
    await deletePost(id);
    res.status(200).send({ status: "post deleted" });
})

// helper function to get a single post from the database
async function getPost(id){
    const [rows] = await pool.query(`SELECT * FROM posts WHERE id=?`, [id]);
    return rows[0];
};
// helper function to add a post to the database
async function addPost(caption, image){
    const [result] = await pool.query(`INSERT INTO posts (caption, image) VALUES (?, ?)`, [caption, image]);
    const id = result.insertId;
    return getPost(id);
};
// helper function for updating a post
async function updatePost(id, caption, image){
    await pool.query(`UPDATE posts SET caption = ?, image = ? WHERE id = ?;`,
        [caption, image ,id]
    );
    return getPost(id);
}
// helper function for deleting a post
async function deletePost(id, caption, image){
    await pool.query(`DELETE FROM posts WHERE id=?;`,
        [id]
    );
}
// helper function to get all posts
async function getAllPost(){
    const [rows] = await pool.query(`SELECT * FROM posts`);
    return rows;
}