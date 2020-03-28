import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

//Modulos
import { FormsModule } from "@angular/forms";

//Componentes
import { AppComponent } from "./app.component";
import { ConsultaComponent } from "./components/consulta/consulta.component";
import { ClimasComponent } from "./components/climas/climas.component";
import { ClimaComponent } from "./components/clima/clima.component";
import { ModalComponent } from "./components/modal/modal.component";
import { HttpClientModule } from "@angular/common/http";
import { ModalComponent2 } from "./components/modal2/modal2.component";

//Servicios
import { ClimaService } from "./services/clima/clima.services";

@NgModule({
  declarations: [
    AppComponent,
    ConsultaComponent,
    ClimasComponent,
    ClimaComponent,
    ModalComponent,
    ModalComponent2
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [ClimaService],
  bootstrap: [AppComponent]
})
export class AppModule {}
