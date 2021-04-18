import styled from 'styled-components';

export const SignInAndSignUpContainer = styled.div`
  width: 850px;
  display: flex;
  justify-content: space-between;
  margin: 30px auto;

  @media screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr ;
    width: 100%;
    justify-items: center;
    grid-gap: 50px;
  }
`;