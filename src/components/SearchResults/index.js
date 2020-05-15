import React, { useContext, useEffect, useState } from 'react'
import useSearch from "../../hooks/useSearch"
import { SearchContext } from '../../context/search'

import { Container } from "./styled"
import SearchInfo from "../SearchInfo"
import ImageGrid from "../ImageGrid"

const SearchResults = () => {

  const { apiUrl, setApiUrl, nextPageUrl } = useContext(SearchContext)

  const { isLoading, data } = useSearch(apiUrl)

  const [nextPage, setNextPage] = useState(null)
  const [previousPage, setPreviousPage] = useState(null)

  useEffect(() => {

    if (!isLoading) {
      if (data.queries.nextPage) {
        setNextPage({ ...data.queries.nextPage[0] })
      }
      if (data.queries.previousPage) {
        setPreviousPage({ ...data.queries.previousPage[0] })
      }
      if (!data.queries.previousPage) {
        setPreviousPage(null)
      }
    }
  }, [data, apiUrl, isLoading])

  return (
    <Container>

      {data && <SearchInfo
        context={{ nextPageUrl, setApiUrl }}
        time={data.searchInformation.formattedSearchTime}
        nextPage={nextPage}
        previousPage={previousPage}
      >
      </SearchInfo>}

      {!isLoading ?
        <>
          {data && data.items ?
            <ImageGrid items={data.items}></ImageGrid>
            : null}
        </>
        : <p>...hleður</p>}
    </Container >
  )
}

export default SearchResults
