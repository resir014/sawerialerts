export const defaultStyles = `html,
body {
  font-size: 16px;
  line-height: 1.45;
  height: 100%;
  width: 100%;
  margin: 0px;
  padding: 0px;
  overflow: hidden;
}

html {
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

.widget-AlertBox {
  position: relative;
}

.ck-alert-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  height: 100%;
  width: 100%;
  padding: 8px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", Arial,
    sans-serif;
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

.ck-alert--donation .ck-alert__header {
  background-color: #0076ff;
}

.ck-alert__header h2 {
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.25px;
  color: #fff;
  font-size: 32px;
  text-shadow: 0px 0px 1px #000, 0px 0px 2px #000, 0px 0px 3px #000,
    0px 0px 4px #000, 0px 0px 5px #000;
}

.ck-alert-text {
  text-align: center;
  color: #fff;
  font-size: 24px;
}

.ck-alert-text__inner {
  display: block !important;
  padding: 20px;
  text-shadow: 0px 0px 1px #000, 0px 0px 2px #000, 0px 0px 3px #000,
    0px 0px 4px #000, 0px 0px 5px #000;
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

.ck-alert--donation #alert-message span {
  color: #0076ff;
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
}`

export const defaultHtml = `<div class="ck-alert-wrapper">
  <div class="ck-alert-wrapper__inner">
    <!-- alert image -->
    <div class="ck-alert-image"></div>

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
          <div id="alert-message"><span>{donatee}</span> donated <span>{amount}</span>!</div>
          <div id="alert-user-message">{message}</div>
        </div>
      </div>
    </div>
  </div>
</div>`
