import styled from "styled-components"

export const Grid = styled.div`
  display: grid;
  grid-auto-rows: minmax(var(--boxSize), auto);
  gap: var(--smallPad);
  grid-template-columns: repeat( auto-fit, minmax(var(--boxSize), 1fr) );
  background: var(--primary);
  padding: ${props => props.padding};
`