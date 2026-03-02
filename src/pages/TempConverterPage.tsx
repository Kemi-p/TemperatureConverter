import { useState } from "react";
import TemperatureInput from "../components/TemperatureInput";
import { Convert } from "../utils/temperatureConversion";

export default function TempConverterPage() {
    const [temperature, setTemperature] = useState<string>("");
    const [activeScale, setActiveScale] = useState<"celsius" | "farenheit">("celsius")

    const [cityName, setCityName]= useState<string>("");
    const [isLoading, setIsLoading]= useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>("");

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
            "celsius",
            "farenheit"
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

    async function fetchWeatherForCity():Promise<void> {
        if (cityName.trim() === "" )return;
        console.log(import.meta.env.VITE_OPENWEATHER_API_KEY);
        setIsLoading(true);
        setErrorMessage("");

        try{
            const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;
             const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`)

            if (!response.ok) {
                setErrorMessage("City not found. Try agian");
                return;
                
            }

            const data = await response.json();
            const currentTemp: number = data.main.temp;

            setActiveScale("celsius");
            setTemperature(String(currentTemp));
        }catch(error){
            setErrorMessage("Somethng went wrong. Try again")
        }finally{
            setIsLoading(false)
        }

        
    }

    return (
        <div className="flex justify-center items-center min-h-[calc(100vh-56px)]">

            <div className="bg-purple-100 rounded-2xl shadow-md p-10 w-full max-w-md flex flex-col gap-6">
                <h1 className="text-2xl font-bold text-purple-700 text-center">
                    Temperature Converter
                </h1>

                {/** weather sec */}
                <label>Fetch by city</label>
                <input
                type="text"
                value={cityName}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setCityName(event.target.value)}
                placeholder="Enter city name"
                />

                <button 
                onClick={fetchWeatherForCity}
                disabled={isLoading}
                >
                    {isLoading ? "Fetching.." : "Get temperature"}
                    
                </button>
                {errorMessage !== "" && (
                    <p>{errorMessage}</p>
                )}
                {/**================= */}

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