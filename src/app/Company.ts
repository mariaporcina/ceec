export interface Company {
    id?: number;
    businessName: string;
    cnpj: string;
    fantasia: string;
    phone: string;
    cep: string;
    city: string;
    state: string;
    email: string;
    status: boolean;
    comments?: [{ text: string; username: string }];
}