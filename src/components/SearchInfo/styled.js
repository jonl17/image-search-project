import styled from "styled-components"

export const Container = styled.div`
  height: var(--mediumPad);
  display: flex;
  justify-content: space-between;
  padding-bottom: var(--smallPad);
  p {
    margin: 0;
    display: flex;
    align-items: center;
  }
  .pagination-wrap {
    display: flex;
    justify-content: space-between;
    button {
      margin-left: var(--smallPad);
    }
  }
`