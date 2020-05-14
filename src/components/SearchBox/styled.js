import styled from "styled-components"

export const Container = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  input {
    border: none;
    background: var(--lightGray);
    font-size: var(--paragraphSize);
    box-sizing: border-box;
    padding: var(--smallPad);
    margin-right: var(--smallPad);
    ::placeholder {
      color: var(--gray);
    }
  }
`
