import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  > header {
    width: 100%;
    height: 145px;

    display: flex;
    align-items: center;
    padding: 0 120px;

    background: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    svg {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      font-size: 30px;

      transition: all 0.2s;
      :hover {
        color: ${({ theme }) => theme.COLORS.WHITE};
        scale: 1.2;
      }
    }
  }
`

export const Form = styled.form`
  max-width: 350px;
  margin: 30px auto 0;

  > div:nth-child(3) {
    margin-bottom: 25px;
  }
`

export const Avatar = styled.div`
  position: relative;
  margin: -120px auto 64px;

  width: 185px;
  height: 185px;

  > img {
    width: 185px;
    height: 185px;
    border-radius: 50%;
    box-shadow: 8px 5px 5px black;
  }

  > label {
    width: 48px;
    height: 48px;

    background-color: ${({ theme }) => theme.COLORS.ORANGE};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 7px;
    right: 7px;

    cursor: pointer;

    input {
      display: none;
    }

    svg {
      width: 20px;
      height: 20px;
      color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    }

    transition: all 0.2s;
    :hover {
      scale: 1.2;
    }
  }
`
