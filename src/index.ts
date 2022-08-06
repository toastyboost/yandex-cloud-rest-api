import { FunctionEvent, FunctionContext } from "./types"

export const echoHandler = async function (event: FunctionEvent, ctx: FunctionContext) {
  const payload = JSON.parse(event.body as string);

  return {
    statusCode: 200,
    body: {
      payload,
      event,
      ctx
    }
  };
};