import { Injectable } from '@nestjs/common';
import { PORT } from './main';

@Injectable()
export class AppService {
  msg = `<h1>Jellydash Server is running at ${PORT}.</h1><br/><h3>API works.</h3>`;
  getHello(): string {
    return this.msg;
  }
}
