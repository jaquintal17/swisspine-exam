import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { Planner } from "../models/planner.model";

@Injectable({ providedIn: 'root' })
export class PlannerService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAll(page: number, size: number, searchTerm : string): Observable<{ items: Planner[]; totalCount: number }> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString())
      .set('search', searchTerm);
  
    return this.http.get<{ items: Planner[]; totalCount: number }>(
      `${this.baseUrl}/planners`, { params }
    );
  }

  createSystem(planner:Planner) : Observable<Planner> {
    return this.http.post<Planner>(
      `${this.baseUrl}/planner`, planner
    );
  }
}