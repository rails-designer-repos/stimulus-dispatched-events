import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["submitButton", "result"]

  validating(event) {
    this.submitButtonTarget.disabled = true
    this.submitButtonTarget.textContent = "Saving…"

    setTimeout(() => {
      const data = new FormData(event.target)
      const formDataPairs = [...data.entries()].map(([key, value]) => `${key}: ${value}`).join("\n")

      this.resultTarget.textContent = `Submitted:\n${formDataPairs}`
      this.resultTarget.classList.remove("hidden")
    }, 800)
  }
}
