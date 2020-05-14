import styled from "styled-components"

export const Button = styled.button`
  background: var(--primary);
  border: none;
  color: var(--black);
  font-size: var(--paragraphSize);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 75px;
  &&:hover {
    cursor: pointer;
  }
`