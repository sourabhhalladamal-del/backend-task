const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

// Home route
app.get("/", (req, res) => {
    res.send("Backend Task Server is Running!");
});

// Users route
app.get("/users", (req, res) => {
    const users = [
        { id: 1, name: "Sourabh", course: "BCA" },
        { id: 2, name: "Rahul", course: "BCA" }
    ];

    res.json(users);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});