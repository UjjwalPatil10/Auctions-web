import styled from 'styled-components'

export const Styles = styled.div`
  .table {

    &.sticky {
      overflow: scroll;
      .header,

      .header {
        top: 0;
        box-shadow: 0px 3px 3px #ccc;
      }

      [data-sticky-td] {
        position: sticky;
      }

      [data-sticky-last-left-td] {
        box-shadow: 2px 0px 3px #ccc;
      }

      [data-sticky-first-right-td] {
        box-shadow: -2px 0px 3px #ccc;
      }
    }
  }
`