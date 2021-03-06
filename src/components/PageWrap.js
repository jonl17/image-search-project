import React from 'react'
import "../../static/global.css"
import styled from "styled-components"
import Provider from "../context/search"

const Wrap = styled.div`
  box-sizing: border-box;
  padding: var(--smallPad) var(--smallPad) var(--mediumPad) var(--smallPad);
  display: grid;
  grid-template-rows: auto 1fr;
  gap: var(--smallPad);
  background: var(--white);
  min-height: 105vh;
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
