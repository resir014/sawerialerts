import * as React from 'react'
import convert from 'htmr'
import { Transition } from 'react-transition-group'

import { OverlayConfig, WidgetMessageBody } from 'utils/types'

interface SaweriaWidgetBoxProps {
  config: OverlayConfig
}

const duration = 500

const defaultStyle = {
  display: 'flex',
  flexDirection: 'column' as const,
  flex: 1,
  width: '100%',
  height: '100%',
  minHeight: '100vh',
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0
}

const transitionStyles: { [key: string]: React.CSSProperties } = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 }
}

const SaweriaWidgetBox: React.FC<SaweriaWidgetBoxProps> = ({ config }) => {
  const [isShown, setIsShown] = React.useState(false)
  const [listening, setListening] = React.useState(false)
  const [messages, setMessages] = React.useState<{ [key: string]: any } | undefined>(undefined)
  const saweriaAlertURL = config ? `https://api.saweria.co/stream?channel=donation.${config.streamKey}` : undefined
  let timeout: NodeJS.Timeout | undefined

  const eventSource = saweriaAlertURL ? new EventSource(saweriaAlertURL) : undefined

  const formatCurrency = (raw: number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(raw)
  }

  const handleMessage = (e: MessageEvent) => {
    const { data } = JSON.parse(e.data)

    const messageBody: WidgetMessageBody = {
      alertTemplate: config.alertTemplate
        .replace('{donatee}', `<span>${data.donatee}</span>`)
        .replace('{amount}', `<span>${formatCurrency(data.amount)}</span>`),
      message: data.message
    }

    setMessages(messageBody)

    setIsShown(true)

    if (timeout) {
      clearTimeout(timeout)
    }
    timeout = setTimeout(() => {
      setIsShown(false)
    }, 5000)
  }

  const rendered: React.ReactNode = React.useMemo(() => {
    if (messages) {
      const replacedHtml = config.html
        .replace('{img}', config.image ? `<img id="image" class="alert-image" src="${config.image}" alt="Alert" />` : '')
        .replace('{alertTemplate}', messages.alertTemplate)
        .replace('{message}', messages.message)

      return convert(replacedHtml)
    }

    return null
  }, [config, messages])

  React.useEffect(() => {
    if (eventSource && !listening) {
      eventSource.addEventListener<any>('donations', handleMessage)

      setListening(true)
    }

    return () => {
      if (eventSource && listening) {
        eventSource.removeEventListener<any>('donations', handleMessage)

        setListening(false)
      }
    }
  }, [listening])

  return (
    <Transition in={isShown} timeout={duration}>
      {state => (
        <div
          style={{
            ...defaultStyle,
            ...transitionStyles[state]
          }}
        >
          {rendered}
        </div>
      )}
    </Transition>
  )
}

export default SaweriaWidgetBox
