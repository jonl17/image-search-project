import React from 'react'
import { Container } from "./styled"
import Takki from "../Takki"

const SearchInfo = ({ context, time, nextPage, previousPage }) => {

  const template = (cx, index) => {
    return `${cx}&start=${index}&`
  }

  const { setApiUrl, nextPageUrl } = context

  return (
    <>
      <Container>
        <p>Leitin tók {time} sek</p>
        <div className="pagination-wrap">

          {previousPage && <Takki label={<i className="gg-arrow-left"></i>} action={() => setApiUrl(nextPageUrl(template(previousPage.cx, previousPage.startIndex)))}></Takki>}
          {nextPage && <Takki label={<i className="gg-arrow-right"></i>} action={() => setApiUrl(nextPageUrl(template(nextPage.cx, nextPage.startIndex)))}></Takki>}

        </div>
      </Container>
      <link href='https://css.gg/arrow-right.css' rel='stylesheet'></link>
      <link href='https://css.gg/arrow-left.css' rel='stylesheet'></link>
    </>
  )
}

export default SearchInfo
