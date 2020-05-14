import styled from "styled-components"

export const Grid = styled.div`
  display: grid;
  grid-auto-rows: var(--boxSize);
  gap: var(--smallPad);
  grid-template-columns: repeat( auto-fit, minmax(var(--boxSize), 1fr) );
  background: var(--lighterGray);
  padding: var(--smallPad) 0;
`