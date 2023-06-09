import Container from "./components/container/Container";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Experience from "./components/experience/Experience";
import Gaming from "./components/gaming/Gaming";
function App() {
  return (
    <>
      <Container>
        <Header />
        <Hero />
        <Experience />
        <Gaming />
      </Container>
    </>
  );
}

export default App;
