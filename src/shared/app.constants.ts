/**
 * Created by Antoine on 07/04/2017.
 */
import {Injectable} from '@angular/core';

@Injectable()
export class Configuration {
  public Server = 'http://localhost:3100';
  public ApiUrl = 'api/';
  public ServerWithApiUrl = this.Server + this.ApiUrl;
}