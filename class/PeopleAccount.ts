import { DioAccount } from "./DioAccount";

export class PeopleAccount extends DioAccount {
  private doc_id: number;

  constructor(doc_id: number, name: string, accountNumber: number) {
    super(name, accountNumber);
    this.doc_id = doc_id;
  }

  guardarPoupanca = (value: number): void => {
    value += 10;
    this.deposit(value);
    console.log("Seu depósito foi de R$", value.toFixed(2));
  };
}
