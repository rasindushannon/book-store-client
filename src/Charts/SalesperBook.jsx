import { Chart as ChartJS } from 'chart.js/auto'
import {Bar, Pie} from 'react-chartjs-2'
import React, { useEffect, useState } from 'react';
import ChartDataLabels from 'chartjs-plugin-datalabels';


const SalesperBook = () => {
    // State for chart data
    const [salesPerBookData, setSalesPerBookData] = useState({
      labels: [],
      datasets: [{
        label: "Sales per Book",
        data: [],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      }]
    });
  
    // Fetch data from backend API
    useEffect(() => {
      async function fetchSalesPerBookData() {
        try {
          const response = await fetch('http://localhost:5000/top-selling-books');  // Your backend API URL
          const data = await response.json();
  
          // Extract labels and data
          const labels = data.map(book => book.bookTitle);
          const salesData = data.map(book => book.totalSales);
  
          // Update state with the fetched data
          setSalesPerBookData({
            labels: labels,
            datasets: [{
              label: "Sales per Book",
              data: salesData,
              backgroundColor: 'rgba(75, 192, 192, 0.6)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1
            }]
          });
        } catch (error) {
          console.error("Error fetching sales per book data:", error);
        }
      }
  
      fetchSalesPerBookData();
    }, []);  // Empty dependency array ensures this runs only once
  
    // Fixed container size for the chart (e.g., 800px width) while enabling scrolling
    return (
      <div className="bg-white shadow-md p-4 rounded-lg">
        <h2 className="text-lg font-semibold mb-4">Sales per Book</h2>
  
        {/* Scrollable container for the chart */}
        <div style={{ width: '800px', overflowX: 'auto' }}>
          <div style={{ width: salesPerBookData.labels.length * 50 + 'px' }}>
            <Bar
              data={salesPerBookData}
              options={{
                responsive: true,
                maintainAspectRatio: false,  // This will maintain the aspect ratio but allow the chart to resize as needed
                scales: {
                  y: {
                    beginAtZero: true
                  }
                }
              }}
              height={400}  // Set fixed height for the chart
            />
          </div>
        </div>
      </div>
    );
  };
  
  export default SalesperBook;
