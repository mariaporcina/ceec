export class Company {
    id?: string;
    businessName: string;
    name: string;
    cnpj: string;
    email: string;
    phone: string;
    cep: string;
    city: string;
    state: string;
    status?: boolean;

    constructor(businessName: string, name: string, cnpj: string, email: string, phone: string, cep: string, city: string, state: string, status: boolean = true) {
        this.id = String(Math.round(Math.random() * 1000));
        this.businessName = businessName;
        this.name = name;
        this.cnpj = cnpj;
        this.email = email;
        this.phone = phone;
        this.cep = cep;
        this.city = city;
        this.state = state;
        this.status = status;
    }
}