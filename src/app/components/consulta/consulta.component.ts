import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-consulta",
  templateUrl: "./consulta.component.html",
  styleUrls: ["./consulta.component.css"]
})
export class ConsultaComponent {
  pais: string;
  ciudad: string;
  @Input() objConsultaEmit: any;

  @Output() ConsultaClima: EventEmitter<any> = new EventEmitter();

  realizarBusqueda() {
    console.log("realizarBusqueda() -> consulta.comp_ts");
    let objclima: any = {
      pais: this.pais,
      ciudad: this.ciudad
    };

    console.log("realizarBusqueda() emit -> consulta.comp_ts ", objclima);
    this.ConsultaClima.emit({ objConsultaEmit: objclima });

    // console.log("valorBusqueda consulta.component:");

    //Limpia campos
    this.pais = "";
    this.ciudad = "";
    console.log("realizarBusqueda() SALIDA -> consulta.comp_ts");
  }

  dropDownPais() {
    var list = document.getElementById("projectSelectorDropdown");
    for (var i = 0; i < rows; i++) {
      var opt = table.getValue(i, 0);
      var li = document.createElement("li");
      var link = document.createElement("a");
      var text = document.createTextNode(opt);
      link.appendChild(text);
      link.href = "#";
      li.appendChild(link);
      list.appendChild(li);
    }
  }
}
