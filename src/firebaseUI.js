
import { initializeUI } from "@firebase-oss/ui-core";
import { app } from "./firebase";

// Initialise EarthShake's authentication interface
const earthShakeUI = initializeUI({
  app
});

export { earthShakeUI };
