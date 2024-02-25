
import './table.css';

import { entrepriseData } from '../../data/entrepriseData.js';
import { useState } from 'react';

const Table = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [filterQuery, setFilterQuery] = useState('');
    const indexOfLastItem = currentPage * 4;
    const indexOfFirstItem = indexOfLastItem - 4;

    const filteredData = entrepriseData.filter(item => {
        return (
            item.Nom.toLowerCase().includes(filterQuery.toLowerCase()) ||
            item.Email.toLowerCase().includes(filterQuery.toLowerCase()) ||
            item.Pays.toLowerCase().includes(filterQuery.toLowerCase()) ||
            item.Contact.toLowerCase().includes(filterQuery.toLowerCase()) ||
            item.Téléphone.toLowerCase().includes(filterQuery.toLowerCase()) ||
            item.Status.includes(filterQuery) ||
            item.Actions.toLowerCase().includes(filterQuery.toLowerCase())
        );
    });

    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(entrepriseData.length / 4);

    const paginate = pageNumber => setCurrentPage(pageNumber);
    const handleFilterChange = event => {
        setFilterQuery(event.target.value);
        setCurrentPage(1); // Reset current page when filter changes
    };
    return (
        <section className='table' >
            <div className="table-wrapper">
                <div className='table-top'>
                    <h4>🚘 Entreprises</h4>
                    <input
                        type="text"
                        value={filterQuery}
                        onChange={handleFilterChange}
                        placeholder="Filter..."
                    />
                </div>
                <table >
                    <thead>
                        <tr style={{ backgroundColor: '#f2f2f2' }}>
                            <th>Nom</th>
                            <th >Email</th>
                            <th >Pays</th>
                            <th>Contact</th>
                            <th >Téléphone</th>
                            <th >Status</th>
                            <th >Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.map((row, index) => (
                            <tr key={index}>
                                <td>{row.Nom}</td>
                                <td>{row.Email}</td>
                                <td >{row.Pays}</td>
                                <td >{row.Contact}</td>
                                <td >{row.Téléphone}</td>
                                <td >{row.Status}</td>
                                <td >{row.Actions}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div style={{ marginTop: '1rem' }}>
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button key={index} onClick={() => paginate(index + 1)}>
                            {index + 1}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Table;