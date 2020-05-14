import styled from "styled-components"

export const Container = styled.div`
  height: 100%;
  width: 100%;
  background: var(--lightGray);
  box-sizing: border-box;
  padding: var(--smallPad);
  position: relative;
  /* grid */
  .image-grid {
    display: grid;
    grid-auto-rows: var(--boxSize);
    gap: var(--smallPad);
    grid-template-columns: repeat( auto-fit, minmax(var(--boxSize), 1fr) );
  }
  .load-btn-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`