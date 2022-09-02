import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {Response} from "./request-response";

@Injectable({
  providedIn: "root",
})
export class PassengersRepository {

  constructor(public http: HttpClient) {}

  getRandomPassenger(): Observable<Response> {
    return this.http.get<Response>(`${environment.api}`);
  }
}
