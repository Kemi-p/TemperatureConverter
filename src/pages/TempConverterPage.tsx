import { useState } from "react";
import TemperatureInput from "../components/TemperatureInput";
import { Convert } from "../utils/temperatureConversion";

export default function TempConverterPage() {
    const [temperature, setTemperature] = useState<string>("");
    const [activeScale, setActiveScale] = useState<"celsius" | "farenheit">("celsius")

    let celsiusValue: string;

    if (activeScale === "celsius") {
        celsiusValue = temperature;
    } else if (temperature === "") {
        celsiusValue = "";
    } else {
        const converted = Convert(
            parseFloat(temperature),
            "farenheit",
            "celsius"
        );
        celsiusValue = String(Math.round(converted * 100) / 100);
    }

    let farenheitValue: string;
    if (activeScale === "farenheit") {
        farenheitValue = temperature;
    } else if (temperature === "") {
        farenheitValue = ""
    } else {
        const converted = Convert(
            parseFloat(temperature),
            "farenheit",
            "celsius"
        );
        farenheitValue = String(Math.round(converted * 100) / 100);
    }

    function handleCelsiusChange(newValue: string): void {
        setActiveScale('celsius');
        setTemperature(newValue)
    }

    function handleFarenheitChange(newValue: string): void {
        setActiveScale('farenheit');
        setTemperature(newValue)
    }
    return (
        <div className="flex justify-center items-center min-h-[calc(100vh-56px)]">

            <div className="bg-purple-100 rounded-2xl shadow-md p-10 w-full max-w-md flex flex-col gap-6">
                <h1 className="text-2xl font-bold text-purple-700 text-center">
                    Temperature Converter
                </h1>

                <TemperatureInput
                label="Celcius (°C)"
                value= {celsiusValue}
                unit="celsius"
                onTemperatureChange={handleCelsiusChange}
                />

                <TemperatureInput
                label="Fahrenheit (°F)"
                value= {farenheitValue}
                unit="celsius"
                onTemperatureChange={handleFarenheitChange}
                />
            </div>

        </div>
    );
}