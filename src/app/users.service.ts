import { Injectable } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersService {

  constructor(private htttp:Http) { }

  listUsers():any{
      var url = 'http://api.qshore.com/users'
      var list = this.htttp.get(url)
        .map((response:Response) => {
            return response.json();
        })
      return list;
  }
}
