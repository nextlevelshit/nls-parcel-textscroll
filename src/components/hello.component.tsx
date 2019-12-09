import React from "react"

type HelloProps = {
  name: string
}

export const Hello = ({ name }: HelloProps) =>
<h3>
  Oh hey - { name }
</h3>