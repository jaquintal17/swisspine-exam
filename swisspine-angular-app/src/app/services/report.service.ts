import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Report } from "../models/report.model";

@Injectable({ providedIn: 'root' })
export class ReportService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Report[]> {
    return this.http.get<Report[]>(
      `${this.baseUrl}/reports`);
  }

}