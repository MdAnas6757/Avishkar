import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import aqiData from './data.json';
import styles from './styles.css';
import { Chart, ArcElement } from 'chart.js';

Chart.register(ArcElement);

const getRandomCountries = () => {
  const randomCountries = [];
  const countries = aqiData.countries;
  const numCountries = 10;
  const numTotalCountries = countries.length;

  // Select 10 random countries
  while (randomCountries.length < numCountries) {
    const randomIndex = Math.floor(Math.random() * numTotalCountries);
    const country = countries[randomIndex];
    if (!randomCountries.includes(country)) {
      randomCountries.push(country);
    }
  }

  return randomCountries;
};

const Dashboard = () => {
  const [randomCountries, setRandomCountries] = useState([]);

  useEffect(() => {
    const countries = getRandomCountries();
    setRandomCountries(countries);
  }, []);

  const chartData = {
    labels: randomCountries.map((country, index) => `${index + 1} ${country.name} (${country.aqi})`),
    datasets: [
      {
        label: 'AQI',
        data: randomCountries.map(country => country.aqi),
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)'
        ]
      }
    ]
  };

  const chartOptions = {
    plugins: {
      tooltip: {
        callbacks: {
          label: function(context) {
            let label = context.label || '';
            if (context.parsed.y !== null) {
              label += `: ${context.dataset.data[context.dataIndex]} - ${context.label}`;
            }
            return label;
          }
        }
      },
      legend: {
        display: false
      }
    }
  };

  return (
    
    <div className="dashboard-container">
         <h1>Country-wise AQI</h1>
      <div className="chart-wrapper">
        <Pie data={chartData} options={chartOptions} />
      </div>
      <div className="country-list">
        {randomCountries.map((country, index) => (
          <div key={index} className="country-item" style={{ color: chartData.datasets[0].backgroundColor[index] }}>
            {`${index + 1} ${country.name} (${country.aqi})`}
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Dashboard;








