import Container from "./components/container/Container";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Experience from "./components/experience/Experience";
import Gaming from "./components/gaming/Gaming";
import Loyalty from "./components/loyalty/Loyalty";
import Video from "./components/video/Video";
import Bonus from "./components/bonus/Bonus";
function App() {
  return (
    <>
      <Container>
        <Header />
        <Hero />
        <Experience />
        <Gaming />
        <Loyalty />
        <Video />
        <Bonus />
      </Container>
    </>
  );
}

export default App;
