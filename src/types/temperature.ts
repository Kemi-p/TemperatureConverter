// here I am defining what a temperature object will look like. 
export type TemeperatureUnit = "celsius" | "farenheit";

export type Temperature ={
    unti: TemeperatureUnit,
    value: number,
    symbol: string
}

export type Employee ={
    id:number,
    name: string,
    role:string,
    department:string
}