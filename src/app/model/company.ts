export class Company {
    id?: string;
    corporateName: string;
    name: string;
    cnpj: string;
    email: string;
    postalCode: string;
    city: string;
    state: string;
    status?: boolean;

    constructor(corporateName: string, name: string, cnpj: string, email: string, postalCode: string, city: string, state: string, status: boolean = true) {
        this.id = String(Math.round(Math.random() * 1000));
        this.corporateName = corporateName;
        this.name = name;
        this.cnpj = cnpj;
        this.email = email;
        this.postalCode = postalCode;
        this.city = city;
        this.state = state;
        this.status = status;
    }
}