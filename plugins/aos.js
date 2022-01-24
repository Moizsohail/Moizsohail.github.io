import Vue from 'vue'

import AOS from 'aos'
import 'aos/dist/aos.css'

Vue.use(
  AOS.init({
    // Global settings:
    // disable: 'mobile', // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:

    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  })
)
