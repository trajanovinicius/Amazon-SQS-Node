import Fastify from "fastify";
import { sendToQueue } from "./producer";

const app = Fastify();

app.post("/events", async (request, reply) => {
  const payload = request.body;
  await sendToQueue(payload);
  return reply.status(200).send({ ok: true });
});

app.listen({ port: 3000 }, () => {
  console.log("🚀 API running on http://localhost:3000");
});
