// STYLE
import "../styles/core.scss"
import "../styles/font-face.scss"
// UI
import $ from "jquery"
// BIZ
import Hubble from "./core"

const printContent = response => {
  const { explanation, hdurl } = response
  $(`main`).text(explanation)
  $(`#bg`).attr(`src`, hdurl)
}

$(() => {
  Hubble.stargaze().then(response => printContent(response))
})
