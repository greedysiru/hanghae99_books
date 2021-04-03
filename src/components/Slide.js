import React from 'react';
import Carousel from "react-material-ui-carousel"
import autoBind from "auto-bind"
import '../styles/slide.scss';

// 메인페이지의 슬라이드

// 슬라이드에 필요한 요소 가져오기
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Button,
  Checkbox,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormLabel,
  Slider,
  IconButton
} from '@material-ui/core';

function Banner(props) {
  if (props.newProp) console.log(props.newProp)
  const contentPosition = props.contentPosition ? props.contentPosition : "left"
  const totalItems = props.length ? props.length : 3;
  const mediaLength = totalItems - 1;

  let items = [];
  const content = (
    <Grid item xs={12 / totalItems} key="content">
      <CardContent className="Content">
        <Typography className="Title">
          {props.item.Name}
        </Typography>

        <Typography className="Caption">
          {props.item.Caption}
        </Typography>

        <Button variant="outlined" className="ViewButton">
          View Now
                </Button>
      </CardContent>
    </Grid>
  )


  for (let i = 0; i < mediaLength; i++) {
    const item = props.item.Items[i];

    const media = (
      <Grid item xs={12 / totalItems} key={item.Name}>
        <CardMedia
          className="Media"
          image={item.Image}
          title={item.Name}
        >
          <Typography className="MediaCaption">
            {item.Name}
          </Typography>
        </CardMedia>

      </Grid>
    )

    items.push(media);
  }

  if (contentPosition === "left") {
    items.unshift(content);
  } else if (contentPosition === "right") {
    items.push(content);
  } else if (contentPosition === "middle") {
    items.splice(items.length / 2, 0, content);
  }

  return (
    <Card raised className="Banner">
      <Grid container spacing={0} className="BannerGrid">
        {items}
      </Grid>
    </Card>
  )
}

// 슬라이드를 구성하는 컨텐츠
const items = [
  {
    Name: "Electronics",
    Caption: "Electrify your friends!",
    contentPosition: "left",
    Items: [
      {
        Name: "Macbook Pro",
        Image: "https://source.unsplash.com/featured/?macbook"
      },
      {
        Name: "iPhone",
        Image: "https://source.unsplash.com/featured/?iphone"
      }
    ]
  },
  {
    Name: "Home Appliances",
    Caption: "Say no to manual home labour!",
    contentPosition: "middle",
    Items: [
      {
        Name: "Washing Machine WX9102",
        Image: "https://source.unsplash.com/featured/?washingmachine"
      },
      {
        Name: "Learus Vacuum Cleaner",
        Image: "https://source.unsplash.com/featured/?vacuum,cleaner"
      }
    ]
  },
  {
    Name: "Decoratives",
    Caption: "Give style and color to your living room!",
    contentPosition: "right",
    Items: [
      {
        Name: "Living Room Lamp",
        Image: "https://source.unsplash.com/featured/?lamp"
      },
      {
        Name: "Floral Vase",
        Image: "https://source.unsplash.com/featured/?vase"
      }
    ]
  }
]

class Slide extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      autoPlay: true,
      animation: "slide",
      indicators: false,
      timeout: 1000,
      navButtonsAlwaysVisible: true,
      navButtonsAlwaysInvisible: false,
      cycleNavigation: true,
    }

    autoBind(this);
  }


  render() {
    return (
      <div style={{ color: "#494949" }}>

        <Carousel
          className="carousel"
          autoPlay={this.state.autoPlay}
          animation={this.state.animation}
          indicators={this.state.indicators}
          timeout={this.state.timeout}
          cycleNavigation={this.state.cycleNavigation}
          navButtonsAlwaysVisible={this.state.navButtonsAlwaysVisible}
          navButtonsAlwaysInvisible={this.state.navButtonsAlwaysInvisible}
        // next={(now, previous) => console.log(`Next User Callback: Now displaying child${now}. Previously displayed child${previous}`)}
        // prev={(now, previous) => console.log(`Prev User Callback: Now displaying child${now}. Previously displayed child${previous}`)}
        // onChange={(now, previous) => console.log(`OnChange User Callback: Now displaying child${now}. Previously displayed child${previous}`)}

        >
          {
            items.map((item, index) => {
              return <Banner item={item} key={index} contentPosition={item.contentPosition} />
            })
          }
        </Carousel>




      </div>

    )
  }
}

export default Slide;