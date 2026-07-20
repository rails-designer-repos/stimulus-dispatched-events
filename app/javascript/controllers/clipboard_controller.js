import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["tooltip"]

  showTooltip() {
    this.tooltipTarget.classList.add("visible")

    clearTimeout(this.timeoutId)

    this.timeoutId = setTimeout(() => {
      this.tooltipTarget.classList.remove("visible")
    }, 1500)
  }

  disconnect() {
    clearTimeout(this.timeoutId)
  }
}
