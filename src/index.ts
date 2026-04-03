import type { API } from 'homebridge';

import { ACCESSORY_NAME } from './settings';
import { XiaomiMiAirPurifierAccessory } from './accessory';

export = (api: API) => {
  api.registerAccessory(ACCESSORY_NAME, XiaomiMiAirPurifierAccessory);
};
