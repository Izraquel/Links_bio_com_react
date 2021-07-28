import React from 'react';
import {
  FaEnvelope,
  FaInstagramSquare,
  FaLinkedinIn,
  FaGithub,
} from 'react-icons/fa';

import raquel from '../../assets/img/raquel.jpeg';
import {
  Main,
  Header,
  Name,
  Profile,
  Description,
  Grid_cards,
  Button,
} from './styles';

function Home() {
  return (
    <>
      <Main>
        <Header>
          <Profile src={raquel} />
          <Name>Raquel Izidório</Name>
          <Description>@raquelizidorio_</Description>
        </Header>

        <Grid_cards>
          <Button
            href="https://www.instagram.com/raquelizidorio_/"
            className="item_instagram"
          >
            <FaInstagramSquare className="instagram" size={45} />
            <p>Instagram</p>
          </Button>

          <Button
            href="https://github.com/Izraquel"
            className="item_github"
          >
            <FaGithub className="github" color="white" size={45} />
            <p>GitHub</p>
          </Button>

          <Button
            href="https://www.linkedin.com/in/raquel-izidorio/"
            className="item_linkedin"
          >
            <FaLinkedinIn className="linkedin" color="white" size={45} />
            <p>LinkedIn</p>
          </Button>

          <Button
            href="mailto:raquell-izidorio_29@hotmail.com"
            className="item_email"
          >
            <FaEnvelope className="email" color="white" size={45} />
            <p>Email</p>
          </Button>
        </Grid_cards>
      </Main>
    </>
  );
}

export default Home;
