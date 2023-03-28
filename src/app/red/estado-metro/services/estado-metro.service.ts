import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MetroNetwork } from 'src/app/interfaces/response/metro-network';
import { Common } from 'src/app/properties/common';

@Injectable({
  providedIn: 'root'
})
export class EstadoMetroService {

  constructor(
    private readonly http: HttpClient,
  ) { }

  public obtenerEstadosMetro(): Observable<MetroNetwork> {
    return this.http.get<MetroNetwork>(Common.METRO_NETWORK);
  }

}
