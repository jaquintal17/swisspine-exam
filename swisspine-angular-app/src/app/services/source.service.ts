import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { Planner } from "../models/planner.model";
import { NamedItem } from "../models/id-name.model";

@Injectable({ providedIn: 'root' })
export class SourceService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAll(): Observable<NamedItem[]> {
    return this.http.get<NamedItem[]>(
      `${this.baseUrl}/sources`);
  }

}