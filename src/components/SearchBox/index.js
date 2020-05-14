import React, { useContext } from 'react'
import { SearchContext } from "../../context/search"

import { Container } from "./styled"
import Takki from "../Takki"

const SearchBox = ({ in: inProp }) => {

  const { setApiUrl, param, setParam, defaultUrl } = useContext(SearchContext)

  return (
    <>
      <Container>
        <input
          type="text"
          placeholder={param}
          value={param}
          onChange={(e) => setParam(e.target.value)}
        ></input>
        <Takki label={<i className="gg-search"></i>} action={() => {
          setApiUrl(defaultUrl(param))
        }}></Takki>
      </Container>
      <link href='https://css.gg/search.css' rel='stylesheet'></link>
    </>
  )
}

export default SearchBox
