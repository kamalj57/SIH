import React, { useState, useRef } from 'react';
import Ps from './Pstable.module.css';


export default function Pstable() {
  const [counters, setCounters] = useState({
    totalProjects: 0,
    universitiesContributing: 0,
  });
  const [tableData, setTableData] = useState([
    { id: 1, name: 'online store', domain: 'miscellaneous', category: 'software', download: 12 },
    { id: 2, name: 'ebook', domain: 'miscellaneous', category: 'software', download: 12 },
    { id: 3, name: 'hospital management', domain: 'health', category: 'software', download: 12 },
    { id: 4, name: 'automated cars', domain: 'smart vehicles', category: 'hardware', download: 12 },
    { id: 5, name: 'monitoring system', domain: 'smart automation', category: 'software', download: 12 },
    { id: 6, name: 'image recognition', domain: 'machine learning', category: 'software', download: 12 },
    { id: 7, name: 'disease prediction', domain: 'health', category: 'software', download: 12 },
  ]);
  const [searchQuery, setSearchQuery] = useState('');
  const [domainFilter, setDomainFilter] = useState('All');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const filteredTableData = tableData.filter(row =>
    row.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (domainFilter === 'All' || row.domain === domainFilter) &&
    (categoryFilter === 'All' || row.category === categoryFilter)
  );
  const tableRef = useRef(null);
  const handleScrollToTable = () => {
    if (tableRef.current) {
      tableRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };
  return (
    <div className={Ps.main}>
      <div className={Ps.container}>
        <div className={Ps.uni}>
          <h1 ref={tableRef}>Search For<span> Projects</span> here</h1>
        </div>
        <div className={Ps.tv}>
          <div className={Ps.searchFilters}>
            
              <input
                type="text"
                placeholder="Search by Project Title"
                value={searchQuery}
                className={Ps.search}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            
           
              <select
                value={domainFilter}
                onChange={(e) => setDomainFilter(e.target.value)}
                className={Ps.slct}
              >
                <option value="All">All Domains</option>
                <option value="miscellaneous">Miscellaneous</option>
                <option value="health">Health</option>
              </select>
            
           
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
              >
                <option value="All">All Categories</option>
                <option value="software">Software</option>
                <option value="hardware">Hardware</option>
              </select>
            
          </div>
          <table id="myTable">
            <thead>
              <tr>
                <th scope="col">
                  <span>S.</span> No
                </th>
                <th scope="col">
                  <span>Project</span> Title
                </th>
                <th scope="col">Domain <span>Type</span></th>
                <th scope="col">Category <span>of Project</span></th>
                <th scope="col">No of <span>Downloads</span></th>
              </tr>
            </thead>
            <tbody>
              {filteredTableData.map((row, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{row.name}</td>
                  <td>{row.domain}</td>
                  <td>{row.category}</td>
                  <td>{row.download}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className={Ps.searchKeywords}>
            {searchQuery && (
              <p>Keywords Searched: {searchQuery}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
