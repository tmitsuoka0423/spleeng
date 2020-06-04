import * as Authenticator from './modules/Authenticator';

export async function handler(event: any) {
  console.log(JSON.stringify(event));

  const body = JSON.parse(event.body);

  // Authenticator.verify('sign');

  return {
    statusCode: 200,
    body: "hello",
  };
}
