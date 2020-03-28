import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-climas",
  templateUrl: "./climas.component.html",
  styleUrls: ["./climas.component.css"]
})
export class ClimasComponent {
  @Input() climas: any = [];
  @Input() editarTarjetaClima: any;
  @Input() borrarTarjetaClima: any;

  @Output() EditClima: EventEmitter<any> = new EventEmitter();
  @Output() borraTarjetaClima: EventEmitter<any> = new EventEmitter();

  editClimaFunc(evento: any) {
    this.EditClima.emit({ editarTarjetaClima: evento.editarTarjetaClima });
  }

  deleteClima(evento: any) {
    console.log("deleteClima(evento) emit evento-> climas.comp_ts", evento);
    this.borraTarjetaClima.emit({
      borrarTarjetaClima: evento.borrarTarjetaClima
    });
  }
}
