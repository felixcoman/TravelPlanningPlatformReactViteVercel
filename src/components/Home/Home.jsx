import MainButtons from "../MainHome/MainButtons";
import MainHome from "../MainHome/MainHome";
import { HomeContainer } from "./Home.style";

function Home() {
  return (
    <HomeContainer loc="HomeContainer">
      <MainHome />
      <MainButtons />
    </HomeContainer>
  );
}

export default Home;
