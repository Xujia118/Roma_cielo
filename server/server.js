const express = require("express");
const cors = require("cors")
app = express()
const PORT = 3000

app.use(cors());
app.use(express.json())

app.get("/api/v1/session", (req, res) => {
    res.json({ message:"Successful!"})
})

app.post("/api/v1/session", (req, res) => {
    const { username } = req.body;
    console.log("username:", username);
    res.json({ username })
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})