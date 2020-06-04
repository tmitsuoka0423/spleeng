import Authenticator from "./modules/Authenticator";

export async function handler(event: any) {
  console.log(JSON.stringify(event));

  if (!Authenticator.verify(event.headers["X-Line-Signature"], event.body)) {
    return {
      statusCode: 401,
    };
  }

  const body = JSON.parse(event.body);
  console.log("body", JSON.stringify(body));

  return {
    statusCode: 200,
    body: "hello",
  };
}
