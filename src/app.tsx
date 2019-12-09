import React, { createElement } from "react"
import ReactDOM, { render } from "react-dom"
import { Main } from "./main"

export class App {
  private _appName: string = "Awesome TypeScript, React, Parcel App!"

  constructor() {
    this.render()
  }

  private render(): void {
    render(createElement(Main, { app: this }), document.getElementById("app"))
  }

  public get appName(): string { return this._appName }
}

new App()