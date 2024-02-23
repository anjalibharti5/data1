// src/components/DataDisplayComponent.jsx

import React from 'react';
import TableComponent from './TableComponent';

const DataDisplayComponent = ({ filteredData }) => {
  return (
    <div>
      <h2>Filtered Data</h2>
     <TableComponent data= {filteredData}/>
    </div>
  );
};

export default DataDisplayComponent;
