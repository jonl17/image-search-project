import React from 'react'
import { Container } from "./styled"

const SearchInfo = ({ time, nextPageBtn: NextPageBtn, previousPageBtn: PreviousPageBtn }) => {
  return (
    <>
      <Container>
        <p>Leitin tók {time} sek</p>
        <div className="pagination-wrap">
          {PreviousPageBtn && PreviousPageBtn}
          {NextPageBtn && NextPageBtn}
        </div>
      </Container>
      <link href='https://css.gg/arrow-right.css' rel='stylesheet'></link>
      <link href='https://css.gg/arrow-left.css' rel='stylesheet'></link>
    </>
  )
}

export default SearchInfo
