import { FastifyInstance } from "fastify";
import { postEventController } from "../controller/events.controller";

export async function eventsRoutes(app: FastifyInstance) {
  app.post("/events", postEventController);
}
