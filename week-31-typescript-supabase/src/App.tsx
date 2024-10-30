import { Employees } from './Employees.tsx';
import { EmployeeDetails } from './utils/EmployeeDetails.tsx';

function App() {
    return (
        <div>
            <h1>List of employees</h1>
            <Employees />
            <EmployeeDetails id={1} />
        </div>
    );
}

export default App;
