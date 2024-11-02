//  Copyright (c) 2024 FlyByWire Simulations
//  SPDX-License-Identifier: GPL-3.0

import { Arinc429Register } from 'shared/src';

export interface AtcRmpBus {
  // sends the "contact" or "monitor" frequency in Hz
  atcFrequency: Arinc429Register;
}
