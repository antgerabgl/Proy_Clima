import { Component, Output, EventEmitter, Input } from "@angular/core";

@Component({
  selector: "app-modal2",
  templateUrl: "./modal2.component.html",
  styleUrls: ["./modal2.component.css"]
})
export class ModalComponent2 {
  climaArrayServ_Comp: any = [];
  @Input() pais: string;
  @Input() ciudad: string; //= "HOLA CIUDAD"
  @Input() grados: number; //= 21

  @Output() passEntry: EventEmitter<any> = new EventEmitter();

  passBack(event: any) {
    console.log("passBack() -> modal2.comp_ts", event);
  }
}
