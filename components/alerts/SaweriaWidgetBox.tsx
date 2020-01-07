import * as React from 'react'
import convert from 'htmr'
import { Transition } from 'react-transition-group'

import { OverlayConfig, ServerMessage } from 'utils/types'

// JSX expression
const TEMPLATE_REGEX = /{(\w+)}/

interface SaweriaWidgetBoxProps {
  config?: OverlayConfig
}

const initMessage: ServerMessage = {
  donatee: '{donatee}',
  amount: '{amount}',
  message: '{message}'
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
  const [messages, setMessages] = React.useState<{ [key: string]: any }>(initMessage)
  const saweriaAlertURL = config ? `https://api.saweria.co/stream?channel=donation.${config.streamKey}` : undefined

  const eventSource = saweriaAlertURL ? new EventSource(saweriaAlertURL) : undefined

  const handleMessage = (e: MessageEvent) => {
    const { data } = JSON.parse(e.data)

    setMessages(data)

    setIsShown(true)

    setTimeout(() => {
      setIsShown(false)
    }, 5000)
  }

  const rendered: React.ReactNode = React.useMemo(() => {
    if (config) {
      return convert(config.html, {
        transform: {
          _: (node, props, children) => {
            if (typeof props === 'undefined' && typeof node === 'string') {
              // text node
              if (TEMPLATE_REGEX.test(node)) {
                const key = node.replace(TEMPLATE_REGEX, '$1')
                return messages[key]
              }

              return node
            }

            // fallback
            return React.createElement(node, props, children)
          }
        }
      })
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
