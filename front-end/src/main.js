import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@/assets/css/index.css'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import specific icons */
import { faTwitter, faYoutube, faInstagram, faLinkedin, faDiscord , faJs, faHtml5,faVuejs, faGithub, faGitAlt,faLaravel,faNodeJs,faJira} from '@fortawesome/free-brands-svg-icons'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons solid*/
import {faCartShopping,faBars,faChevronDown,faFile,faCube ,faFileLines,faCircle,faSun,faMoon,faArrowUp,faLocationDot,faHouse,faPhone,faAt,faUserAstronaut,faHandshakeAngle,faPeopleGroup,faAddressBook,faHandFist,faRightFromBracket} from '@fortawesome/free-solid-svg-icons'

/* add icons to the library*/
library.add(faCartShopping,faBars,faChevronDown,faRightFromBracket,faTwitter, faYoutube, faInstagram, faLinkedin, faDiscord, faJs,faHtml5,faVuejs, faFile, faCube,faFileLines, faCircle, faSun, faMoon,faArrowUp,faLocationDot,faHouse,faPhone,faAt,faGithub,faUserAstronaut,faGitAlt, faLaravel, faNodeJs, faHandshakeAngle, faPeopleGroup, faAddressBook,faHandFist,faJira)

//change langue html default
const html = document.documentElement
html.setAttribute('lang', 'fr')

import App from './App.vue'
import router from './router'


const app = createApp(App)

app.use(createPinia())
app.component('font-awesome-icon',FontAwesomeIcon)
app.use(router)

app.mount('#app')
