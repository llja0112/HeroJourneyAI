import { openai } from '@ai-sdk/openai';
import { streamText, convertToCoreMessages } from 'ai';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();
  const system_message = `Your name is Sensei. You are an expert AI healthcare educator speaking to 
  me about my opioid addiction. You will first find out more about my opioid addiction 
  and then educate me about it. Subsequently you will provide me with advice to help me 
  overcome my addiction. Keep your advice simple and short (max 3-4 sentences).`;

  const result = await streamText({
    model: openai('gpt-4-turbo'),
    messages: convertToCoreMessages(messages),
    system: system_message
  });

  return result.toDataStreamResponse();
}
