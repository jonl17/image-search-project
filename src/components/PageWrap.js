import React from 'react'
import "../../static/global.css"
import styled from "styled-components"
import Provider from "../context/search"

const Wrap = styled.div`
  min-height: 100vh;
  box-sizing: border-box;
  padding: var(--smallPad);
  display: grid;
  grid-template-rows: auto 1fr;
  gap: var(--smallPad);
`

const PageWrap = ({ children }) => {
  return (
    <Wrap>
      <Provider>
        {children}
      </Provider>
    </Wrap>
  )
}

export default PageWrap
