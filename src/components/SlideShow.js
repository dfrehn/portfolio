import "./Slider.css";
import React from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "normalize.css/normalize.css";
import SlideOne from "../assets/background365.jpg";
import SlideThree from "../assets/backgroundGraphicDesign.jpg";
import SlideTwo from "../assets/homepageBackground3.jpg";
import { Grid, ButtonBase } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const styles = () => ({});

export class SlideShow extends React.Component {
  render() {
    const content = [
      {
        title: "365 Posters",
        description:
          "This is where I will put a bit of info about this photo. Or section....I have not decided yet.",
        button: "1",
        image: SlideOne
      },
      {
        title: "Web Design",
        description:
          "I will show a piece that I am proud of here and the button below will bring you to all work.",
        button: "2",
        image: SlideTwo,
        link: "/web-design"
      },
      {
        title: "Branding",
        description:
          "I will put some classic graphic design stuff in this section. You will be able to click below to see all of them.",
        button: "3",
        image: SlideThree,
        link: "/posters"
      }
    ];

    const StyledButton = withStyles({
      root: {
        webkitAppearance: "none",
        appearance: "none",
        webkitFilter: "drop-shadow(0 5px 5px rgba(0, 0, 0, 0.1))",
        filter: "drop-shadow(0 5px 5px rgba(0, 0, 0, 0.1))",
        webkitTransition: "all .5s ease",
        transition: "all .5s ease",
        border: "none",
        background: "rgb(0, 236, 253)",
        borderRadius: "30px",
        textTransform: "uppercase",
        boxSizing: "border-box",
        padding: "15px 40px",
        fontWeight: 400,
        fontSize: "13px",
        cursor: "pointer",
        boxShadow: "rgba(255, 255, 255, 0.5)",
        "&:hover": {
          color: "#FFFFFF",
          background: "#222222",
          webkitFilter: "drop-shadow(0 0 5px rgba(0, 0, 0, 0.2))",
          filter: "drop-shadow(0 0 5px rgba(0, 0, 0, 0.2))"
        }
      }
    })(ButtonBase);

    return (
      <Grid container>
        <Grid item xs={12}>
          <Slider
            className="slider-wrapper"
            infinite="false"
            autoplay="2000 (ms)"
          >
            {content.map((item, index) => (
              <Grid
                item
                key={index}
                className="slider-content"
                style={{
                  background: `url('${item.image}') no-repeat center center`,
                  backgroundSize: "cover",
                  position: "fixed"
                }}
              >
                <Grid item className="inner">
                  <h1>{item.title}</h1>
                  <p>{item.description}</p>
                  <StyledButton component={Link} to={item.link}>
                    Click Here
                  </StyledButton>
                </Grid>
              </Grid>
            ))}
          </Slider>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(SlideShow);
