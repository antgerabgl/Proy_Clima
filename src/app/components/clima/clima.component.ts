import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-clima",
  templateUrl: "./clima.component.html",
  styleUrls: ["./clima.component.css"]
})
export class ClimaComponent {
  @Input() index: string = "";
  @Input() id: string = "";
  @Input() pais: string = "";
  @Input() ciudad: string = "";
  @Input() grados: string = "";

  @Input() editarTarjetaClima: any;
  @Input() borrarTarjetaClima: any;

  @Output() EditClima: EventEmitter<any> = new EventEmitter();
  @Output() borraTarjetaClima: EventEmitter<any> = new EventEmitter();

  deleteClimaFuncion(index: any, id: any) {
    console.log(
      "deleteClimaFuncion(index) emit index, id -> clima.comp_ts",
      index,
      id
    );
    this.borraTarjetaClima.emit({ borrarTarjetaClima: index });
  }

  editClimafuncion(id: any) {
    console.log("editClimafuncion(id) id -> clima.comp_ts", id);
    console.log(
      "editClimafuncion(id) id, pais, ciudad,centig -> clima.comp_ts",
      this.id,
      this.pais,
      this.ciudad,
      this.grados
    );
    let objclima: any = {
      id: id,
      pais: this.pais,
      ciudad: this.ciudad,
      grados: this.grados
    };

    console.log(
      "editClimafuncion(id) emit objclima -> clima.comp_ts ",
      objclima
    );

    this.EditClima.emit({ editarTarjetaClima: objclima });
    // console.log(
    //   "editClimafuncion(id) this.editarTarjetaClima.objclima -> clima.comp_ts",
    //   this.editarTarjetaClima.objclima
    // );
    console.log("editClimafuncion(id) OUT -> clima.comp_ts");
  }
}
