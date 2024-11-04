import { Employees } from './Employees.tsx';
import { EmployeeDetails } from './EmployeeDetails.tsx';
import { EmployeeForm } from './EmployeeForm.tsx';
import { EmployeeAuth } from './EmployeeAuth.tsx';
import { Authenticated } from './Authenticated.tsx';
import { Logout } from './Logout.tsx';

function App() {
    return (
        <div>
            <Logout />
            <Authenticated>
                <Employees />
                <EmployeeDetails id={1} />
                <EmployeeForm />
            </Authenticated>
            <EmployeeAuth />
        </div>
    );
}

export default App;
