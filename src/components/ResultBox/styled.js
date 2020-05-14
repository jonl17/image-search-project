import styled from "styled-components"

export const Wrap = styled.div`
`
export const Box = styled.div`
  height: 100%;
  width: 100%;  
  overflow: hidden;
  display: grid;
  grid-template-rows: 1fr 0.5fr;
  position: relative;
  justify-content: center;
  align-items: center;
  .image-text {
    text-align: center;
    box-sizing: border-box;
    padding: 0 var(--smallPad);
  }
`
export const Image = styled.img`
  height: 100%;
  object-fit: contain;
  justify-self: center;
`