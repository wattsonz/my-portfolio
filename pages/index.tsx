import styled from 'styled-components'
// import { useEffect, useState } from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
// import { useTransition, animated, config } from '@react-spring/web'
import Head from 'next/head'

type Props = {}

const Div = styled.div`
  /* flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;
  text-align: center; */
  text-align: center;

  h1 {
    display: inline;
    text-align: center;
    font-weight: 800;
    color: #91d6e7;
    font-size: 14vw;
    text-shadow: -1px -10px 0 #000, 1px -10px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
  }

  h2 {
    display: inline;
    text-align: center;
    font-weight: 400;
    color: white;
    font-size: 12vw;
    text-shadow:  10px -10px 0 #000;
  }

  h3 {
    display: inline;
    text-align: center;
    font-weight: 200;
    color: white;
    font-size: 9vw;
    text-shadow:  10px -10px 0 #000;
  }

  h4 {
    text-align: center;
    font-weight: 200;
    color: white;
    font-size: 6vw;
    text-shadow: -1px -10px 0 #000, 1px -10px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
  }

  h5 {
    text-align: center;
    font-weight: 200;
    color: white;
    font-size: 6vw;
    /* text-shadow: -1px -10px 0 #000, 1px -10px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000; */
  }

  h6 {
    text-align: center;
    font-weight: 500;
    color: white;
    font-size: 9vw;
    text-shadow: -5px -5px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;

    a{
      color:#dde100;
    }
  }

  .label {
    text-align: center;
    font-weight: 500;
    color: #dde100;
    font-size: 9vw;
    text-shadow: -5px -5px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
  }

  .button {
    position:relative;
    display:inline-block;
    margin:20px;
  }

  .button a{
  color:white;
  font-weight:bold;
  font-size:36px;
  text-align: center;
  text-decoration:none;
  background-color:#dbde00;
  display:block;
  position:relative;
  padding:20px 40px;
  
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  text-shadow: -1px 3px 0px #000;
  filter: dropshadow(color=#000, offx=0px, offy=1px);
  
  -webkit-box-shadow:inset 0 1px 0 #cdc98c, 0 10px 0 #9a9000;
  -moz-box-shadow:inset 0 1px 0 #cdc98c, 0 10px 0 #9a9000;
  box-shadow:inset 0 1px 0 #cdc98c, 0 10px 0 #9a9000;
  
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
}

.button a:active{
  top:10px;
  background-color:#dbde00;
  
  -webkit-box-shadow:inset 0 1px 0 #cdc98c, inset 0 -3px 0 #9a9000;
  -moz-box-shadow:inset 0 1px 0 #cdc98c, inset 0 -3pxpx 0 #9a9000;
  box-shadow:inset 0 1px 0 #cdc98c, inset 0 -3px 0 #9a9000;
}

.button:after{
  content:"";
  height:100%;
  width:100%;
  padding:4px;
  position: absolute;
  bottom:-15px;
  left:-4px;
  z-index:-1;
  background-color:#2B1800;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
}

.button-resume {
    position:relative;
    display:inline-block;
    margin:20px;
  }

  .button-resume a{
  color:white;
  font-weight:bold;
  font-size:36px;
  text-align: center;
  text-decoration:none;
  background-color:#00de90;
  display:block;
  position:relative;
  padding:20px 40px;
  
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  text-shadow: -1px 3px 0px #000;
  filter: dropshadow(color=#000, offx=0px, offy=1px);
  
  -webkit-box-shadow:inset 0 1px 0 #8ccdb4, 0 10px 0 #009a76;
  -moz-box-shadow:inset 0 1px 0 #8ccdb4, 0 10px 0 #009a76;
  box-shadow:inset 0 1px 0 #8ccdb4, 0 10px 0 #009a76;
  
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
}

.button-resume a:active{
  top:10px;
  background-color:#00de90;
  
  -webkit-box-shadow:inset 0 1px 0 #8ccdb4, inset 0 -3px 0 #009a76;
  -moz-box-shadow:inset 0 1px 0 #8ccdb4, inset 0 -3pxpx 0 #009a76;
  box-shadow:inset 0 1px 0 #8ccdb4, inset 0 -3px 0 #009a76;
}

.button-resume:after{
  content:"";
  height:100%;
  width:100%;
  padding:4px;
  position: absolute;
  bottom:-15px;
  left:-4px;
  z-index:-1;
  background-color:#2B1800;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
}
`

export default function Home({ }: Props) {

  return (
    <>
      <Head>
        <title>wattson | Portfolio</title>
      </Head>
      <Div>
        <Parallax pages={8.7}>
          <ParallaxLayer
            offset={0}
            speed={1}
            factor={2}
            style={{
              backgroundImage: `url(moon.jpg)`,
              backgroundSize: 'cover',
            }}
          />

          <ParallaxLayer offset={2} speed={1} factor={2}
            style={{
              backgroundImage: `url(transition1.jpg)`,
              backgroundSize: 'cover',
            }}
          />

          <ParallaxLayer
            offset={4}
            speed={1}
            factor={4}
            style={{
              backgroundImage: `url(sky.jpg)`,
              backgroundSize: 'cover',
            }}
          />

          <ParallaxLayer
            offset={7}
            speed={1}
            factor={3}
            style={{
              backgroundImage: `url(land.jpg)`,
              backgroundSize: 'cover',
            }}
          />

          <ParallaxLayer
            offset={0.2}
            speed={0.05}
          >
            <h2>Hi,</h2> <h3> I'm </h3>

            <h4>Woraphrot Wattanaburinkul</h4>
          </ParallaxLayer>

          <ParallaxLayer
            offset={2.5}
            speed={0.03}
          >
            <h1>Just</h1> <h5>a developer.</h5>
          </ParallaxLayer>

          <ParallaxLayer
            offset={5}
            speed={0.05}
          >
            <div><h6>Check out my <a>github</a> below 👇</h6></div>

          </ParallaxLayer>

          <ParallaxLayer
            offset={6.5}
            speed={0.05}
            style={{ textAlign: 'center' }}
          >
            <img src="below.gif" />
          </ParallaxLayer>

          <ParallaxLayer
            offset={8}
            speed={0.05}
          >
            <div className="label">
              <a>{`it's me "wattson"`}</a>
            </div>
            <span className="button-resume">
              <a href="https://drive.google.com/file/d/1mEaj1fmSHH-3He5wHfQLBF6ul_xhcm4W/view?usp=sharing" target="_blank">resume</a>
            </span>
            <span className="button">
              <a href="https://github.com/wattsonz" target="_blank">github</a>
            </span>
          </ParallaxLayer>
        </Parallax>
      </Div>
    </>
  )
}