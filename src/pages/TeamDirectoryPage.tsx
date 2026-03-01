import type { Employee } from "../types/temperature";
import { useState } from "react";
import EmployeeList from "../components/EmployeeList";
import SearchBox from "../components/SearchBox";

export const employeeList: Employee[] = [
  { id: 1, name: "Alice Nakamura", role: "Frontend Developer", department: "Engineering" },
  { id: 2, name: "Ben Okafor", role: "Backend Developer", department: "Engineering" },
  { id: 3, name: "Clara Singh", role: "Product Manager", department: "Product" },
  { id: 4, name: "David Chen", role: "UX Designer", department: "Design" },
  { id: 5, name: "Elena Vasquez", role: "Data Scientist", department: "Analytics" },
  { id: 6, name: "Felix Müller", role: "DevOps Engineer", department: "Engineering" },
  { id: 7, name: "Grace Liu", role: "QA Engineer", department: "Engineering" },
  { id: 8, name: "Hamid Reza", role: "Marketing Lead", department: "Marketing" },
];

export default function TeamDirectoryPage() {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredEmployees: Employee[] = employeeList.filter((employee: Employee) => {
    const lowercQuery = searchQuery.toLowerCase();
    return (
      employee.name.toLowerCase().includes(lowercQuery) ||
      employee.role.toLowerCase().includes(lowercQuery) ||
      employee.department.toLowerCase().includes(lowercQuery)
    );
  });

  return (
    <div className="flex items-start min-h-[calc(100vh-56px)] pt-10">
      <div className="bg-purple-100 rounded-2xl shadow-md p-10 w-full max-w-md flex flex-col gap-6">
        <h1 className="text-2xl font-bold text-purple-700 text-center">
          Team Directory
        </h1>

        <SearchBox
          filterText={searchQuery}
          onFilterTextChange={setSearchQuery}
        />

        <p className="text-purple-400 text-sm">
          {filteredEmployees.length} of {employeeList.length} employees shown
        </p>

        <EmployeeList filteredEmployees={filteredEmployees} />
      </div>
    </div>
  );
}