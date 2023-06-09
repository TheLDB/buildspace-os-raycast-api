import fastify from "fastify";

const server = fastify({ logger: true });

const images: { title: string; image: string }[] = [
  {
    title: "banner_s.png",
    image: "https://framerusercontent.com/images/A4ATGSFzLdUkscJGEJAl1xoRg.png",
  },
  {
    title: "banner_a.png",
    image:
      "https://framerusercontent.com/images/amo7e1yQz0pEcRbaZFObkTpQIjc.png",
  },
  {
    title: "banner_g.png",
    image:
      "https://framerusercontent.com/images/3HszPak0gJ3FySgT9VG9uk02j4.png",
  },
  {
    title: "banner_e.png",
    image:
      "https://framerusercontent.com/images/kzNIFbdmcPta67CoMrd1x93h9o0.png",
  },
];

const upcomingEvents: { date: string; event: string; rsvp: string }[] = [
  {
    date: "april 18",
    event: "validating + users w/ farza",
    rsvp: "https://lu.ma/b5vrvdu1"
  },
  {
    date: "april 20",
    event: "building curse w/ hubert",
    rsvp: "https://lu.ma/pvedfd24"
  },
  {
    date: "april 22",
    event: "saturday shenanigans",
    rsvp: "https://lu.ma/g311wory"
  },
  {
    date: "forever",
    event: "subscribe to cal",
    rsvp: "https://calendar.google.com/calendar/u/0?cid=Y181Y2NlMjZiOWM4ZTkyMjUxMWNiNTE4OGJmMDYxMWQwZDE3YjQyOGNiZTRmMTY0NDIyMzFlMjZjNjQwYTI4NjlmQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20",
  },
];

const videos: { title: string; link: string }[] = [
  {
    title: "sharif.mp4",
    link: "https://www.twitch.tv/videos/1794532243?t=00h19m18s"
  },
  {
    title: "shaan_puri.mp4",
    link: "https://twitter.com/i/status/1646708105810702337",
  },
  {
    title: "ideas_101.mp4",
    link: "https://www.twitch.tv/videos/1790897122",
  },
  {
    title: "ideas_template",
    link: "https://www.figma.com/community/file/1227500540936613761/s3-ideas-wksp",
  },
  {
    title: "kickoff_apr_8.mp4",
    link: "https://www.twitch.tv/videos/1788278186?t=00h21m05s",
  },
  {
    title: "slides",
    link: "https://www.figma.com/proto/NsoRBkV2uMDAH3X967cKB5/s3----kickoff?node-id=1-2",
  },
];

const misc: { title: string; link: string; other?: string; }[] = [
  {
    title: "message_from_farza.mp4",
    link: "https://www.loom.com/share/96f60a37cf384062bdde1e000dc4def7"
  },
  {
    title: "w1 update",
    link: "https://airtable.com/shreNcrU7AqhDFHPT"
  }
];

const enableImages = true;
const enableVideos = true;
const enableMisc = true;
server.get("/", async (_, reply) => {
  reply.send("gm builder");
});

server.get("/api/imagesEnabled", async (_, reply) => {
  reply.send(enableImages);
});

server.get("/api/images", async (_, reply) => {
  reply.send(images);
});

server.get("/api/events", async (_, reply) => {
  reply.send(upcomingEvents);
});

server.get("/api/misc", async (_, reply) => {
  reply.send(misc);
})

server.get("/api/miscEnabled", async (_, reply) => {
  reply.send(enableMisc)
});

server.get("/api/videosEnabled", async (_, reply) => {
  reply.send(enableVideos);
});

server.get("/api/videos", async (_, reply) => {
  reply.send(videos);
});

const start = async () => {
  try {
    await server.listen({ host: "0.0.0.0", port: 3000 });
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();
