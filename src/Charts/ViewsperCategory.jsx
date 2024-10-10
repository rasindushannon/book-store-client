import { Chart as ChartJS } from 'chart.js/auto'
import {Bar, Pie} from 'react-chartjs-2'
import React, { useEffect, useState } from 'react';
import ChartDataLabels from 'chartjs-plugin-datalabels';

const ViewsPerCategory = () => {
    // State to hold the dynamic data
    const [viewsPerCategoryData, setViewsPerCategoryData] = useState({
      labels: [],
      datasets: [{
        label: "Views",
        data: [],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)'
        ],
        borderWidth: 1
      }]
    });
  
    // Fetch data from backend API
    useEffect(() => {
      async function fetchViewsPerCategoryData() {
        try {
          const response = await fetch('http://localhost:5000/views-per-category');  // Your backend API URL
          const data = await response.json();
  
          // Extract labels and data from the response
          const labels = data.map(category => category.category);
          const viewsData = data.map(category => category.totalViews);
  
          // Update state with the fetched data
          setViewsPerCategoryData({
            labels: labels,
            datasets: [{
              label: "Views",
              data: viewsData,
              backgroundColor: [
                'rgba(255, 99, 132, 0.6)',  // Customize colors as needed
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)'
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
              ],
              borderWidth: 1
            }]
          });
        } catch (error) {
          console.error("Error fetching views per category data:", error);
        }
      }
  
      fetchViewsPerCategoryData();
    }, []);
  
    // Render the Pie chart
    return (
      <div className="bg-white shadow-md p-4 rounded-lg">
        <h2 className="text-lg font-semibold mb-4">Views per Category</h2>
        <Pie
          data={viewsPerCategoryData}
          options={{
            plugins: {
              tooltip: {
                enabled: true
              }
            }
          }}
        />
      </div>
    );
  };
  
  export default ViewsPerCategory;