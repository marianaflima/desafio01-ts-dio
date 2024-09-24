import { CompanyAccount } from "./class/CompanyAccount";
import { PeopleAccount } from "./class/PeopleAccount";

const peopleAccount: PeopleAccount = new PeopleAccount(1, "Nath", 10);
peopleAccount.deposit(1000);
console.log(peopleAccount);
const companyAccount: CompanyAccount = new CompanyAccount("DIO", 20);
companyAccount.deposit(5000);
console.log(companyAccount);

peopleAccount.guardarPoupanca(500);
companyAccount.getLoan(1000);

console.log(peopleAccount);
console.log(companyAccount);
