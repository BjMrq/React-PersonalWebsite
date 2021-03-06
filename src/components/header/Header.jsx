import React, { Fragment, useEffect } from 'react';
import Plx from 'react-plx';
import { TweenLite } from "gsap";
import HeaderCard from './HeaderCard';
import HeaderWave from './HeaderWave';

import { parallaxDataHeaderImage, parallaxDataHeaderCard } from '../../parallaxEffects/parallaxEffects';

const header = () => {
  let width;
  let height;
  let canvas;
  let largeHeader;
  let ctx;
  let points;
  let target;
  let animateHeader = true;

  const mouseMove = (e) => {
    let posx = 0;
    let posy = 0;
    if (e.pageX || e.pageY) {
      posx = e.pageX;
      posy = e.pageY;
    } else if (e.clientX || e.clientY) {
      posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
      posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }
    target.x = posx;
    target.y = posy;
  };

  const scrollCheck = () => {
    if (document.body.scrollTop > height) animateHeader = false;
    else animateHeader = true;
  };

  const resize = () => {
    width = window.innerWidth;
    height = window.innerHeight;
    largeHeader.style.height = `${height}px`;
    canvas.width = width;
    canvas.height = height;
  };

  const addListeners = () => {
    if (!('ontouchstart' in window)) {
      window.addEventListener('mousemove', mouseMove);
    }
    window.addEventListener('scroll', scrollCheck);
    window.addEventListener('resize', resize);
  };

  const removeListeners = () => {
    if (!('ontouchstart' in window)) {
      window.removeEventListener('mousemove', mouseMove);
    }
    window.removeEventListener('scroll', scrollCheck);
    window.removeEventListener('resize', resize);
  };

  const startAnimation = () => {
    // Util
    function getDistance(p1, p2) {
      return ((p1.x - p2.x) ** 2) + ((p1.y - p2.y) ** 2);
    }

    function initHeader() {
      width = window.innerWidth;
      height = window.innerHeight;
      target = { x: width / 2, y: height / 2 };

      largeHeader = document.getElementById('large-header');
      largeHeader.style.height = `${height}px`;

      canvas = document.getElementById('demo-canvas');
      canvas.width = width;
      canvas.height = height;
      ctx = canvas.getContext('2d');

      // create points
      points = [];
      for (let x = 0; x < width; x += width / 20) {
        for (let y = 0; y < height; y += height / 20) {
          const px = x + (Math.random() * (width / 20));
          const py = y + (Math.random() * (height / 20));
          const p = { x: px, originX: px, y: py, originY: py };
          points.push(p);
        }
      }

      // for each point find the 5 closest points
      for (var i = 0; i < points.length; i++) {
        const closest = [];
        const p1 = points[i];
        for (let j = 0; j < points.length; j++) {
          const p2 = points[j];
          if (!(p1 === p2)) {
            let placed = false;
            for (var k = 0; k < 5; k++) {
              if (!placed) {
                if (closest[k] === undefined) {
                  closest[k] = p2;
                  placed = true;
                }
              }
            }

            for (var k = 0; k < 5; k++) {
              if (!placed) {
                if (getDistance(p1, p2) < getDistance(p1, closest[k])) {
                  closest[k] = p2;
                  placed = true;
                }
              }
            }
          }
        }
        p1.closest = closest;
      }

      // assign a circle to each point
      for (var i in points) {
        const c = new Circle(points[i], 2 + Math.random() * 2, 'rgba(255,255,255,0.3)');
        points[i].circle = c;
      }
    }

    // Canvas manipulation
    function drawLines(p) {
      if (!p.active) return;
      for (const i in p.closest) {
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.closest[i].x, p.closest[i].y);
        ctx.strokeStyle = `rgba(156,217,249,${p.active})`;
        ctx.stroke();
      }
    }

    function Circle(pos, rad, color) {
      const _this = this;

      // constructor
      (function() {
        _this.pos = pos || null;
        _this.radius = rad || null;
        _this.color = color || null;
      }());

      this.draw = function() {
        if (!_this.active) return;
        ctx.beginPath();
        ctx.arc(_this.pos.x, _this.pos.y, _this.radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = `rgba(156,217,249,${_this.active})`;
        ctx.fill();
      };
    }

    // animation
    function animate() {
      if (animateHeader) {
        ctx.clearRect(0, 0, width, height);
        for (const i in points) {
          // detect points in range
          if (Math.abs(getDistance(target, points[i])) < 4000) {
            points[i].active = 0.3;
            points[i].circle.active = 0.6;
          } else if (Math.abs(getDistance(target, points[i])) < 20000) {
            points[i].active = 0.1;
            points[i].circle.active = 0.3;
          } else if (Math.abs(getDistance(target, points[i])) < 40000) {
            points[i].active = 0.02;
            points[i].circle.active = 0.1;
          } else {
            points[i].active = 0;
            points[i].circle.active = 0;
          }

          drawLines(points[i]);
          points[i].circle.draw();
        }
      }
      requestAnimationFrame(animate);
    }

    function shiftPoint(p) {
      TweenLite.to(p, 1 + 1 * Math.random(), { x: p.originX - 50 + Math.random() * 100,
        y: p.originY - 50 + Math.random() * 100,
        onComplete() {
          shiftPoint(p);
        } });
    }

    function initAnimation() {
      animate();
      for (const i in points) {
        shiftPoint(points[i]);
      }
    }

    initHeader();
    initAnimation();
    addListeners();
  };

  useEffect(() => {
    startAnimation();
    return () => {
      removeListeners();
    };
  }, []);

  return (
    <Fragment>
      <Plx
        className="stickyHeader"
        parallaxData={parallaxDataHeaderImage}
      >
        <div className="demo-1">
          <div className="content">
            <div id="large-header" className="large-header">
              <canvas id="demo-canvas" />
            </div>
          </div>
        </div>
      </Plx>
      <Plx
        className=""
        parallaxData={parallaxDataHeaderCard}
      >
        <HeaderCard />
      </Plx>
      <HeaderWave />
    </Fragment>

  );
};

export default header;
