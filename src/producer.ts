import { SendMessageCommand } from "@aws-sdk/client-sqs";
import { sqsClient } from "./sqsClient";
import dotenv from "dotenv";

dotenv.config();

export async function sendToQueue(message: any) {
  const params = {
    QueueUrl: process.env.SQS_QUEUE_URL!,
    MessageBody: JSON.stringify(message),
  };
  const command = new SendMessageCommand(params);
  const response = await sqsClient.send(command);
  console.log("Mensagem Enviada com Sucesso:", response.MessageId);
}
