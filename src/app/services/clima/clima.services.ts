import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class ClimaService {
  varConsulta = [];
  test = [
    {
      pais: "PAIS TEST",
      ciudad: "CIUD TEST",
      grados: "21"
    }
  ];
  constructor(private http: HttpClient) {}

  URL_SERVICECONST: string =
    "https://crudcrud.com/api/1cca253413b64068b814674b40f7b145/";

  // varConsultaMetodo(objetoClima: any) {
  //   console.log("RECIBE VARIABLES", objetoClima);
  //   this.varConsulta.push(objetoClima);
  //   console.log("ARREGLO ", this.varConsulta);
  // }

  getUNClima(id: any) {
    console.log("SERVICIO ID getUNClima -> clima.serv_ts", id);
    let URL_SERVICE = this.URL_SERVICECONST + "climasjson/" + id;
    console.log("SERV URL getUNClima -> clima.serv_ts", URL_SERVICE);
    return this.http.get(URL_SERVICE);
    // return this.test;
  }

  getALLClimas() {
    console.log("getALLClimas() -> clima.serv_ts");
    let URL_SERVICE = this.URL_SERVICECONST + "climasjson";
    return this.http.get(URL_SERVICE);
  }

  addClima(clima: any) {
    let URL_SERVICE = this.URL_SERVICECONST + "climasjson";
    console.log("EL CLIMA LOG:", clima);
    console.log(
      "addClima(clima) URL_SERVICE post -> clima.serv_ts ",
      URL_SERVICE
    );

    this.http.post(URL_SERVICE, clima).subscribe(
      res => {
        console.log("addClima(clima) POST OK -> clima.serv_ts");
      },
      error => {
        console.log("ERROR addClima() post ERROR  -> clima.serv_ts"); //,error
      }
    );
    console.log("addClima(clima) OUT -> clima.serv_ts");
  }

  editarClima(id: any, clima: any) {
    console.log("editarClima(id,clima) -> clima.serv_ts", id, clima);
    let URL_SERVICE = this.URL_SERVICECONST + "climasjson/" + id;
    console.log("editarClima() put URL_SERVICE -> clima.serv_ts", URL_SERVICE);
    this.http.put(URL_SERVICE, clima).subscribe(res => {});
    console.log("edit TEST3", URL_SERVICE, clima);
    console.log("URL_SERVICE:", URL_SERVICE);
  }

  deleteClimaService(id: any) {
    console.log("deleteClimaService(id) -> clima.serv_ts", id);
    let URL_SERVICE = this.URL_SERVICECONST + "climasjson/" + id;
    console.log("DELETE SERVICIO JSON 2", id, URL_SERVICE);
    return this.http.delete(URL_SERVICE).subscribe(res => {});
  }
}
