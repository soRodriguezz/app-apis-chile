import { Component, OnInit } from '@angular/core';
import { EstadoMetroService } from './services/estado-metro.service';
import { timer } from 'rxjs';
import { Line, MetroNetwork } from 'src/app/interfaces/response/metro-network';

@Component({
  selector: 'app-estado-metro',
  templateUrl: './estado-metro.component.html',
  styleUrls: ['./estado-metro.component.css'],
})
export class EstadoMetroComponent implements OnInit {
  public tiempoEjecucion: number = 60000;
  public estadosMetro!: any;
  public lineas!: Line[];
  public time!: Date;

  public expandSet = new Set<any>();

  constructor(private readonly estadoMetroService: EstadoMetroService) {
    // this.timerData(this.tiempoEjecucion);
    this.obtenerEstadosMetro();
  }

  ngOnInit(): void {}

  onExpandChange(id: any, checked: boolean): void {
    if (checked) {
      this.expandSet.add(id);
    } else {
      this.expandSet.delete(id);
    }
  }

  private obtenerEstadosMetro(): void {
    this.estadoMetroService.obtenerEstadosMetro().subscribe({
      next: (estadosMetro: MetroNetwork) => {
        this.estadosMetro = estadosMetro;
        this.time = estadosMetro.time;
        this.lineas = estadosMetro.lines;
      },
    });
  }

  private timerData(time: number) {
    timer(0, time).subscribe(() => {
      this.obtenerEstadosMetro();
    });
  }
}
