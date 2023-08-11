import { ChatCompletionRequestMessage, Configuration, OpenAIApi } from "openai";
import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs"

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY, 
});

const openai = new OpenAIApi(configuration);

const instructionMessage: ChatCompletionRequestMessage = {
    role: "system",
    content: "You are a code generator. You must answer only in markdown code snippets. Use code comments for explanations. You must not answer any other questions which are not regarding the code generation. If user ask you anything not connected to code generation you will refuse to answer and you will say: 'Please use Conversational model for this question'."
}

export async function POST(
    req: Request
) {
    try {
        const userId = auth();
        const body = await req.json();
        const { messages } = body;

        if(!userId) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        if(!configuration.apiKey) {
            return new NextResponse("OpenAI API Key not configured", { status: 500 });
        }

        if(!messages) {
            return new NextResponse("Messages are required", { status: 400 });
        }

        const response = await openai.createChatCompletion({  //gpt-3.5-turbo
            model: "gpt-3.5-turbo",
            messages: [instructionMessage, ...messages],
        })

        return NextResponse.json(response.data.choices[0].message);

    } catch (error) {
        console.log("[CODE_ERROR]", error)
        return new NextResponse("Internal error", { status: 500 })
    }
}