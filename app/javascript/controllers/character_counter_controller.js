import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["input", "remainingCharacters"]

  update() {
    const remainingCharacters = this.inputTarget.maxLength - this.inputTarget.value.length

    this.remainingCharactersTarget.textContent = remainingCharacters
  }
}
