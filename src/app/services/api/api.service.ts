import { Injectable } from '@angular/core'
import { environment } from '../../../environments/environment'
import { HttpClient } from '@angular/common/http'
import { ApiInterface } from '../../models/api.interface'
import { Observable, EMPTY } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = environment.apiUrl
  private mockup = environment.mockup

  constructor(
    private http: HttpClient
  ) {
  }

  get(data: ApiInterface): Observable<any> {
    if (this.mockup) {
      return data.mockupData || EMPTY
    }

    return this.http.get(this.apiUrl + data.path, {params: data.params})
  }

  post(data: ApiInterface): Observable<any> {
    if (this.mockup) {
      return data.mockupData || EMPTY
    }

    return this.http.get(this.apiUrl + data.path, data.body)
  }
}
