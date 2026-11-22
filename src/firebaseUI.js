import { initializeUI, requireDisplayName } from '@firebase-oss/ui-core';
import { app, auth } from './firebase';

const earthShakeUI = initializeUI({ app, auth, behaviors: [requireDisplayName()] });
export { earthShakeUI };
