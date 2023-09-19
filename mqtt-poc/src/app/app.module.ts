import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { IMqttServiceOptions, MqttModule } from 'ngx-mqtt';
import credentials from 'src/credentials';

export const MQTT_SERVICE_CONNECTION: IMqttServiceOptions = {
  hostname: '0106eadf28264f1588c213d32a0acb80.s1.eu.hivemq.cloud',
  port: 8884,
  username: credentials.username,
  password: credentials.password,
  path: "/mqtt",
  protocol: 'wss',
  connectOnCreate: true
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MqttModule.forRoot(MQTT_SERVICE_CONNECTION)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
