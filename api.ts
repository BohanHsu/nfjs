import { Http } from '@angular/http'
import { Injectable } from '@angular/core'

@Injectable()
export class ApiService {
  constructor(private http: Http) {
  }

  get(path) {
  return this.http.get(path)
}

// checking for errors
// convert result to json
