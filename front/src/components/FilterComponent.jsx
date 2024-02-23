// 5
import React from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import { DatePicker } from '@mui/x-date-pickers';
// import { DatePicker } from '@mui/x-date-pickers-pro';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const FilterComponent = ({
  startDate,
  endDate,
  productFamily,
  setStartDate,
  setEndDate,
  setProductFamily,
  handleSearch,
  handleReset,
}) => {
  const productFamilyOptions = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];
  return (
    <div className='main-container'>
      <div className='search-container'>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={['DatePicker']}>
            <DatePicker value={startDate} onChange={(newValue) => setStartDate(newValue)} />
          </DemoContainer>
        </LocalizationProvider>
      </div>
      <div className='search-container'>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={['DatePicker']}>
            <DatePicker value={endDate} onChange={(newValue) => setEndDate(newValue)} />
          </DemoContainer>
        </LocalizationProvider>
      </div>
      <div className='search-container'>
        <select
          style={{ height: 55 }}
          className="search-box"
          options={productFamilyOptions}
          placeholder="Product Family"
          value={productFamily}
          onChange={(e) => setProductFamily(e.target.value)}
        >
          {productFamilyOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Product Family:</label>
      </div>
      <div className='search-container'>

        <div>
          <input type="text" className='search-box' value={productFamily} onChange={(e) => setProductFamily(e.target.value)} />
        </div>
      </div>
      <div className='search-container'>
        <button onClick={handleSearch} className='btn'>Search</button>
        <button onClick={handleReset} className='btn'>Reset</button>
      </div>
    </div>
  );
};

export default FilterComponent;



// 4 -------------------------------------------------
// src/components/FilterComponent.jsx

// import React from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

// const FilterComponent = ({
//   startDate,
//   endDate,
//   productFamily,
//   setStartDate,
//   setEndDate,
//   setProductFamily,
//   handleSearch,
//   handleReset,
// }) => {
//   return (
//     <div>
//       <h2>Filter</h2>
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
//       <button onClick={handleSearch}>Search</button>
//       <button onClick={handleReset}>Reset</button>
//     </div>
//   );
// };

// export default FilterComponent;


// 3-----------------------------------------
// import React, { useState } from 'react';

// const FilterComponent = ({ handleSearch, handleReset }) => {
//   const [searchParams, setSearchParams] = useState({
//     // Define your search parameters here
//     // For example:
//     startDate: '',
//     endDate: '',
//     productFamily: '',
//     ipcActvProgram: '',
//     transaction: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setSearchParams(prevState => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSearchClick = () => {
//     handleSearch(searchParams);
//   };

//   const handleResetClick = () => {
//     handleReset();
//   };

//   return (
//     <div>
//       {/* Input fields for search parameters */}
//       <input type="text" name="startDate" value={searchParams.startDate} onChange={handleChange} />
//       <input type="text" name="endDate" value={searchParams.endDate} onChange={handleChange} />
//       <input type="text" name="productFamily" value={searchParams.productFamily} onChange={handleChange} />
//       <input type="text" name="ipcActvProgram" value={searchParams.ipcActvProgram} onChange={handleChange} />
//       <input type="text" name="transaction" value={searchParams.transaction} onChange={handleChange} />
//       {/* Search button */}
//       <button onClick={handleSearchClick}>Search</button>
//       {/* Reset button */}
//       <button onClick={handleResetClick}>Reset</button>
//     </div>
//   );
// };

// export default FilterComponent;


// --------------------------------------
// 2
// src/components/FilterComponent.jsx
// import React, { useState } from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

// const FilterComponent = ({ handleSearch, handleReset }) => {
//   const [startDate, setStartDate] = useState(null);
//   const [endDate, setEndDate] = useState(null);

//   const handleStartDateChange = (date) => {
//     setStartDate(date);
//   };

//   const handleEndDateChange = (date) => {
//     setEndDate(date);
//   };

//   const handleSearchClick = () => {
//     // Perform your search logic here using startDate and endDate
//     handleSearch({ startDate, endDate });
//   };

//   const handleResetClick = () => {
//     // Reset the state and perform any additional reset logic
//     setStartDate(null);
//     setEndDate(null);
//     handleReset();
//   };

//   return (
//     <div>
//       <h2>prod-abend</h2>
//       <div>
//         <label>Start Date:</label>
//         <DatePicker selected={startDate} onChange={handleStartDateChange} />
//       </div>
//       <div>
//         <label>End Date:</label>
//         <DatePicker selected={endDate} onChange={handleEndDateChange} />
//       </div>
//       <div>
//         <button onClick={handleSearchClick}>Search</button>
//         <button onClick={handleResetClick}>Reset</button>
//       </div>
//     </div>
//   );
// };

// export default FilterComponent;


// 1---------------------------------------------------------
// src/components/FilterComponent.jsx

// import React, { useState} from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

// const FilterComponent = ({
//   startDate,
//   endDate,
//   productFamily,
//   setStartDate,
//   setEndDate,
//   setProductFamily,
//   handleSearch,
//   handleReset,
// }) => {
//   return (
//     <div>
//       <h2>Filter</h2>
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
//       <button onClick={handleSearch}>Search</button>
//       <button onClick={handleReset}>Reset</button>
//     </div>
//   );
// };

// export default FilterComponent;
