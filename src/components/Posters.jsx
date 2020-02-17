import React from 'react';
import Particles from 'react-particles-js'
import {withStyles, Grid} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import day1 from "../assets/day1.jpg";
import day2 from "../assets/day2.jpg";
import day3 from "../assets/day3.jpg";
import day4 from "../assets/day4.jpg";
import day5 from "../assets/day5.jpg";
import day6 from "../assets/day6.jpg";
import day7 from "../assets/day7.jpg";
import day8 from "../assets/day8.jpg";
import day9 from "../assets/day9.jpg";
import day10 from "../assets/day10.jpg";
import day11 from "../assets/day11.jpg";
import day12 from "../assets/day12.jpg";
import day13 from "../assets/day13.jpg";
import day14 from "../assets/day14.jpg";
import day15 from "../assets/day15.jpg";
import day16 from "../assets/day16.jpg";
import day17 from "../assets/day17.jpg";
import day18 from "../assets/day18.jpg";
import day19 from "../assets/day19.jpg";
import day20 from "../assets/day20.jpg";
import day21 from "../assets/day21.jpg";
import day22 from "../assets/day22.jpg";

import InfoIcon from '@material-ui/icons/Info';
import Paper from '@material-ui/core/Paper';


const styles = theme => ({
  body: {
    position: 'relative', 
    height: '200',
    width: '50',
    [theme.breakpoints.down('xs')]:{
      height: 300,
    }
    },
    h3:{
      margin: 0, 
      position: 'absolute', 
      top: '50%', 
      left: '50%', 
      transform: 'translate(-50%, -50%)',
    }
})

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    fexGrow: 1,
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  gridList: {
    width: 200,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));  


class Posters extends React.Component { 
render() {
  const {classes} = this.props
  return (
    <div container className={classes.container}>
    <Grid item style={{backgroundColor: 'red', width: '100%'}}>
      <Particles className="particles" params={particlesOptions}/> 
      <h1 className="threesixfive" >365</h1>
      <h1 style={{fontSize: 350, color: 'white', marginBottom: 0}}>POSTERS</h1>
    </Grid>
    <Grid container spaceing={3}>
      <Grid item xs><Paper className={classes.paper}>HI</Paper></Grid>
      <Grid item xs={6} align='center'>
        <Paper className={classes.paper}>I STARTED THE JOURNEY OF CLOMPLETING ONE POSTER A DAY (EVERYDAY) FOR AN ENTIRE YEAR ON MAY 3RD OF 2019. IT WAS AN AWESOME EXPERIENCE WITH LOTS OF LEARNING OPPORTUNITIES. IT WAS TRYING, IT WAS REWARDING, IT WAS STRESSFUL.</Paper>
      </Grid>
      <Grid item xs><Paper className={classes.paper}>TEST</Paper></Grid>
      </Grid>
    <Grid item className={classes.root}>
      <GridList cellHeight={300} cols={8} className={classes.gridList}>
        {tileData.map(tile => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>by: {tile.author}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </Grid>
   </div>
  );
}
}



const particlesOptions = {
  "particles": {
    "number": {
      "value": 120,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 2
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 100,
        "duration": 0.6
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}


const tileData = [
  {
    img: day1,
    title: 'Image',
    author: 'author',
    featured: true,
  },
  {
    img: day2,
    title: 'Image',
    author: 'author',
    featured: true,
  },
  {
    img: day3,
    title: 'Image',
    author: 'author',
    featured: true,
  },
  {
    img: day4,
    title: 'Image',
    author: 'author',
    featured: true,
  },
  {
    img: day5,
    title: 'Image',
    author: 'author',
    featured: true,
  },
  {
    img: day6,
    title: 'Image',
    author: 'author',
    featured: true,
  },
  {
    img: day7,
    title: 'Image',
    author: 'author',
    featured: true,
  },
  {
    img: day8,
    title: 'Image',
    author: 'author',
    featured: true,
  },
  {
    img: day9,
    title: 'Image',
    author: 'author',
    featured: true,
  },
  {
    img: day10,
    title: 'Image',
    author: 'author',
    featured: true,
  },
  {
    img: day11,
    title: 'Image',
    author: 'author',
    featured: true,
  },
  {
    img: day12,
    title: 'Image',
    author: 'author',
    featured: true,
  },
  {
    img: day13,
    title: 'Image',
    author: 'author',
    featured: true,
  },
  {
    img: day14,
    title: 'Image',
    author: 'author',
    featured: true,
  },
  {
    img: day15,
    title: 'Image',
    author: 'author',
    featured: true,
  },
  {
    img: day16,
    title: 'Image',
    author: 'author',
    featured: true,
  },
  {
    img: day17,
    title: 'Image',
    author: 'author',
    featured: true,
  },
  {
    img: day18,
    title: 'Image',
    author: 'author',
    featured: true,
  },
  {
    img: day19,
    title: 'Image',
    author: 'author',
    featured: true,
  },
  {
    img: day20,
    title: 'Image',
    author: 'author',
    featured: true,
  },
  {
    img: day21,
    title: 'Image',
    author: 'author',
    featured: true,
  },
  {
    img: day22,
    title: 'Image',
    author: 'author',
    featured: true,
  },
];




Posters.displayName = 'Posters'

export default (
  withStyles(useStyles)
)(Posters)