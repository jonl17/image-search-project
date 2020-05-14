import React from 'react'

import { Button } from "./styled"

const Takki = ({ label, action }) => {
  return (
    <Button onClick={action}>{label}</Button>
  )
}

export default Takki
