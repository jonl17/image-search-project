import React from 'react'
import { Grid } from "./styled"
import ResultBox from "../ResultBox"

const ImageGrid = ({ items }) => {

  return (
    <Grid padding={window && window.innerWidth <= 750 ? "var(--smallPad) 0" : "var(--smallPad)"}>
      {items.map((item, index) => (
        <ResultBox key={index} item={item}></ResultBox>
      ))}
    </Grid>
  )
}

export default ImageGrid
