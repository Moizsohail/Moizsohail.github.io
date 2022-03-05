// import mod0 from '~/static/work/5Educative/info'
// import mod6 from '~/static/work/6Kebutterus/info'
// import mod1 from '~/static/work/1Vlancer/info'
// import mod2 from '~/static/work/2DementiaCare/info'
// import mod3 from '~/static/work/3PsifiXi/info'
// import mod4 from '~/static/work/4SurveyBot/info'
// import mod5 from '~/static/work/Zambeel Planner/info'

// export const state = () => ({
//     data: [mod0,mod6, mod1, mod2, mod3, mod4,mod5],
// })
// export const state = ()=>({
//     currentProjecc:
// })
export const state = ()=>({
    currentSlug:""
})
export const mutations = {
  accessProject(state,slug) {
    state.currentSlug = slug
  }
}
