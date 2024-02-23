// 6
// src/App.jsx

import React, { useState } from 'react';
import FilterComponent from './components/FilterComponent';
import DataDisplayComponent from './components/DataDisplayComponent';
import api from './services/api';
import Header from './components/Header';

function App() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [productFamily, setProductFamily] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  const fetchData = async () => {
    try {
      const filters = {
        "PRODUCT FAMILY": productFamily,
        "START DATE": startDate,
        "END DATE": endDate,
      };

      const data = await api.fetchData(filters);
      setFilteredData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSearch = async () => {
    try {
      await fetchData();
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleReset = () => {
    setStartDate(null);
    setEndDate(null);
    setProductFamily('');
    setFilteredData([]);
  };

  return (
    <div className="App">
      <Header />
      <FilterComponent
        startDate={startDate}
        endDate={endDate}
        productFamily={productFamily}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        setProductFamily={setProductFamily}
        handleSearch={handleSearch}
        handleReset={handleReset}
      />
      <DataDisplayComponent filteredData={filteredData} />
    </div>
  );
}

export default App;


// 5---------------------------------------------
// src/components/App.jsx
// import React, { useState } from 'react';
// import Header from './components/Header';
// import FilterComponent from './components/FilterComponent';;
// import TableComponent from './components/TableComponent';


// function App() {
//   const [data, setData] = useState([]);
  
//   const handleSearch = (searchParams) => {
//     // Perform fetch request to your actual endpoint
//     fetch('http://localhost:3000/abendData', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(searchParams),
//     })
//       .then(response => response.json())
//       .then(data => setData(data))
//       .catch(error => console.error('Error fetching data:', error));
//   };

//   const handleReset = () => {
//     // Reset the search parameters and data
//     setData([]);
//   };

//   return (
//     <div>
//       <Header />
//       <FilterComponent handleSearch={handleSearch} handleReset={handleReset} />
//       <TableComponent data={data} />
//     </div>
//   );
// }

// export default App;


// -------------------------------------------------------------
// 4.  link with backend file

// import React, { useState } from 'react';
// import FilterComponent from './components/FilterComponent';
// import DataDisplayComponent from './components/DataDisplayComponent';
// import api from './services/api';

// function App() {
//   const [startDate, setStartDate] = useState(null);
//   const [endDate, setEndDate] = useState(null);
//   const [productFamily, setProductFamily] = useState('');
//   const [filteredData, setFilteredData] = useState([]);

//   const fetchData = async () => {
//     try {
//       const filters = {
//         "PRODUCT FAMILY": productFamily,
//         "START DATE": startDate,
//         "END DATE": endDate,
//       };

//       const data = await api.fetchData(filters);
//       setFilteredData(data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   const handleSearch = async () => {
//     try {
//       await fetchData();
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   const handleReset = () => {
//     setStartDate(null);
//     setEndDate(null);
//     setProductFamily('');
//     setFilteredData([]);
//   };

//   return (
//     <div className="App">
//       <h1>Data Filtering App</h1>
//       <FilterComponent
//         startDate={startDate}
//         endDate={endDate}
//         productFamily={productFamily}
//         setStartDate={setStartDate}
//         setEndDate={setEndDate}
//         setProductFamily={setProductFamily}
//         handleSearch={handleSearch}
//         handleReset={handleReset}
//       />
//       <DataDisplayComponent filteredData={filteredData} />
//     </div>
//   );
// }

// export default App;


//-----------------------------------------------------------------------------------------------
// 3 link with data json bile
// import React, { useState, useEffect } from 'react';
// import FilterComponent from './components/FilterComponent';
// import DataDisplayComponent from './components/DataDisplayComponent';
// import abendData from './abendTest.abendData.json'; // Updated file name

// function App() {
//   const [startDate, setStartDate] = useState(null);
//   const [endDate, setEndDate] = useState(null);
//   const [productFamily, setProductFamily] = useState('');
//   const [filteredData, setFilteredData] = useState([]);
//   const [originalData, setOriginalData] = useState([]);

//   useEffect(() => {
//     setOriginalData(abendData);
//     setFilteredData(abendData);
//   }, []);

//   const fetchData = () => {
//     let newData = abendData.filter((item) => {
//       return (
//         (!startDate || new Date(item.DATE) >= startDate) &&
//         (!endDate || new Date(item.DATE) <= endDate) &&
//         (!productFamily || item['PRODUCT FAMILY'].toLowerCase().includes(productFamily.toLowerCase()))
//       );
//     });
//     setFilteredData(newData);
//   };

//   const handleSearch = () => {
//     fetchData();
//   };

//   const handleReset = () => {
//     setStartDate(null);
//     setEndDate(null);
//     setProductFamily('');
//     setFilteredData(originalData);
//   };

//   return (
//     <div className="App">
//       <h1>Data Filtering App</h1>
//       <FilterComponent
//         startDate={startDate}
//         endDate={endDate}
//         productFamily={productFamily}
//         setStartDate={setStartDate}
//         setEndDate={setEndDate}
//         setProductFamily={setProductFamily}
//         handleSearch={handleSearch}
//         handleReset={handleReset}
//       />
//       <DataDisplayComponent filteredData={filteredData} />
//     </div>
//   );
// }

// export default App;


// 2
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

// function App() {
//   const [startDate, setStartDate] = useState(null);
//   const [endDate, setEndDate] = useState(null);
//   const [productFamily, setProductFamily] = useState('');
//   const [filteredData, setFilteredData] = useState([]);
//   const apiUrl = 'http://localhost:3000/abendData';

//   useEffect(() => {
//     fetchData();
//   }, [startDate, endDate, productFamily]);

//   const fetchData = async () => {
//     try {
//       const response = await axios.post(apiUrl, {
//         ...(startDate && endDate && { 'START DATE': startDate.toISOString(), 'END DATE': endDate.toISOString() }),
//         ...(productFamily && { 'PRODUCT FAMILY': productFamily }),
//       });

//       setFilteredData(response.data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   return (
//     <div className="App">
//       <h1>Data Filtering App</h1>
//       <div>
//         <label>Start Date:</label>
//         <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
//       </div>
//       <div>
//         <label>End Date:</label>
//         <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
//       </div>
//       <div>
//         <label>Product Family:</label>
//         <input type="text" value={productFamily} onChange={(e) => setProductFamily(e.target.value)} />
//       </div>
//       <button onClick={fetchData}>Filter Data</button>
//       <div>
//         <h2>Filtered Data:</h2>
//         <pre>{JSON.stringify(filteredData, null, 2)}</pre>
//       </div>
//     </div>
//   );
// }

// export default App;


// 1
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
