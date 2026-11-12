import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["dialog", "status"]

  open() {
    this.dialogTarget.showModal()
  }

  close() {
    if (this.wasCancelled) {
      this.wasCancelled = false

      return
    }

    this.statusTarget.textContent = "Status: closed"
  }

  cancel() {
    this.wasCancelled = true
    this.statusTarget.textContent = "Status: cancelled (Esc)"
  }

  backdropClick(event) {
    if (event.target === this.dialogTarget) this.dialogTarget.close()
  }
}
