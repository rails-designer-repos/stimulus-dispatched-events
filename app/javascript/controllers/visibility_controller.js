import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    this.originalTitle = document.title

    this.toggle()
  }

  toggle() {
    document.title = document.hidden ? `[Hidden] ${this.originalTitle}` : this.originalTitle
  }
}
