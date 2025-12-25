import fastify from "fastify";
import { prisma } from "./lib/prisma.ts";

const app = fastify();

app.get("/cadastrar", () => {
  return "Hello World";
});

app.get("/listar", () => {
  return "Hello World";
});

app.listen({ port: 3333 }).then(() => {
  console.log("Server Running");
});
