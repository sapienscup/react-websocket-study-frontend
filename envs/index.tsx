import dotenv from 'dotenv'

dotenv.config()

export const get_app_env = (): string => {
  return process.env.APP_ENV ?? ''
}

export const get_next_telemetry_disabled = (): string => {
  return process.env.NEXT_TELEMETRY_DISABLED ?? ''
}

export const get_api_host = (): string => {
  return process.env.API_HOST ?? ''
}

export const get_api_port = (): string => {
  return process.env.API_PORT ?? ''
}

export const get_api_protocol = (): string => {
  return process.env.API_HOST === 'localhost' ? 'http' : 'https'
}

export const get_api_token = (): string => {
  return process.env.API_TOKEN ?? ''
}

export const get_pusher_event_name = (): string => {
  return process.env.PUSHER_EVENT_NAME ?? ''
}

export const get_pusher_channel_name = (): string => {
  return process.env.PUSHER_CHANNEL_NAME ?? ''
}

export const get_public_pusher_key = (): string => {
  return process.env.PUSHER_PUBLIC_KEY ?? ''
}

export const get_public_pusher_cluster = (): string => {
  return process.env.PUSHER_PUBLIC_CLUSTER ?? ''
}

export const get_github_api_key = (): string => {
  return process.env.GITHUB_API_KEY ?? ''
}
