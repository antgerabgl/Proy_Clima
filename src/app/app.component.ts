import { Component } from "@angular/core";
import { ClimaService } from "./services/clima/clima.services";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  climas: any = [];
  climas2: any = [];

  id: string = "";
  pais: string = "";
  ciudad: string = "";
  grados: string = "";
  errors: any;

  constructor(private _climaService: ClimaService) {}

  ngOnInit() {
    //INIT DATOS
    console.log("ngOnInit -> app.comp_ts");
    this.loadALLClimas();
  }

  // ConsultaClimaFuncion(evento: any) {
  //   console.log("TEST1 ConsultaClimaFuncion");

  //   console.log("TEST2 ConsultaClimaFuncion");
  // }

  showUnClima(evento: any) {
    console.log("showUnClima(evento) evento -> app.comp_ts", evento);
    console.log("showUnClima(evento) ths.climas-> app.comp_ts", this.climas);

    if (
      evento.objConsultaEmit.pais === "" ||
      evento.objConsultaEmit.pais == null
    ) {
      console.log(
        "showUnClima(evento) if (evento.objConsultaEmit.pais == null -> app.comp_ts",
        evento.objConsultaEmit.pais,
        evento.objConsultaEmit.ciudad
      );
      this.climas2.length = 0;
      console.log("showUnClima() this.climas2 -> app.comp_ts", this.climas2);
    } else {
      console.log("showUnClima() ELSE -> app.comp_ts");
      let clima = this.climas.filter(
        (
          x: { pais: string } //ciudad: string
        ) => x.pais === evento.objConsultaEmit.pais
        //&& x.ciudad === evento.objConsultaEmit.ciudad
      );
      console.log(
        "DESPUES DE FILTRO-> app.comp_ts",
        clima[0].pais,
        clima[0].ciudad,
        clima[0].grados
      );

      //NO SE VA A USAR EL SERVICIO PORQUE YA ESTA GUARDADA LA INFORMACION EN THIS.CLIMAS Y THIS.CLIMAS2 NO SE OCUPA IR A LA API CRUDCRUD.
      // this._climaService.getUNClima(clima[0]._id).subscribe(
      //   data => {
      //     console.log("showUnClima() DATA-> app.comp_ts", data);
      //     this.climas = []; //Limpia el array climas climas = []
      //     this.climas.push(data);
      //   },
      //   error => {
      //     console.log("ERROR showUnClima() -> app.comp_ts"); //, error
      //     this.errors = error; //Para que errors lo guarde en variable this.errors, y se pueda usar con un if mas adelante fuera de subcribe.
      //   }
      // );

      // if (!this.errors) {
      //console.log("if !errors() this.climas2[] -> app.comp_ts", this.climas2);
      if (this.climas2 !== "") {
        console.log(
          "if (this.climas2 !== no empty -> app.comp_ts",
          this.climas2
        );

        let showDataModal2: any = {
          pais: clima[0].pais,
          ciudad: clima[0].ciudad,
          grados: clima[0].grados
        };
        console.log(
          "showUnClima() showDataModal2 -> app.comp_ts",
          showDataModal2
        );
        this.climas2.length = 0;
        this.climas2.push(showDataModal2);
        console.log(
          "showUnClima() this.climas2[] a modal2 -> app.comp_ts",
          this.climas2
        );
      }

      console.log("IF OUT -> app.comp_ts");
    }
  } //FIN showUnClima()

  loadALLClimas() {
    console.log("loadALLClimas() climaService -> app.comp_ts");
    this._climaService.getALLClimas().subscribe(
      data => {
        // console.log("loadALLClimas() ->", this.climas);
        this.climas.length = 0;
        this.climas = data;
        console.log("loadALLClimas() data ->", this.climas);
      },
      error => {
        console.log("ERROR loadALLClimas() -> app.comp_ts"); //, error
      }
    );
  }

  editClimaEvento(evento: any) {
    console.log("editClimaEvento() evento -> app.comp_ts", evento);
    // console.log(
    //   "editClimaEvento() -> app.comp - lo manda -> clima.comp_ts -> EditClima.emit_html"
    // );
    console.log(
      "editClimaEvento()ID y pais -> app.comp_ts",
      evento.editarTarjetaClima.id,
      evento.editarTarjetaClima.pais
    );
    console.log(
      "editClimaEvento()PAIS-> app.comp_ts",
      evento.editarTarjetaClima.pais
    );
    this.id = evento.editarTarjetaClima.id;
    this.pais = evento.editarTarjetaClima.pais;
    this.ciudad = evento.editarTarjetaClima.ciudad;
    this.grados = evento.editarTarjetaClima.grados;
    console.log("editClimaEvento() SALIDA-> app.comp_ts");
  }

  deleteClimaTarjeta(evento: any) {
    console.log("deleteClimaTarjeta(evento) -> app.comp_ts");
    //This.id y this.pais tambien lo trae en el parametro evento
    console.log(
      "deleteClimaTarjeta(evento) climaService evento,this.id,this.pais -> app.comp_ts ",
      evento,
      this.id,
      this.pais
    );

    if (this.id === "" || this.id == null) {
      console.log("if (this.id === null", this.id);
    } else {
      console.log("ELSE if (this.id === id", this.id);
      this._climaService.deleteClimaService(this.id);
      console.log("deleteClimaTarjeta(evento) splice -> app.comp_ts ");
      this.climas.splice(evento.borrarTarjetaClima, 1);
      console.log("deleteClimaTarjeta(evento) Salir -> app.comp_ts");
    }
  }

  modalClimaSave(evento: any) {
    console.log("modalClimaSave(evento) evento -> app.comp_ts", evento);
    if (evento.modalclima.id === "" || evento.modalclima.id == null) {
      console.log(
        "modalClimaSave(evento) if (evento.modalclima.id === empty -> app.comp_ts",
        evento.modalclima.id
      );
      console.log("modalClimaSave(evento) addClima -> app.comp_ts");
      this._climaService.addClima(evento.modalclima);
      console.log("modalClimaSave(evento) push -> app.comp_ts");
      this.climas.push(evento.modalclima);
      console.log("modalClimaSave() IF OUT -> app.comp_ts");
    } else {
      console.log(
        "modalClimaSave(evento) if (evento.modalclima.id === id -> app.comp_ts"
      );
      let clima: any = {
        pais: evento.modalclima.pais,
        ciudad: evento.modalclima.ciudad,
        grados: evento.modalclima.grados
      };

      console.log("modalClimaSave(evento) climaService -> app.comp_ts", clima);
      console.log(
        "modalClimaSave(evento) climaService -> app.comp_ts",
        evento.modalclima
      );
      this._climaService.editarClima(evento.modalclima.id, clima);
      console.log("modalClimaSave(evento) findIndex editarClima-> app.comp_ts");
      const index = this.climas.findIndex(
        (e: any) => e._id === evento.modalclima.id
      );
      console.log(
        "modalClimaSave(evento) Index -> app.comp_ts",
        this.climas[index]
      );
      this.climas[index] = evento.modalclima;
    }
    this.id = "";
    this.pais = "";
    this.ciudad = "";
    this.grados = "";
    console.log("modalClimaSave()  OUT -> app.comp_ts");
  }
}
