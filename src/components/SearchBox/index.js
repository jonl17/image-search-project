import React, { useContext } from 'react'
import { SearchContext } from "../../context/search"

import { Container } from "./styled"
import Takki from "../Takki"

const SearchBox = () => {

  const { setApiUrl, param, setParam, defaultUrl } = useContext(SearchContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    setApiUrl(defaultUrl(param))
  }

  return (
    <>
      <Container onSubmit={(e) => handleSubmit(e)}>
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
