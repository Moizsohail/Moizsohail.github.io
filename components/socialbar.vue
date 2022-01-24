<template>
  <div class="wrapper">
    <ul>
      <li class="facebook">
        <a target="__blank" href="https://www.fb.com/moiz.sohail" id="fb"
          ><i class="fab fa-facebook" aria-hidden="true"></i
        ></a>
      </li>
      <li class="linkedin">
        <a target="__blank" href="https://www.linkedin.com/in/moizsohail"
          ><i class="fab fa-linkedin" aria-hidden="true"></i
        ></a>
      </li>
      <li class="instagram">
        <a target="__blank" href="https://www.instagram.com/moiz.sohail"
          ><i class="fab fa-instagram" aria-hidden="true"></i
        ></a>
      </li>
      <li class="google">
        <a href="#"><i class="fab fa-google" aria-hidden="true"></i></a>
      </li>
      <li class="whatsapp">
        <a target="__blank" href="https://wa.link/7r3po0"
          ><i class="fab fa-whatsapp" aria-hidden="true"></i
        ></a>
      </li>
    </ul>
  </div>
</template>
<style scoped>
* {
  margin: 0;
  padding: 0;
}

body {
  background: #0a122a;
}

/* Let's style the wrapper in such away that, 
it should always be at the center of the browser */
.wrapper {
  position: absolute;
  /* top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */

  transform: scale(0.6);
}

.wrapper ul a {
  position: absolute;
  top: -29%;
  left: 11px;
}
#fb {
  top: -29%;
  left: 13px;
}
/* Style the Un-order list by setting its list-style to none */
.wrapper ul {
  padding: unset;
  display: flex;
  flex-direction: column;
  list-style: none;
}

/* Style the list items inside the UL list, by setting its width, height and line-height 
  and float them to left and set its border and border-radius.
 */
.wrapper ul li {
  width: 45px;
  position: relative;
  height: 45px;
  /* line-height: 75px; */
  margin: 5px 0px;
  text-align: center;
  cursor: pointer;
  border-radius: 50%;
  float: left;
  opacity: 0.7;
  transition: all 0.5s ease;
}

/* Style the icons by setting its color and margin-top value to 20px 
to align it properly */
.wrapper ul li .fab {
  color: #d8e2dc;
  margin-top: 20px;
  transition: all 0.5s ease;
  font-size: 30px;
}

/* Now target the specific li classes for styling and use box-shadow effect to border and text-shadow effect
  to icons for glowing effect and use transition property for smooth transition effect. */
/*facebook*/
.wrapper ul li:hover.facebook {
  border: 5px solid #3b5998;
  box-shadow: 0 0 15px #3b5998;
  transition: all 0.5s ease;
}

.wrapper ul li:hover .fa-facebook {
  color: #3b5998;
  text-shadow: 0 0 15px #3b5998;
  transition: all 0.5s ease;
}

/*linkedln*/
.wrapper ul li:hover.linkedin {
  border: 5px solid #0e76a8;
  box-shadow: 0 0 15px #0e76a8;
  transition: all 0.5s ease;
}

.wrapper ul li:hover .fa-linkedin {
  color: #0e76a8;
  text-shadow: 0 0 15px #0e76a8;
  transition: all 0.5s ease;
}

/* instagram */
.wrapper ul li:hover.instagram {
  border: 5px solid #bc2a8d;
  box-shadow: 0 0 15px #bc2a8d;
  transition: all 0.5s ease;
}

.wrapper ul li:hover .fa-instagram {
  color: #bc2a8d;
  text-shadow: 0 0 15px #bc2a8d;
  transition: all 0.5s ease;
}

/* google */
.wrapper ul li:hover.google {
  border: 5px solid #dd4b39;
  box-shadow: 0 0 15px #dd4b39;
  transition: all 0.5s ease;
}

.wrapper ul li:hover .fa-google {
  color: #dd4b39;
  text-shadow: 0 0 15px #dd4b39;
  transition: all 0.5s ease;
}

/* whatsapp */
.wrapper ul li:hover.whatsapp {
  border: 5px solid #4dc247;
  box-shadow: 0 0 15px #4dc247;
  transition: all 0.5s ease;
}

.wrapper ul li:hover .fa-whatsapp {
  color: #4dc247;
  text-shadow: 0 0 15px #4dc247;
  transition: all 0.5s ease;
}

/* media queries */

@media screen and (max-width: 750px) {
  .wrapper {
    width: 350px;
  }
  .wrapper ul li {
    margin-top: 10px;
  }
  .wrapper ul li.google {
    /* margin-left: 60px; */
  }
  .wrapper ul {
    flex-direction: row;
  }
}

@media screen and (max-width: 340px) {
  .wrapper {
    width: 150px;
  }
  .wrapper ul li {
    margin: 15px;
  }
  .wrapper ul li.google {
    margin-left: 15px;
  }
}

/* youtube link */
.youtube {
  position: fixed;
  bottom: 10px;
  right: 10px;
  width: 160px;
  text-align: center;
  padding: 15px 10px;
  background: #bb0000;
  border-radius: 5px;
}

.youtube a {
  text-decoration: none;
  color: #fff;
  text-transform: capitalize;
  letter-spacing: 1px;
}
</style>
