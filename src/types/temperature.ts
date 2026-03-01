// here I am defining what a temperature object will look like. 
export type TemeperatureUnit = "celcius" | "farenheit";

export type Temperature ={
    unti: TemeperatureUnit,
    value: number,
    symbol: string
}