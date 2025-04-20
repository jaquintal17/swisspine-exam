import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { HttpClient, HttpParams } from "@angular/common/http";
import { ExternalSystem } from "../models/external-system.model";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class ExternalSystemService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAll(page: number, size: number, searchTerm : string): Observable<{ items: ExternalSystem[]; totalCount: number }> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString())
      .set('search', searchTerm);
  
    return this.http.get<{ items: ExternalSystem[]; totalCount: number }>(
      `${this.baseUrl}/external-systems`, { params }
    );
  }

  createSystem(externalSystem:ExternalSystem) : Observable<ExternalSystem> {
    return this.http.post<ExternalSystem>(
      `${this.baseUrl}/external-systems`, externalSystem
    );
  }
}