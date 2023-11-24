export interface RoootAccout{
    idRoot:number;
    name:string;
    description: string;
    code: string;
    total: number;
    debe:string;
    haber:string
}
export interface RoootAccoutDTO extends Omit<RoootAccout, 'idRoot'>{

}