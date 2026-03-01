import type { Employee } from "../types/temperature";

interface EmployeeListProps{
    filteredEmployees: Employee[];
}

export default function EmployeeList({ filteredEmployees }: EmployeeListProps) {
  if (filteredEmployees.length === 0) {
    return <p className="text-purple-400">No employees match your search.</p>;
  }

  return (
    <ul className="flex flex-col gap-2">
      {filteredEmployees.map((employee: Employee) => (
        <li
          key={employee.id}
          className="bg-purple-50 p-3"
        >
          <p className="text-purple-700 font-semibold">{employee.name}</p>
          <p className="text-purple-500 text-sm">{employee.role} — {employee.department}</p>
        </li>
      ))}
    </ul>
  );
}