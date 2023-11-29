import { get_api_host, get_api_port, get_api_protocol, get_api_token } from "@/envs"

export const getPosts = async () => {
  return await fetch(`${get_api_protocol()}://${get_api_host()}:${get_api_port()}/graphql`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-Token': get_api_token()
    },
    method: 'POST',
    body: JSON.stringify(`
    query Posts {
      user(id: 1) {
        posts {
          id
          title
          body
          createdAt
          updatedAt
        }
      }
    }
    `)
  })
}
