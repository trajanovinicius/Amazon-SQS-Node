import { FastifyReply, FastifyRequest } from "fastify";
import { handleEvent } from "../services/events.service";

export async function postEventController(
  req: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const body = req.body;
    const messageId = await handleEvent(body);

    return reply.status(200).send({ ok: true, messageId });
  } catch (error: any) {
    return reply.status(400).send({ ok: false, error: error.message });
  }
}
