import express from "express";
import cors from "cors";
import fs from "fs";
import csv from "csv-parser";
import { fileURLToPath } from 'url';
import path from 'path';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const csvFilePath = path.join(__dirname, 'aircrashesFullData.csv');
const app = express();

app.use(cors({
    origin: "http://localhost:5500"
}));

app.get("/", (req, res) => {
    const regionCounts = {};

    // Read the CSV file and count accidents per region
    fs.createReadStream(csvFilePath)
        .pipe(csv())
        .on('data', (row) => {
            const region = row["Country/Region"];
            if (region) {
                if (regionCounts[region]) {
                    regionCounts[region]++;
                } else {
                    regionCounts[region] = 1;
                }
            }
        })
        .on('end', () => {
            const data = {
                x: Object.keys(regionCounts),
                y: Object.values(regionCounts),
                type: 'bar'
            };
            res.send(data).status(200);
        });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`server listening on port ${port} 🚀`));

