import React, { useState, createContext } from 'react'

export const SearchContext = createContext()

const Provider = ({ children }) => {

  const [param, setParam] = useState("Kisur")

  const defaultUrl = (param) => {
    if (param.length > 1) {
      return "https://content.googleapis.com/customsearch/v1?cx=001361074102112665899%3Ap7mybnrloug&q="
        + param
        + "&searchType=image&key="
        + process.env.GATSBY_API_KEY
    }
  }

  // köllum þetta nextPage en virkar líka fyrir previous page
  const nextPageUrl = (nextPageCx) => {
    if (param.length > 1) {
      return "https://content.googleapis.com/customsearch/v1?cx=" + nextPageCx + "&q="
        + param
        + "&searchType=image&key="
        + process.env.GATSBY_API_KEY
    }
  }

  const [apiUrl, setApiUrl] = useState(defaultUrl(param))

  return (
    <SearchContext.Provider value={{ apiUrl, setApiUrl, param, setParam, defaultUrl, nextPageUrl }}>
      {children}
    </SearchContext.Provider>
  )
}

export default Provider
