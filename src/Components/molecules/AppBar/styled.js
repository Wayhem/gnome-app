import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(() => ({
  button: {
    margin: '0 auto',
    width: '100%',
    textAlign: 'left',
    fontFamily: 'Inter',
  },
}))

export const Row = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1rem;

  @media screen and (max-width: 991px) {
    /* start of large tablet styles */
  }

  @media screen and (max-width: 767px) {
    /* start of medium tablet styles */
  }

  @media screen and (max-width: 479px) {
    /* start of phone styles */
  }
`

export const TownsContainer = styled.div`
  text-align: left;
  border-radius: 0 0 8px 8px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.24), 0px 0px 2px rgba(0, 0, 0, 0.12);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  max-height: 14rem;
  overflow-y: scroll;
  background: #fff;
  display: ${props => props.display};

  :hover {
    .selected {
      background-color: #fff;
    }
  }

  ::-webkit-scrollbar {
    display: none;
  }

  .icon-arrow {
    opacity: 0;
    transition: all 0.2s;
    margin: 3px 10px;
    display: inline-block;
  }
`

export const StyledText = styled.div`
  transition: all 0.2s;
  padding: 0;
`

export const Town = styled.div`
  display: flex;
  padding: 0.5rem 1rem;
  cursor: pointer;
  align-items: center;
  transition: all 0.2s;

  &.selected {
    background-color: #eaeaea;
    &:hover {
      background-color: #eaeaea;
    }

    .icon-arrow {
      opacity: 1;
    }
  }

  :hover {
    background-color: #eaeaea;

    .icon-arrow {
      opacity: 1;
    }
  }
`

export const SelectorContainer = styled.div`
  width: 14rem;
  margin: 0 auto;
`
