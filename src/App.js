import Container from "./components/container/Container";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Experience from "./components/experience/Experience";
import Gaming from "./components/gaming/Gaming";
import Loyalty from "./components/loyalty/Loyalty";
function App() {
  return (
    <>
      <Container>
        <Header />
        <Hero />
        <Experience />
        <Gaming />
        <Loyalty />
      </Container>
    </>
  );
}

export default App;
