import type { TemeperatureUnit } from "../types/temperature";

interface TemperatureInputProps {
    label: string;
    value: string;
    unit: TemeperatureUnit;
    onTemperatureChange: (newValue: string) => void;
}

export default function TemperatureInput({
  label,
  value,
  unit,
  onTemperatureChange,
}: TemperatureInputProps) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-purple-600 font-semibold">{label}</label>
      <input
        type="number"
        value={value}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          onTemperatureChange(event.target.value)
        }
        placeholder={`Enter ${unit}`}
        className="border border-purple-200 rounded-md p-2 bg-white focus:outline-none focus:ring-2 focus:ring-purple-300"
      />
    </div>
  );
}