const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use(express.static(__dirname));

let latestLocation = null;

app.post("/api/location", (req, res) => {
    const { latitude, longitude, accuracy } = req.body;

    latestLocation = {
        latitude,
        longitude,
        accuracy,
        time: new Date().toLocaleString()
    };

    console.log("Location received:");
    console.log(latestLocation);

    res.json({
        success: true
    });
});

app.get("/api/location", (req, res) => {
    res.json(latestLocation);
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
