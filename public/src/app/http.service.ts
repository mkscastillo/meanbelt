import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getRestaurants(){
    return this._http.get('/getRestaurants');
  }

  getRestaurant(id:String){
    return this._http.get('/show/'+id);
  }

  create(data){
    return this._http.post('/create',data);
  }

  delete(id: String){
    return this._http.delete('/delete/'+id);
  }

  update(data){
    return this._http.put('/edit/'+data._id,data);
  }

  create_review(data){
    return this._http.post('/create_review',data);
  }

  show_reviews(id:String){
    return this._http.get('/reviews/'+id);
  }
}
