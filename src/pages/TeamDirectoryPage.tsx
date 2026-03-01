import type { Employee } from "../types/temperature";

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

export default function TeamDirectoryPage(){
    return(
    <div className="p-8">
    
      <h1 className="text-2xl font-bold text-purple-600">Employes</h1>
      <p className="text-purple-400 mt-2">test</p>

      
    </div>
    );
}