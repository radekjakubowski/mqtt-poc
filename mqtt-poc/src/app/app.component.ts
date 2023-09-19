import { Component } from '@angular/core';
import { IMqttMessage, MqttService } from 'ngx-mqtt';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mqtt-poc';
  screenColor$: BehaviorSubject<string> = new BehaviorSubject("white");

  constructor(private mqttService: MqttService) {
    this.mqttService.observe('screencolor').subscribe(message => {
      this.screenColor$.next(message.payload.toString());
    });
  }
}
