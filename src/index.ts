import express, { Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!!");
});

app.get("/videos", (req: Request, res: Response) => {
  res.send(videos);
});

app.get("/videos/:id", (req: Request, res: Response) => {
  const foundVideo = videos.find((video) => video.id === +req.params.id);
  if (!foundVideo) {
    return res.send(404);
  }
  res.send(foundVideo);
});

app.post("/videos", (req: Request, res: Response) => {
  const newVideo = {
    id: +new Date(),
    title: req.body.title,
    author: "it-incubator.eu",
  };
  videos.push(newVideo);
  res.status(201).send(newVideo);
});

app.delete("/videos/:id", (req: Request, res: Response) => {
  const indexForRemove = videos.findIndex(
    (video) => video.id === +req.params.id
  );
  if (indexForRemove === -1) {
    res.send(404);
  }
  videos.splice(indexForRemove, 1);
  res.send(videos);
});

app.put("/videos/:id", (req: Request, res: Response) => {
  const index = videos.findIndex((video) => video.id === +req.params.id);
  if (index === -1) {
    return res.send(404);
  }
  videos[index].title = req.body.title;
  res.send(videos[index]);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const videos = [
  { id: 1, title: "About JS - 01", author: "it-incubator.eu" },
  { id: 2, title: "About JS - 02", author: "it-incubator.eu" },
  { id: 3, title: "About JS - 03", author: "it-incubator.eu" },
  { id: 4, title: "About JS - 04", author: "it-incubator.eu" },
  { id: 5, title: "About JS - 05", author: "it-incubator.eu" },
];
