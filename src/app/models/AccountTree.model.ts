export interface AccountTreeDTO{
    id: number;
    name: string;
    total:number;
    children?: AccountTreeDTO[];
}