import React, { useState, useEffect } from 'react'
import { Box, Image } from "./styled"

const ResultBox = ({ item }) => {

  const [imageSrc, setImageSrc] = useState(item.link)


  useEffect(() => {
    setImageSrc(item.link)
  }, [item])

  /* 
      Tvær týpur af myndum sem eru ekki æskilegar, valda óæskilegum villum. Sleppum þeim!
  */
  return (
    item.link.includes("x-raw-image") || item.link.includes("lookaside") ? null :
      <Box>
        <Image onError={() => setImageSrc(item.image.thumbnailLink)} src={imageSrc}></Image>
      </Box>
  )
}

export default ResultBox
