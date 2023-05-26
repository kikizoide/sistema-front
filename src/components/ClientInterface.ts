export interface ClientInterface {
    _id: string;
    name: string;
    responsible: string;
    contractValue: number;
    active: boolean; // Corrija aqui, se necessário
    startDate: string;
}
