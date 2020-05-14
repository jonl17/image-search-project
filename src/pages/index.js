import React from "react"

import PageWrap from "../components/PageWrap"
import SearchBox from "../components/SearchBox"
import SearchResults from "../components/SearchResults"

export default () => {
  return (

    <PageWrap>
      <SearchBox></SearchBox>
      <SearchResults></SearchResults>
    </PageWrap>


  )
}

