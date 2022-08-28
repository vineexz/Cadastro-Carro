import { DatePipe } from "@angular/common";

export class Cadastro {
  model: string = '';
  hourPrice: number = 0;
  dayPrice: number = 0;
  dateNew!: DatePipe;
  dateEnd!: DatePipe;
}
