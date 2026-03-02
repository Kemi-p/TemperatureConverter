//handling all my convesions using open/closed principle
import type { TemeperatureUnit } from "../types/temperature";

/**
 * 
 * **Celsius to Fahrenheit:** $F = C \times \frac{9}{5} + 32$
* **Fahrenheit to Celsius:** $C = (F - 32) \times \frac{5}{9}$
 */
//my function taking in a num val and 2 temp uits and the returns a number 
export function Convert(
    value:number,
    fromUnit: TemeperatureUnit,
    toUnit: TemeperatureUnit
) : number {
    if (fromUnit === toUnit) return value;

    if (fromUnit === 'celsius' && toUnit === 'farenheit'){
        return ((value * 9/5) +32);
    }

    if (fromUnit === 'farenheit' && toUnit === "celsius"){
        return ((value - 32) * (5/9));
    }

    return value;
}
