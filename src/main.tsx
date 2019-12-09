import React, { Component } from "react"
import { App } from "./app"
import { Hello } from "./components/hello.component"

type MainProps = {
  app: App
}

export class Main extends Component<{}, MainProps>
{
  constructor(props: MainProps) {
    super(props)
  }

  public render() {    
    const { app } = this.props
    const { appName } = app
    return (
      <>
        <Hello name={appName} />
      </>
    )
  }
}