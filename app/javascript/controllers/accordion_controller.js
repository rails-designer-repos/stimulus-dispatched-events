import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static values = { id: String }

  connect() {
    const saved = localStorage.getItem(`accordion:${this.idValue}`)

    if (saved !== null) this.element.open = saved === "true"
  }

  persist(event) {
    localStorage.setItem(`accordion:${this.idValue}`, event.target.open)
  }
}
