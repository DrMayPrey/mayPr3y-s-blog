import { Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";
import cat from './cat.jpeg';



const StyledLink = styled(Link)`
  color: white;
  underlined: none;
  text-decoration: none;
  justify-content: space-around;

  background-color: #696868;
  padding: 14px;
  margin-top:10px;
`
const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const A = styled.a`
  color: white;
  underlined: none;
  text-decoration: none;
  justify-content: space-around;

  background-color: #696868;
  padding: 14px;
  margin-top:10px;
`
const NavBar = styled.nav`
  background-color: red;
  align-items: center;
`
function Home() {
  return (
    <>
      <NavBar>
       <StyledLink  to="/about">About</StyledLink>
       <A href="https://twitter.com/DrMayPrey">Twitter</A>
       <A href="https://www.linkedin.com/in/jakub-oleszczuk-25750316b/?locale=en_US">LinkedIn</A>
      </NavBar>

      <Main>
        <p>Here Will be everyday one article, for now have a cat because page is in build</p>
        <img src={cat} alt="Cat"/>

      </Main>
    </>
  );
}

function About() {
  return (
    <>
      
      <NavBar>
        <StyledLink to="/">Home</StyledLink>
        <A href="https://twitter.com/DrMayPrey">Twitter</A>
        <A href="https://www.linkedin.com/in/jakub-oleszczuk-25750316b/?locale=en_US">LinkedIn</A>
      </NavBar>
      <Main>
        <h2>Im Jakub, I'm Web Developer by hobby</h2>
        <p>
          I'm 19 y/o, student of Engineering in Centre of Vocational and Continuing Education in Poland
        </p>
      </Main>
    </>
  );
}
function App() {
  return (
    <Main>
      <h1>Jacob's blog</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </Main>
  );
}

export default App;
