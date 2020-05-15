import styled, { keyframes } from "styled-components"

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const Grid = styled.div`

  opacity: 0;
  animation: ${fadeIn} 0.5s forwards;

  background: var(--primary);
  padding: ${props => props.padding};

  .grid {
    display: grid;
    grid-auto-rows: var(--boxSize);

    grid-template-columns: repeat( auto-fit, minmax(var(--boxSize), 1fr) );
    gap: var(--smallPad);
    @media (max-width: 650px) {
      gap: var(--mediumPad);
      grid-auto-rows: 1fr;
    }
  }

`