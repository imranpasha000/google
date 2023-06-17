import React, { useEffect, useState } from 'react';

const CountryDetails = ({ countryCode }) => {
  const [countryData, setCountryData] = useState(null);

  useEffect(() => {
    const fetchCountryDetails = async () => {
      try {
        const response = await fetch(`https://api.example.com/countries/${countryCode}`);
        if (response.ok) {
          const data = await response.json();
          setCountryData(data);
        } else {
          console.log('Failed to fetch country details.');
        }
      } catch (error) {
        console.log('Error:', error);
      }
    };

    fetchCountryDetails();
  }, [countryCode]);

  if (!countryData) {
    return <div>Loading...</div>;
  }

  const { name, capital, population, area, languages, currency } = countryData;

  return (
    <div>
      <h2>Country: {name}</h2>
      <p>Capital: {capital}</p>
      <p>Population: {population}</p>
      <p>Area: {area} square kilometers</p>
      <p>Languages: {languages.join(', ')}</p>
      <p>Currency: {currency}</p>
    </div>
  );
};

export default CountryDetails;