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
      <AboutText loc="AboutText">
        credits:
        <a href="https://www.freepik.com/free-vector/old-paper-background-with-stains_897940.htm#fromView=search&page=1&position=1&uuid=5324dae9-1f13-4763-a6da-3e59b6e6be57">
          Image by kjpargeter on Freepik
        </a>
      </AboutText>
    </>
  );
}

export default About;
