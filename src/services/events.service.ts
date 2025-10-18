import { sendToQueue } from "../infra/producer";

export async function handleEvent(message: any) {
  if (!message) {
    throw new Error("Corpo da mensagem não informado");
  }
  const messageId = await sendToQueue(message);
  return messageId;
}
