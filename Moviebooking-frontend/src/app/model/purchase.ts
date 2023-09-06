import { Customer } from "./customer";
export class Purchase {
    id: number=0;
    dop:Date= new Date();
    productname:string='';
    quantity:number=0;
    totalcost:number=0;
    transactionid:string='';
    customer: Customer = new Customer();
}