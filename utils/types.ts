export interface OverlayConfig {
  streamKey: string
  image?: string
  alertTemplate: string
  html: string
  css: string
}

export interface WidgetMessageBody {
  image?: string
  alertTemplate: string
  message: string
}

export interface ServerMessage {
  donatee: string
  amount: string
  message: string
}
