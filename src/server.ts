import Fastify from "fastify";
import { eventsRoutes } from "./routes/events.routes";
import dotenv from "dotenv";

dotenv.config();
const app = Fastify();

app.register(eventsRoutes);

app.listen({ port: 3000 }, () => {
  console.log("🚀 API running on http://localhost:3000");
});
