import React, { useState, useEffect } from 'react'
import { Wrap, Box, Image } from "./styled"

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
      <Wrap>
        <Box>
          <Image onError={() => setImageSrc(item.image.thumbnailLink)} src={imageSrc}></Image>
          <div className="info-wrap">
            <div className="image-text" dangerouslySetInnerHTML={{ __html: item.htmlTitle }}></div>
            <a href={item.image.contextLink} target="_blank" rel="noopener noreferrer">
              <i className="gg-ereader"></i>
            </a>
          </div>
        </Box>
        <link href='https://css.gg/ereader.css' rel='stylesheet'></link>
      </Wrap>
  )
}

export default ResultBox
