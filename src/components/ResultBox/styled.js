import styled from "styled-components"

export const Wrap = styled.div`
`
export const Box = styled.div`
  height: 100%;
  width: 100%;  
  display: grid;
  grid-template-rows: 1fr 0.6fr;
  position: relative;
  justify-content: center;
  align-items: center;
  .info-wrap {
    box-sizing: border-box;
    padding: 5%;
    margin: 0 5%;
    background: var(--white);
    border-radius: 10px;
    display: grid;
    grid-template-columns: 1fr auto;
    gap: var(--smallPad);
    justify-content: center;
    align-items: center;
    a {
      color: gray;
    }
    a:hover {
      color: black;
      cursor: pointer;
    }
  }
  
`
export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
  justify-self: center;
  @media (max-width: 650px) {
    height: auto;
    width: 100%;
  }
`