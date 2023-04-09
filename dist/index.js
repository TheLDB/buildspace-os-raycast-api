"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const server = (0, fastify_1.default)({ logger: true });
const images = [
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
const upcomingEvents = [
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
const enableImages = false;
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
const start = async () => {
    try {
        await server.listen({ host: "0.0.0.0", port: 3000 });
    }
    catch (err) {
        server.log.error(err);
        process.exit(1);
    }
};
start();
//# sourceMappingURL=index.js.map