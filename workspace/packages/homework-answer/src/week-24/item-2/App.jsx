import './App.css';

function App() {
    const items = [
        {
            company: 'Alfreds Futterkiste',
            contact: 'Maria Anders',
            country: 'Germany',
        },
        {
            company: 'Centro comercial Moctezuma',
            contact: 'Francisco Chang',
            country: 'Mexico',
        },
        {
            company: 'Ernst Handel',
            contact: 'Roland Mendel',
            country: 'Austria',
        },
        { company: 'Island Trading', contact: 'Helen Bennett', country: 'UK' },
        {
            company: 'Laughing Bacchus Winecellars',
            contact: 'Yoshi Tannamuri',
            country: 'Canada',
        },
        {
            company: 'Magazzini Alimentari',
            contact: 'Riuniti Giovanni Rovelli',
            country: 'Italy',
        },
    ];

    return (
        <table>
            <thead>
                <tr>
                    <th>Company</th>
                    <th>Contact</th>
                    <th>Country</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {items.map((item, index) => (
                    <tr key={index}>
                        <td>{item.company}</td>
                        <td>{item.contact}</td>
                        <td>{item.country}</td>
                        <td>
                            <button>Edit</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default App;
