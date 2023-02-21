import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  > header {
    width: 100%;
    height: 145px;

    display: flex;
    align-items: center;
    padding: 0 120px;

    background: ${({theme}) => theme.COLORS.BACKGROUND_900};

    svg {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      font-size: 30px;
      transition: all 0.2s;

      :hover {
        color: ${({ theme }) => theme.COLORS.WHITE};
        scale: 1.1;
      }
    }
  }
`

export const Form = styled.form`
  max-width: 350px;

  margin: 30px auto 0;

  
`