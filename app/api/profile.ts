import { get_api_host, get_api_port, get_api_protocol, get_api_token } from "@/envs"

type LoginProps = {
  username?: string
  password?: string
}

export const enterChat = async (props: LoginProps) => {
  await fetch(`${get_api_protocol()}://${get_api_host()}:${get_api_port()}/chat/enter`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-Token': get_api_token()
    },
    method: 'POST',
    body: JSON.stringify({ props })
  })
}
