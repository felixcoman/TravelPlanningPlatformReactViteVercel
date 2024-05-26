import Slider from "./Slider";
import { AboutText } from "./About.style";

function About() {
  return (
    <>
      <AboutText loc="AboutText">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin accumsan
        vulputate velit, sed tincidunt augue maximus at. Curabitur vel ex
        ullamcorper, tempor tellus ac, fermentum tortor. Sed pharetra felis
        consequat, mollis lectus sed, maximus dolor. Donec vel metus ac massa
        pretium fermentum at .
      </AboutText>
      <Slider loc="Slider" />
      <AboutText loc="AboutText">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin accumsan
        vulputate velit, sed tincidunt augue maximus at. Curabitur vel ex
        ullamcorper, tempor tellus ac, fermentum tortor. Sed pharetra felis
        consequat, mollis lectus sed, maximus dolor. Donec vel metus ac massa
        pretium fermentum at aliquet nunc. Vivamus fermentum quam eget odio
        gravida aliquet. Integer accumsan est dolor, quis tristique ante dictum
        sed. Integer felis orci, molestie non risus ac, eleifend efficitur dui.
        Vestibulum sagittis, lacus ac ornare dapibus, leo eros volutpat quam,
        vel ullamcorper augue nisi ut lorem. In justo est, dictum id nibh
        ullamcorper, semper sollicitudin lacus. Curabitur iaculis aliquam
        faucibus. Nam semper massa vitae nisl bibendum, non interdum augue.
      </AboutText>
    </>
  );
}

export default About;
