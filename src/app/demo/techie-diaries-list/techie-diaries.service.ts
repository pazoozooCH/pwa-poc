import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

export interface Item {
  name: string;
  description: string;
  url: string;
  html: string;
  markdown: string;
}

@Injectable()
export class TechieDiariesService {
  private baseURL = "https://www.techiediaries.com/api/data.json";

  constructor(private httpClient: HttpClient) {}

  getList$(): Observable<Item[]> {
    return this.httpClient.get<Item[]>(this.baseURL);
  }
}
