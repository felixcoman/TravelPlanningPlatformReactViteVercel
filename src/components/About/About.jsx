import {
  AboutText,
  AboutTextCenter,
  AboutTitle,
  MainAbout,
  CreditsSection,
  CreditsText,
} from "./About.style";
import Slider from "./Slider";

function About() {
  return (
    <MainAbout loc="MainAbout">
      <AboutTitle loc="AboutTitle">About Us</AboutTitle>
      <AboutText loc="AboutText">
        Welcome to our tourism web page, your ultimate gateway to a world of
        travel possibilities. Our platform is designed to make your travel
        planning seamless, personalized, and enjoyable. Whether you're looking
        to explore specific destinations or prefer a tailored travel program,
        we've got you covered.
      </AboutText>
      <Slider loc="Slider" />
      <small>
        Images from <a href="https://picsum.photos/">Lorem Picsum</a>.
      </small>
      <AboutText loc="AboutText">
        Our website offers two main pathways for your travel planning. You can
        choose to explore specific travel destinations by selecting the country
        and city you're interested in. Once you make your selection, you'll be
        redirected to our Explore page where you can read detailed information
        about the city and select further objectives if available. From here,
        you can directly choose your accommodation options, or add the city and
        its objectives to your Itinerary for later review. The Itinerary tab
        allows you to visualize your selections as cards, making it easy to
        organize and finalize your travel plans. You can then opt for
        accommodation, with choices ranging from low to high budget based on
        your selections.{" "}
      </AboutText>{" "}
      <AboutText loc="AboutText">
        Alternatively, if you prefer ready-made travel options, you can select a
        country from the homepage and be redirected to a page where you can
        choose between cities or regions. You'll then select your travel
        period—3, 5, or 7 days—and your budget preference. These selections can
        be saved to the Choices tab, where you can easily visualize or delete
        them as needed.{" "}
      </AboutText>{" "}
      <AboutText loc="AboutText">
        Our About page provides a comprehensive overview of our website and
        acknowledges the copyright credits that protect our content.
      </AboutText>{" "}
      <AboutText loc="AboutText">
        In the Contact page, you have the opportunity to register and provide
        feedback, helping us improve your user experience.
      </AboutText>{" "}
      <AboutText loc="AboutText">
        The Account page allows you to manage your login details, create a new
        account, or logout. Existing users can retrieve their saved travel
        options from our server, while new users can easily create an account to
        start their travel planning journey.{" "}
      </AboutText>{" "}
      <AboutTextCenter loc="AboutTextCenter">
        <em>
          Thank you for choosing our platform. We are committed to making your
          travel dreams a reality!
        </em>
      </AboutTextCenter>
      <AboutTitle loc="AboutTitle">Credits</AboutTitle>
      <CreditsSection loc="CreditsText">
        <CreditsText>Background vintage paper:</CreditsText>
        <a href="https://www.freepik.com/free-vector/old-paper-background-with-stains_897940.htm#fromView=search&page=1&position=1&uuid=5324dae9-1f13-4763-a6da-3e59b6e6be57">
          Image by kjpargeter on Freepik
        </a>
        <CreditsText>Spain, Barcelona:</CreditsText>
        <a href="https://www.freepik.com/free-photo/view-park-guell-winter-barcelona_1489321.htm#fromView=search&page=1&position=0&uuid=8811a71f-e0f1-44be-821f-afced1db2825">
          Image by bearfotos on Freepik
        </a>
        <CreditsText>Spain, Seville:</CreditsText>
        <a href="https://www.freepik.com/free-photo/beautiful-view-plaza-de-espana-seville-spain_15696553.htm#fromView=search&page=1&position=1&uuid=aabda1e3-6f8e-471e-8603-38146201ee8b">
          Image by wirestock on Freepik
        </a>
        <CreditsText>Spain, Valencia:</CreditsText>
        <a href="https://www.freepik.com/free-photo/white-concrete-structure-beside-body-water_12661276.htm#fromView=search&page=1&position=1&uuid=3436f7f2-5749-4fda-ad0c-edeb12dac7a0">
          Image by lucabravo on Freepik
        </a>
        <CreditsText>France, Paris:</CreditsText>
        <a href="https://www.freepik.com/free-photo/sunset-illuminates-famous-city-skyline-romantic-view-generated-by-ai_41481470.htm#fromView=search&page=1&position=2&uuid=d4de4145-ddcd-4f23-9a85-a0abd49ca2b3">
          Image by vecstock on Freepik
        </a>
        <CreditsText>France, Nice Photo by:</CreditsText>
        <span>
          <a href="https://unsplash.com/@_entreprenerd?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            Arno Smit
          </a>{" "}
          on{" "}
          <a href="https://unsplash.com/photos/aerial-photography-of-building-near-seashore-at-daytime-lndaG6uN1yw?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            Unsplash
          </a>
        </span>
        <CreditsText>France, Strasbourg:</CreditsText>
        <a href="https://www.freepik.com/free-photo/canal-surrounded-by-buildings-greenery-cloudy-sky-strasbourg-france_10303436.htm#fromView=search&page=1&position=0&uuid=a652776e-0798-43da-9429-dedac9d80b21">
          Image by wirestock on Freepik
        </a>
        <CreditsText>Italy, Rome:</CreditsText>
        <a href="https://www.freepik.com/free-photo/cityscape-rome-ancient-centre-italy_29220759.htm#fromView=search&page=1&position=8&uuid=ea2c7946-dab0-4ba0-9b0c-f416d7f3c7e3">
          Image by frimufilms on Freepik
        </a>
        <CreditsText>Italy, Venice:</CreditsText>
        <a href="https://www.freepik.com/free-photo/basilica-santa-maria-della-salud-venice_12177119.htm#fromView=search&page=1&position=2&uuid=4a7c87dc-15ab-4414-868c-80147630695a">
          Image by wirestock on Freepik
        </a>
        <CreditsText>Italy, Florence:</CreditsText>
        <a href="https://www.freepik.com/free-photo/beautiful-aerial-shot-florence-italy-architecture-evening_7814586.htm#fromView=search&page=1&position=0&uuid=b8ca226a-2a07-48da-87bd-a808e655a62e">
          Image by wirestock on Freepik
        </a>
      </CreditsSection>
    </MainAbout>
  );
}

export default About;
