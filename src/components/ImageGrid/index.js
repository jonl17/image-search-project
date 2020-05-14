import React from 'react'
import { Grid } from "./styled"
import ResultBox from "../ResultBox"

const ImageGrid = ({ items }) => {
  return (
    <Grid>
      {items.map((item, index) => (
        <ResultBox key={index} item={item}></ResultBox>
      ))}
    </Grid>
  )
}

export default ImageGrid
