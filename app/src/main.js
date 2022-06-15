import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import routes from "./routes";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import specific icons */
import {
  faPlus,
  faEdit,
  faBars,
  faCircleArrowDown,
  faCircleArrowUp
} from "@fortawesome/free-solid-svg-icons";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faEdit, faPlus, faBars, faCircleArrowDown, faCircleArrowUp);

import plausible from "./plugins/plausible";

const plausibleOptions = {
  domain: "status.jmartz.gmbh",
  apiHost: "https://tracking.jmartz.gmbh",
  hashMode: false,
  trackLocalhost: false,
};

const app = createApp(App);

app.use(plausible, plausibleOptions);
app.component("fa", FontAwesomeIcon);
app.use(routes);
app.use(store);
app.mount("#app");
