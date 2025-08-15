import React, { useState } from 'react';

export const DropDownExample = () => {
  const [selectedCountry, setSelectedCountry] = useState('IN');
  const [selectedCountry1, setSelectedCountry1] = useState('');

  const countryListWithDetails = [
    {
      name: 'India',
      capital: 'Delhi',
      value: 'IN',
      cities: ['Bangalore', 'Mumbai', 'Kolkata'],
    },
    {
      name: 'Sri Lanka',
      capital: 'Colombo',
      value: 'SL',
      cities: ['Negombo', 'Batticaloa', 'Dambulla'],
    },
    {
      name: 'South Africa',
      capital: 'Cape Town',
      value: 'SA',
      cities: ['Johannesburg', 'Durban', 'Port'],
    },
    {
      name: 'New Zealand',
      capital: 'Wellington',
      value: 'NZ',
      cities: ['Hamilton', 'Tauranga', 'Napier'],
    },
  ];

  const handleChanges = (e) => {
    setSelectedCountry(e.target.value);
  };

  const handleDynamicChanges = (e) => {
    setSelectedCountry1(e.target.value);
  };

  // Find the selected country object for dynamic dropdown
  const selectedCountryDetails = countryListWithDetails.find(
    (country) => country.value === selectedCountry1
  );

  return (
    <div>
      <h1>Countries Drop Down Example Manual</h1>
      <select onChange={handleChanges} value={selectedCountry}>
        <option value="IN">India</option>
        <option value="SL">Sri Lanka</option>
        <option value="SA">South Africa</option>
        <option value="NZ">New Zealand</option>
      </select>
      <p>{selectedCountry}</p>

      <hr />

      <h2>Countries Drop Down Example Dynamic</h2>
      <select onChange={handleDynamicChanges} value={selectedCountry1}>
        <option value="">-- Select Country --</option>
        {countryListWithDetails.map((country, index) => (
          <option key={index} value={country.value}>
            {country.name}
          </option>
        ))}
      </select>

      {selectedCountryDetails && (
        <select>
          {selectedCountryDetails.cities.map((city, index) => (
            <option key={index} value={city}>
              {city}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};
