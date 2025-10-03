import { Injectable } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Injectable({
  providedIn: 'root'
})
export class DetectorDevice {
    constructor(private device: DeviceDetectorService) {}
    isMobile(): boolean { return this.device.isMobile(); }
}
