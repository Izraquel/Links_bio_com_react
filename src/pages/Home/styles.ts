import styled from 'styled-components';

export const Main = styled.div`
  padding: 32px;
  text-align: center;
  display: relative;
  justify-content: center;
  max-width: 100%;
`;
export const Profile = styled.img`
  width: 150px;
  border-radius: 50%;
`;

export const Header = styled.header``;

export const Name = styled.h1`
  font-size: 30px;
`;

export const Description = styled.p`
  color: rgb(117, 116, 116);
  font-size: 18px;
  padding-top: 5px;
`;

export const Grid_cards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  cursor: pointer;
  text-align: center;
  justify-content: center;
  margin-top: 50px;

  a {
    text-decoration: none;
    color: white;
  }

  .item_instagram {
    background: linear-gradient(
      45deg,
      #f09433 0%,
      #e6683c 25%,
      #dc2743 50%,
      #cc2366 75%,
      #bc1888 100%
    );
    height: 100%;
    width: 100%;
    border-radius: 5px;
  }

  .instagram,
  .github,
  .linkedin,
  .email {
    padding: 8px;
  }

  .item_github {
    background: linear-gradient(58deg, #722cd8 8%, #9a56fd 98%);
    height: 100px;
    width: 100%;

    border-radius: 5px;
  }

  .item_linkedin {
    background: linear-gradient(45deg, #005aa7 0%, #1a84ca 25%);
    height: 100px;
    width: 100%;

    border-radius: 5px;
  }

  .item_email {
    background: linear-gradient(58deg, rgb(32, 31, 33) 8%, rgb(50, 48, 53) 98%);
    height: 100px;
    width: 100%;

    border-radius: 5px;
  }

  @media (max-width: 540px) {
    margin-top: 2.4rem;
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;
export const Button = styled.a`
  max-width: 100%;

  &:hover,
  &:active {
    transition: 5ms;
    opacity: 0.8;
  }

  p {
    font-weight: 400;
  }
`;
