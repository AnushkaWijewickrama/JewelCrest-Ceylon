import { HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, finalize } from "rxjs";


@Injectable({
  providedIn: "root"
})
export class InterceptorService {
  constructor() {
  }
}