<template>
  <div class="d-flex">
    <div class="main-image">
      <img
        src="/work/1Vlancer/FireShot Capture 006 - Vlancer - localhost.png"
      />
    </div>
    <div class="content">
      <h3>Tailored For Pakistan</h3>
      <p>
        The goal of this project was to introduce a user friendly platform for
        the Pakistani people. This platform has the potential of allowing people
        to earn some extra money above their daily money.
      </p>
    </div>
    <div class="extra-image" v-rellax="{ speed: -1.5 }">
      <img
        src="/work/1Vlancer/FireShot Capture 003 - About Us - Vlancer - localhost2.png"
      />
    </div>
  </div>
</template>

<style scoped>
.d-flex {
  max-width: 1280px;
  margin: auto;
  display: grid !important;
  grid-template-columns: 1fr 300px auto;
  grid-column-gap: 100px;
}
.extra-image {
  position: absolute;
  z-index: 3;
  right: 100px;

  margin-top: 600px;
  width: 40vw;
}
.extra-image img {
  width: 100%;
  box-shadow: -6px 8px 35px 7px rgb(0 0 0 / 70%);
}
.content {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  margin-top: 120px;
  margin-left: 60px;
  padding-top: 0;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
  -ms-flex-align: start;
  align-items: flex-start;
}
.main-image img {
  width: 100%;
  box-shadow: 0 28px 42px 0 rgb(255 255 255 / 20%);
}
.main-image {
  margin: auto;
  width: 100%;
  margin-top: -60px;
  padding-left: 24px;
  max-width: unset !important;
  position: relative;
  /* position: absolute; */
  z-index: 2;
}
p {
  font-family: ministry;
  color: #a0989e;
  font-size: 14px;
  line-height: 24px;
  font-weight: 300;
  letter-spacing: 0;
}
</style>
