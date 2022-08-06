import fetch from "node-fetch";

type RequestProps = {
  method?: "POST" | "GET",
  url: string,
  body?: object
}

const headers = {
  "Content-Type": "application/json",
}

export const request = async <T extends unknown>({
  url,
  body,
  method = "GET"
}: RequestProps) => {

  try {
    const response = await fetch(url, {
      headers: {
        ...headers,
      },
      method,
      ...(body && { body: JSON.stringify(body) }),
    })

    const json = await response.json() as T
    return json;
  } catch (e) {
    throw new Error(`${e}`);
  }
}