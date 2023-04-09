import fastify from "fastify";

const server = fastify({ logger: true });

const images: {title: string; image: string;}[] = [
  {
    title: "one",
    image: "http://example.com",
  },
  {
    title: "two",
    image: "http://example.com",
  },
  {
    title: "three",
    image: "http://example.com",
  },
  {
    title: "four",
    image: "http://example.com",
  },
];

const upcomingEvents: {date: string; event: string; rsvp: string;}[] = [
  {
    date: "april 8",
    event: "ideas 101 w/ farza",
    rsvp: "https://lu.ma/26hnwhzm",
  },
  {
    date: "april 10",
    event: "building w/ shaan puri",
    rsvp: "https://lu.ma/6vgyneo4",
  },
  {
    date: "april 12",
    event: "life & lexica w/ sharif",
    rsvp: "https://lu.ma/8s7zlrgc",
  },
];

const videos: {title: string; link: string}[] = [
    {
        title: "one",
        link: "one-link"
    },
    {
        title: "two",
        link: "two-link"
    }
];

const enableImages = false;
const enableVideos = false;

server.get("/", async (_, reply) => {
    reply.send("gm builder")
})

server.get("/api/imagesEnabled", async (_, reply) => {
  reply.send(enableImages);
});

server.get("/api/images", async (_, reply) => {
  reply.send(images);
});

server.get("/api/events", async (_, reply) => {
  reply.send(upcomingEvents);
});

server.get("/api/videosEnabled", async (_, reply) => {
    reply.send(enableVideos);
})

server.get("/api/videos", async (_, reply) => {
    reply.send(videos);
})

const start = async () => {
  try {
    await server.listen({ host: "0.0.0.0", port: 3000 });
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();
