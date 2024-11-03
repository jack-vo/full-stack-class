import { Employees } from './Employees.tsx';
import { EmployeeDetails } from './EmployeeDetails.tsx';
import { EmployeeForm } from './EmployeeForm.tsx';

function App() {
    return (
        <div>
            <h1>List of employees</h1>
            <Employees />
            <EmployeeDetails id={1} />
            <EmployeeForm />
        </div>
    );
}

export default App;
