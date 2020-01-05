/* eslint-disable react/no-danger */
import * as React from 'react'
import { NextPage } from 'next'
import Head from 'next/head'
import convert from 'htmr'

import { OverlayRoot } from 'components/layout'

//#region test CSS

const css = `
* {
  box-sizing: border-box;
}

html {
  box-sizing: inherit;
}

html,
body {
  font-family: 'Lato', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
    Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  line-height: 1.45;
  height: 100%;
  width: 100%;
  margin: 0px;
  padding: 0px;
  overflow: hidden;
}

.widget-AlertBox {
  position: relative;
}

#alert-box {
  height: 100%;
  width: 100%;
  position: absolute;
}

#alert-box.hidden,
.hidden {
  opacity: 0;
}

#wrap {
  position: relative;
  height: 100%;
  width: 100%;
}

.ck-alert-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  height: 100%;
  width: 100%;
  padding: 8px;
}

.ck-alert-wrapper__inner {
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  width: 100%;
}

.ck-alert {
  background-color: #2d2d34;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 8px 0px;
  text-align: center;
  overflow: hidden;
}

.ck-alert:not(:first-child) {
  margin-top: 20px;
}

.ck-alert__header {
  padding: 10px 20px;
}

.ck-alert--streamlabs-prime .ck-alert__header {
  background-color: #caa368;
}

.ck-alert--raid .ck-alert__header {
  background-color: #ff369a;
}

.ck-alert--cheer .ck-alert__header {
  background-color: #9b45ff;
}

.ck-alert--host .ck-alert__header {
  background-color: #2234ce;
}

.ck-alert--donation .ck-alert__header {
  background-color: #0076ff;
}

.ck-alert--follow .ck-alert__header {
  background-color: #00bf80;
}

.ck-alert--sub .ck-alert__header {
  background-color: #f5a623;
}

.ck-alert__header h2 {
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.25px;
  color: #fff;
  font-size: 32px;
  text-shadow: 0px 0px 1px #000, 0px 0px 2px #000, 0px 0px 3px #000, 0px 0px 4px #000,
    0px 0px 5px #000;
}

.ck-alert-text {
  text-align: center;
  color: #fff;
  font-size: 24px;
}

.ck-alert-text__inner {
  display: block !important;
  padding: 20px;
  text-shadow: 0px 0px 1px #000, 0px 0px 2px #000, 0px 0px 3px #000, 0px 0px 4px #000,
    0px 0px 5px #000;
}

.ck-alert-image {
  display: flex;
  flex: 1 1 auto;
  justify-content: center;
}
.ck-alert-image__inner {
  position: relative;
  width: 100%;
  height: 100%;
}
.ck-alert-image__inner video {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
.ck-alert-image {
  z-index: 6;
  position: relative;
}

#alert-message,
#alert-user-message {
  text-align: center;
}
#alert-user-message img {
  vertical-align: middle;
  height: 1em;
}
#alert-message > span > span {
  display: inline-block;
}
#alert-text {
  z-index: 6;
  position: relative;
}
#alert-text-wrap {
  z-index: 6;
  position: relative;
}

`

//#endregion

//#region wildcard values to JSX expressions

// Example for converting wildcard values (e.g. `{}`) to JSX expressions in `htmr`
// (Thanks to @pveyes for this example! https://gist.github.com/pveyes/0b340119495d48099431869e6ecc1ffa)

// JSX expression
const TEMPLATE_REGEX = /{(\w+)}/

const valueMap: { [key: string]: any } = {
  img: '{img}',
  messageTemplate: '{messageTemplate}',
  userMessage: '{userMessage}'
}

const html = `
<div class="ck-alert-wrapper">
  <div class="ck-alert-wrapper__inner">
    <!-- alert image -->
    <div class="ck-alert-image">
      <div id="alert-image" class="ck-alert-image__inner">{img}</div>
    </div>

    <div class="ck-alert ck-alert--donation">
      <div class="ck-alert__header">
        <h2>Donation!</h2>
      </div>

      <!-- main alert box window -->
      <div class="ck-alert-text">
        <!-- alert text -->
        <div id="alert-text" class="ck-alert-text__inner">
          <!-- alert message -->
          <!-- messageTemplate will be replaced with your message template -->
          <!-- for example : {name} is now following! or {name} donated {amount} -->
          <div id="alert-message">{messageTemplate}</div>
          <div id="alert-user-message">{userMessage}</div>
        </div>
      </div>
    </div>
  </div>
</div>
`

const result = convert(html, {
  transform: {
    _: (node, props, children) => {
      if (typeof props === 'undefined' && typeof node === 'string') {
        // text node
        if (TEMPLATE_REGEX.test(node)) {
          const key = node.replace(TEMPLATE_REGEX, '$1')
          return valueMap[key]
        }

        return node
      }

      // fallback
      return React.createElement(node, props, children)
    }
  }
})

//#endregion

const AlertsOverlayPage: NextPage = () => {
  return (
    <OverlayRoot>
      <Head>
        <title>Overlay</title>
        <style dangerouslySetInnerHTML={{ __html: css }} />
      </Head>
      {result}
    </OverlayRoot>
  )
}

export default AlertsOverlayPage
