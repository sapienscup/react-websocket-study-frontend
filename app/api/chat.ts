import { get_api_host, get_api_port, get_api_token } from "@/envs"

export const chatApiSendMsg = async (msgText: string) => {
  await fetch(`http://${get_api_host()}:${get_api_port()}/chat/send`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-Token': get_api_token()
    },
    method: 'POST',
    body: JSON.stringify({ message: msgText })
  })
}
