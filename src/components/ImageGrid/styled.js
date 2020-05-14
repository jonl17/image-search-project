import styled from "styled-components"

export const Grid = styled.div`
  
  background: var(--primary);
  padding: ${props => props.padding};
  .grid {
    display: grid;
    grid-auto-rows: var(--boxSize);
    grid-template-columns: repeat( auto-fit, minmax(var(--boxSize), 1fr) );
    gap: var(--smallPad);
    @media (max-width: 650px) {
      gap: var(--mediumPad);
    }
  }

`