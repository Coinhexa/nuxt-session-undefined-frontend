/**
 * https://stackoverflow.com/questions/67761723/how-to-use-nuxtjs-fontawesome-icons-in-buefy
 */
import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core' // import the mandatory

import {
  faAngleLeft,
  faAngleRight,
  faArrowDown,
  faArrowLeft,
  faArrowRight,
  faArrowUp,
  faBullhorn,
  faCaretDown,
  faCaretUp,
  faChartLine,
  faCheck,
  faCheckCircle,
  faClipboardList,
  faClock,
  faExclamationCircle,
  faEye,
  faEyeSlash,
  faLink,
  faLocationArrow,
  faPlus,
  faSearch,
  faThumbsDown,
  faThumbsUp,
  faTimes,
  faTimesCircle,
  faTrash,
  faUnlock,
  faUser,
  faUsers,
} from '@fortawesome/free-solid-svg-icons' // import the icons that you've choosen, VScode may suggest the import for you!

import {
  faFacebook,
  faGoogle,
  faGithub,
  faReddit,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'

import Buefy, { // import Buefy, required
  Field,
  Input, // import the component that you want to use
} from 'buefy'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome' // import the icon component for Buefy

library.add(
  faAngleLeft,
  faAngleRight,
  faArrowDown,
  faArrowLeft,
  faArrowRight,
  faArrowUp,
  faBullhorn,
  faCaretDown,
  faCaretUp,
  faChartLine,
  faCheck,
  faCheckCircle,
  faClipboardList,
  faClock,
  faExclamationCircle,
  faEye,
  faEyeSlash,
  faFacebook,
  faGithub,
  faGoogle,
  faLocationArrow,
  faLink,
  faPlus,
  faReddit,
  faSearch,
  faThumbsDown,
  faThumbsUp,
  faTimes,
  faTimesCircle,
  faTrash,
  faTwitter,
  faUnlock,
  faUser,
  faUsers
) // add the icons you've selected
Vue.component('FontAwesomeIcon', FontAwesomeIcon) // tell Vue to use the icon component

Vue.use(Field)
Vue.use(Input) // same goes for the Dropdown
Vue.use(Buefy, {
  defaultIconComponent: 'font-awesome-icon', // the icon component that we are using
  defaultIconPack: 'fas', // the pack given by Fontawesome
})
