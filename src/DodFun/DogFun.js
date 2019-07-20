import React, { Component } from "react";
import { TweenMax, Linear, TimelineMax } from "gsap/TweenMax";
import "./DogFun.scss";
export default class DogFun extends Component {
  // constructor() {
  //   super();
  // }
  componentDidMount() {
    var select = function(s) {
        return document.querySelector(s);
      },
      dog_container = select(".dog_container"),
      dogSVG = select(".dogSVG"),
      nose = select(".nose"),
      browL = select("#browL"),
      browR = select("#browR"),
      eyeSpinL = select("#eyeSpinL"),
      eyeSpinR = select("#eyeSpinR"),
      stageWidth = 600,
      stageHeight = stageWidth,
      mousePos = { x: 0, y: 0 };
    TweenMax.set("svg", {
      visibility: "visible"
    });
    TweenMax.set([nose, ".eye"], {
      transformOrigin: "50% 50%"
    });
    TweenMax.set(browL, {
      transformOrigin: "0% 50%"
    });
    TweenMax.set(browR, {
      transformOrigin: "100% 150%"
    });
    TweenMax.set([eyeSpinL, eyeSpinR], {
      transformOrigin: "65% 50%"
    });
    var eyeMaxY = 1;
    var browMaxY = 2;
    var browMaxRot = 0;
    var snoutMinY = 2;
    var noseMaxY = 12;
    var noseShineTL = new TimelineMax({ paused: true });
    noseShineTL
      .fromTo(
        "#noseShine",
        1,
        {
          drawSVG: "0% 20%"
        },
        {
          drawSVG: "0% 50%",
          ease: Linear.easeNone
        }
      )
      .to("#noseShine", 1, {
        drawSVG: "40% 60%",
        ease: Linear.easeNone
      })
      .to("#noseShine", 1, {
        drawSVG: "80% 100%",
        ease: Linear.easeNone
      });
    dogSVG.onmousemove = function(e) {
      mousePos.x = (stageWidth / 2 - e.offsetX) * -1;
      mousePos.y = (stageHeight / 2 - e.offsetY) * -1;
      TweenMax.to("#eyeGroup", 1, {
        x: mousePos.x / 20,
        y: mousePos.y / 12 > eyeMaxY ? eyeMaxY : mousePos.y / 12
      });
      TweenMax.to(browL, 1, {
        rotation: mousePos.y / 25 > browMaxRot ? browMaxRot : mousePos.y / 25
      });
      TweenMax.to(browR, 1, {
        rotation: -(mousePos.y / 15 > browMaxRot)
          ? -browMaxRot
          : -mousePos.y / 15
      });
      TweenMax.to("#browGroup", 1, {
        x: mousePos.x / 40,
        y: mousePos.y / 25 > browMaxY ? browMaxY : mousePos.y / 25
      });
      TweenMax.to("#snout", 1, {
        x: mousePos.x / 30,
        y: mousePos.y / 40 < snoutMinY ? snoutMinY : mousePos.y / 60
      });
      TweenMax.to("#nose", 1, {
        x: mousePos.x / 8,
        y: mousePos.y / 10 > noseMaxY ? noseMaxY : mousePos.y / 10
      });
      TweenMax.to("#earL", 1, {
        x: -(mousePos.x / 50),
        y: -(mousePos.y / 50)
      });
      TweenMax.to("#earR", 1, {
        x: -(mousePos.x / 50),
        y: -(mousePos.y / 50)
      });
      TweenMax.to("#dogGroup", 1, {
        x: mousePos.x / 23,
        y: mousePos.y / 23
      });
      TweenMax.set(noseShineTL, {
        time:
          noseShineTL.duration() -
          (e.offsetX / stageWidth) * noseShineTL.duration()
      });
    };
    function blink() {
      TweenMax.to(".eye", 0.1, {
        attr: {
          ry: 0
        },
        repeat: 1,
        yoyo: true,
        onComplete: blink,
        delay: Math.random() * 1
      });
    }
    function sniff() {
      TweenMax.to("#nose", 0.1, {
        scaleX: 1.1,
        repeat: 1,
        yoyo: true,
        onComplete: sniff,
        delay: Math.random()
      });
    }
    dog_container.addEventListener("click", function(e) {
      blink();
      TweenMax.to([eyeSpinL, eyeSpinR], 1, {
        rotation: "+=720",
        onUpdate: function() {
          TweenMax.set(".eye", {
            rotation: -eyeSpinL._gsTransform.rotation
          });
        }
      });
    });
    blink();
    sniff();
    // dogSVG.onmousemove({ offsetX: 100, offsetY: 100 });
  }
  render() {
    return (
      <div class="dog_container">
        <svg className="dogSVG" viewBox="0 0 400 400">
          <g id="dogGroup">
            <rect
              id="earL"
              x="207"
              y="220"
              width="31"
              height="187"
              rx="15"
              ry="15"
              fill="#CC6A49"
            />
            <rect
              id="earR"
              x="361"
              y="220.94"
              width="31"
              height="187"
              rx="15.7"
              ry="15.7"
              fill="#CC6A49"
            />
            <ellipse
              id="head"
              cx="301"
              cy="285"
              rx="86"
              ry="94"
              fill="#E69C53"
            />
            <rect
              id="earLTOP"
              x="207"
              y="220"
              width="31"
              height="187"
              rx="15"
              ry="15"
              fill="#CC6A49"
            />
            <rect
              id="earRTOP"
              x="361"
              y="220.94"
              width="31"
              height="187"
              rx="15.7"
              ry="15.7"
              fill="#CC6A49"
            />
            <rect
              id="snout"
              x="239"
              y="294"
              width="121"
              height="84.98"
              rx="42"
              ry="42"
              fill="#F1F4E4"
            />
            <g id="nose">
              <rect
                x="276"
                y="325"
                width="46"
                height="23"
                rx="11"
                ry="11"
                fill="#443F43"
              />
              <path
                id="noseShine"
                fill="none"
                stroke="#AAABAF"
                stroke-width="4"
                stroke-linecap="round"
                d="
    M282.1,337.7L282.1,337.7c0-4.2,3.4-7.6,7.6-7.6h20.4c4.2,0,7.6,3.4,7.6,7.6l0,0"
              />
            </g>

            <g id="browGroup" stroke="#443F43" stroke-linecap="round">
              <line
                id="browL"
                x1="250"
                y1="253"
                x2="290"
                y2="253"
                fill="none"
                stroke-miterlimit="10"
                stroke-width="7"
              />
              <line
                id="browR"
                x1="309"
                y1="253"
                x2="349"
                y2="253"
                fill="none"
                stroke-miterlimit="10"
                stroke-width="7"
              />
            </g>
            <g id="eyeGroup" fill="#443F43">
              <g id="eyeSpinL">
                <ellipse
                  id="eyeL"
                  class="eye"
                  cx="270"
                  cy="285"
                  rx="7"
                  ry="7"
                />
              </g>
              <g id="eyeSpinR">
                <ellipse
                  id="eyeR"
                  class="eye"
                  cx="329"
                  cy="285"
                  rx="7"
                  ry="7"
                />
              </g>
            </g>
          </g>
        </svg>
      </div>
    );
  }
}
