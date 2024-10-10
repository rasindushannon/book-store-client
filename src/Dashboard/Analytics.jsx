
import { Chart as ChartJS } from 'chart.js/auto'
import {Bar, Pie} from 'react-chartjs-2'
import React, { useEffect, useState } from 'react';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import SalesperBook from '../Charts/SalesperBook';
import ViewsperCategory from '../Charts/ViewsperCategory';


const Analytics = () => {

  return (
 /* <div className="Appflex-1 p-6">
    <h1 className="text-3xl font-semibold mb-6 pt-6">Analytics</h1> 
        <div className='dataCard revenue'>
        <Bar
            data={{
                labels: ["A", "B", "C"],

                datasets: [
                    {
                        label: "revenue",
                        data: [200,300,400],

                    }
                ]
            }}
            />
        </div>
        <div className='dataCard rcustomer'>
            <Bar
            data={{
                labels: ["A", "B", "C"],

                datasets: [
                    {
                        label: "revenue",
                        data: [200,300,400],

                    }
                ]
            }}
            />
        </div>
        <div className='dataCard category'>
        <Bar
            data={{
                labels: ["A", "B", "C"],

                datasets: [
                    {
                        label: "revenue",
                        data: [200,300,400],

                    }
                ]
            }}
            /> 
        </div> 
        
     </div> */
     <div>
              {/* Main Content */}
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-semibold mb-6">Dashboard</h1>
        

        {/* Bar Charts Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Chart 1 */}
          <SalesperBook/>
          

          {/* Chart 3 */}
          <div className="bg-white shadow-md p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-4">Conversion Rate per Category</h2>
          <Bar
              data={{
                labels: [
                  "Fiction", 
                  "Self-help", 
                  "Science Fiction", 
                  "Biography", 
                  "Fantasy"
                ],
                datasets: [
                  {
                    label: "Conversion Rate (%)",
                    data: [5.2, 3.8, 6.5, 2.9, 4.7], // Replace with actual conversion rates
                    backgroundColor: 'rgba(75, 192, 192, 0.6)', // Customize bar color
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1,
                  }
                ]
              }}
              options={{
                scales: {
                  y: {
                    beginAtZero: true,
                    max: 10, // Adjust the max value if needed (assuming the conversion rates are percentages)
                    ticks: {
                      callback: function(value) {
                        return value + "%"; // Add % symbol to the y-axis labels
                      }
                    }
                  }
                }
              }}

            />
          </div>

          {/* Chart 4 */}
          <div className="bg-white shadow-md p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-4">Views per Category</h2>
          <ViewsperCategory/>
          <Pie
              data={{
                labels: [
                  "Fiction", 
                  "Self-help", 
                  "Science Fiction", 
                  "Biography", 
                  "Fantasy"
                ],
                datasets: [
                  {
                    label: "Views",
                    data: [1200, 800, 950, 600, 1050], // Replace with actual view data
                    backgroundColor: [
                      'rgba(255, 99, 132, 0.6)', // Color for Fiction
                      'rgba(54, 162, 235, 0.6)', // Color for Self-help
                      'rgba(255, 206, 86, 0.6)', // Color for Science Fiction
                      'rgba(75, 192, 192, 0.6)', // Color for Biography
                      'rgba(153, 102, 255, 0.6)'  // Color for Fantasy
                    ],
                    borderColor: [
                      'rgba(255, 99, 132, 1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(255, 206, 86, 1)',
                      'rgba(75, 192, 192, 1)',
                      'rgba(153, 102, 255, 1)'
                    ],
                    borderWidth: 1
                  }
                ]
              }}
              options={{
                plugins: {
                  tooltip: {
                    enabled: true
                  }
                }
              }}

            />
          </div>
        </div>

        {/* Scrollable Tables with Fixed Headers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
  
          {/* Table 2 */}
          <div className="bg-white shadow-md p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-4">Book Sales Data</h2>
            <div className="max-h-48 overflow-y-auto">
              <table className="min-w-full table-auto">
                <thead className="sticky top-0 bg-white">
                  <tr>
                    <th className="px-4 py-2">BookID</th>
                    <th className="px-4 py-2">Book Name</th>
                    <th className="px-4 py-2">Category</th>
                    <th className="px-4 py-2">Sales</th>
                  </tr>
                </thead>
                <tbody>
                <tr>
    <td className="border px-4 py-2">book15</td>
    <td className="border px-4 py-2">To Kill a Mockingbird</td>
    <td className="border px-4 py-2">Fiction</td>
    <td className="border px-4 py-2">120</td>
  </tr>
  <tr>
    <td className="border px-4 py-2">book8</td>
    <td className="border px-4 py-2">The Alchemist</td>
    <td className="border px-4 py-2">Self-help</td>
    <td className="border px-4 py-2">85</td>
  </tr>
  <tr>
    <td className="border px-4 py-2">book2</td>
    <td className="border px-4 py-2">Harry Potter and the Philosopher's Stone</td>
    <td className="border px-4 py-2">Fiction</td>
    <td className="border px-4 py-2">140</td>
  </tr>
  <tr>
    <td className="border px-4 py-2">book19</td>
    <td className="border px-4 py-2">Dune</td>
    <td className="border px-4 py-2">Science Fiction</td>
    <td className="border px-4 py-2">95</td>
  </tr>
  <tr>
    <td className="border px-4 py-2">book4</td>
    <td className="border px-4 py-2">The Catcher in the Rye</td>
    <td className="border px-4 py-2">Fiction</td>
    <td className="border px-4 py-2">70</td>
  </tr>
  <tr>
    <td className="border px-4 py-2">book12</td>
    <td className="border px-4 py-2">The Power of Habit</td>
    <td className="border px-4 py-2">Self-help</td>
    <td className="border px-4 py-2">60</td>
  </tr>
  <tr>
    <td className="border px-4 py-2">book6</td>
    <td className="border px-4 py-2">Brave New World</td>
    <td className="border px-4 py-2">Science Fiction</td>
    <td className="border px-4 py-2">110</td>
  </tr>
  <tr>
    <td className="border px-4 py-2">book11</td>
    <td className="border px-4 py-2">The Road</td>
    <td className="border px-4 py-2">Science Fiction</td>
    <td className="border px-4 py-2">50</td>
  </tr>
  <tr>
    <td className="border px-4 py-2">book1</td>
    <td className="border px-4 py-2">How to Kill A Mocking Bird</td>
    <td className="border px-4 py-2">Fiction</td>
    <td className="border px-4 py-2">100</td>
  </tr>
  <tr>
    <td className="border px-4 py-2">book9</td>
    <td className="border px-4 py-2">1984</td>
    <td className="border px-4 py-2">Science Fiction</td>
    <td className="border px-4 py-2">90</td>
  </tr>
  <tr>
    <td className="border px-4 py-2">book17</td>
    <td className="border px-4 py-2">The Hobbit</td>
    <td className="border px-4 py-2">Fiction</td>
    <td className="border px-4 py-2">130</td>
  </tr>
  <tr>
    <td className="border px-4 py-2">book7</td>
    <td className="border px-4 py-2">Fahrenheit 451</td>
    <td className="border px-4 py-2">Science Fiction</td>
    <td className="border px-4 py-2">45</td>
  </tr>
  <tr>
    <td className="border px-4 py-2">book18</td>
    <td className="border px-4 py-2">Lord of the Flies</td>
    <td className="border px-4 py-2">Fiction</td>
    <td className="border px-4 py-2">60</td>
  </tr>
  <tr>
    <td className="border px-4 py-2">book5</td>
    <td className="border px-4 py-2">The Great Gatsby</td>
    <td className="border px-4 py-2">Fiction</td>
    <td className="border px-4 py-2">75</td>
  </tr>
  <tr>
    <td className="border px-4 py-2">book13</td>
    <td className="border px-4 py-2">Pride and Prejudice</td>
    <td className="border px-4 py-2">Fiction</td>
    <td className="border px-4 py-2">95</td>
  </tr>
  <tr>
    <td className="border px-4 py-2">book20</td>
    <td className="border px-4 py-2">Moby Dick</td>
    <td className="border px-4 py-2">Fiction</td>
    <td className="border px-4 py-2">65</td>
  </tr>
  <tr>
    <td className="border px-4 py-2">book14</td>
    <td className="border px-4 py-2">Emma</td>
    <td className="border px-4 py-2">Fiction</td>
    <td className="border px-4 py-2">50</td>
  </tr>
  <tr>
    <td className="border px-4 py-2">book3</td>
    <td className="border px-4 py-2">Sense and Sensibility</td>
    <td className="border px-4 py-2">Fiction</td>
    <td className="border px-4 py-2">35</td>
  </tr>
  <tr>
    <td className="border px-4 py-2">book16</td>
    <td className="border px-4 py-2">The Odyssey</td>
    <td className="border px-4 py-2">Biography</td>
    <td className="border px-4 py-2">90</td>
  </tr>


                </tbody>
              </table>
            </div>
          </div>

          {/* Table 3 */}
          <div className="bg-white shadow-md p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-4">Inventory Data</h2>
            <div className="max-h-48 overflow-y-auto">
              <table className="min-w-full table-auto">
                <thead className="sticky top-0 bg-white">
                  <tr>
                    <th className="px-4 py-2">BookID</th>
                    <th className="px-4 py-2">Book Name</th>
                    <th className="px-4 py-2">Inventory Level</th>
                  </tr>
                </thead>
                <tbody>
                      <tr>
    <td className="border px-4 py-2">book10</td>
    <td className="border px-4 py-2">How to Kill A Mocking Bird</td>
    <td className="border px-4 py-2">30</td>
  </tr>
  <tr>
    <td className="border px-4 py-2">book3</td>
    <td className="border px-4 py-2">Dune</td>
    <td className="border px-4 py-2">50</td>
  </tr>
  <tr>
    <td className="border px-4 py-2">book7</td>
    <td className="border px-4 py-2">The Power of Habit</td>
    <td className="border px-4 py-2">20</td>
  </tr>
  <tr>
    <td className="border px-4 py-2">book4</td>
    <td className="border px-4 py-2">Harry Potter and the Philosopher's Stone</td>
    <td className="border px-4 py-2">15</td>
  </tr>
  <tr>
    <td className="border px-4 py-2">book12</td>
    <td className="border px-4 py-2">The Alchemist</td>
    <td className="border px-4 py-2">45</td>
  </tr>
  <tr>
    <td className="border px-4 py-2">book5</td>
    <td className="border px-4 py-2">1984</td>
    <td className="border px-4 py-2">25</td>
  </tr>
  <tr>
    <td className="border px-4 py-2">book7</td>
    <td className="border px-4 py-2">Brave New World</td>
    <td className="border px-4 py-2">35</td>
  </tr>
  <tr>
    <td className="border px-4 py-2">book8</td>
    <td className="border px-4 py-2">The Catcher in the Rye</td>
    <td className="border px-4 py-2">40</td>
  </tr>
  <tr>
    <td className="border px-4 py-2">book9</td>
    <td className="border px-4 py-2">The Great Gatsby</td>
    <td className="border px-4 py-2">18</td>
  </tr>
  <tr>
    <td className="border px-4 py-2">book10</td>
    <td className="border px-4 py-2">The Hobbit</td>
    <td className="border px-4 py-2">60</td>
  </tr>
  <tr>
    <td className="border px-4 py-2">book11</td>
    <td className="border px-4 py-2">Fahrenheit 451</td>
    <td className="border px-4 py-2">22</td>
  </tr>
  <tr>
    <td className="border px-4 py-2">book12</td>
    <td className="border px-4 py-2">Lord of the Flies</td>
    <td className="border px-4 py-2">30</td>
  </tr>
  <tr>
    <td className="border px-4 py-2">book13</td>
    <td className="border px-4 py-2">To Kill a Mockingbird</td>
    <td className="border px-4 py-2">55</td>
  </tr>
  <tr>
    <td className="border px-4 py-2">book14</td>
    <td className="border px-4 py-2">Moby Dick</td>
    <td className="border px-4 py-2">28</td>
  </tr>
  <tr>
    <td className="border px-4 py-2">book15</td>
    <td className="border px-4 py-2">The Odyssey</td>
    <td className="border px-4 py-2">45</td>
  </tr>
  <tr>
    <td className="border px-4 py-2">book16</td>
    <td className="border px-4 py-2">The Iliad</td>
    <td className="border px-4 py-2">50</td>
  </tr>
  <tr>
    <td className="border px-4 py-2">book17</td>
    <td className="border px-4 py-2">The Road</td>
    <td className="border px-4 py-2">10</td>
  </tr>
  <tr>
    <td className="border px-4 py-2">book18</td>
    <td className="border px-4 py-2">Pride and Prejudice</td>
    <td className="border px-4 py-2">38</td>
  </tr>
  <tr>
    <td className="border px-4 py-2">book19</td>
    <td className="border px-4 py-2">Emma</td>
    <td className="border px-4 py-2">26</td>
  </tr>
  <tr>
    <td className="border px-4 py-2">book20</td>
    <td className="border px-4 py-2">Sense and Sensibility</td>
    <td className="border px-4 py-2">33</td>
  </tr>

                </tbody>
              </table>
            </div>
          </div>



        </div>
                {/* Table 1 */}
                <div className="bg-white shadow-md p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-4">Repeat Customers</h2>
            <div className="max-h-48 overflow-y-auto">
              <table className="min-w-full table-auto">
                <thead className="sticky top-0 bg-white">
                  <tr>
                    <th className="px-4 py-2">UserID</th>
                    <th className="px-4 py-2">Username</th>
                    <th className="px-4 py-2">Email</th>
                    <th className="px-4 py-2">Reapeating Purchases</th>
                  </tr>
                </thead>
                <tbody>
                <tr>
    <td className="border px-4 py-2">user10</td>
    <td className="border px-4 py-2">johndoe</td>
    <td className="border px-4 py-2">johndoe@example.com</td>
    <td className="border px-4 py-2">3</td>
  </tr>
  <tr>
    <td className="border px-4 py-2">user3</td>
    <td className="border px-4 py-2">janedoe</td>
    <td className="border px-4 py-2">janedoe@example.com</td>
    <td className="border px-4 py-2">1</td>
  </tr>
  <tr>
    <td className="border px-4 py-2">user7</td>
    <td className="border px-4 py-2">mike99</td>
    <td className="border px-4 py-2">mike99@example.com</td>
    <td className="border px-4 py-2">4</td>
  </tr>
  <tr>
    <td className="border px-4 py-2">user18</td>
    <td className="border px-4 py-2">sarahj</td>
    <td className="border px-4 py-2">sarahj@example.com</td>
    <td className="border px-4 py-2">2</td>
  </tr>
  <tr>
    <td className="border px-4 py-2">user5</td>
    <td className="border px-4 py-2">bigboss</td>
    <td className="border px-4 py-2">bigboss@example.com</td>
    <td className="border px-4 py-2">5</td>
  </tr>
  <tr>
    <td className="border px-4 py-2">user13</td>
    <td className="border px-4 py-2">steve88</td>
    <td className="border px-4 py-2">steve88@example.com</td>
    <td className="border px-4 py-2">3</td>
  </tr>
  <tr>
    <td className="border px-4 py-2">user9</td>
    <td className="border px-4 py-2">anna_lee</td>
    <td className="border px-4 py-2">anna_lee@example.com</td>
    <td className="border px-4 py-2">4</td>
  </tr>
  <tr>
    <td className="border px-4 py-2">user12</td>
    <td className="border px-4 py-2">bradford</td>
    <td className="border px-4 py-2">bradford@example.com</td>
    <td className="border px-4 py-2">0</td>
  </tr>
  <tr>
    <td className="border px-4 py-2">user15</td>
    <td className="border px-4 py-2">emily_g</td>
    <td className="border px-4 py-2">emily_g@example.com</td>
    <td className="border px-4 py-2">2</td>
  </tr>
  <tr>
    <td className="border px-4 py-2">user2</td>
    <td className="border px-4 py-2">luke_sky</td>
    <td className="border px-4 py-2">luke_sky@example.com</td>
    <td className="border px-4 py-2">5</td>
  </tr>
  <tr>
    <td className="border px-4 py-2">user20</td>
    <td className="border px-4 py-2">chloe_z</td>
    <td className="border px-4 py-2">chloe_z@example.com</td>
    <td className="border px-4 py-2">1</td>
  </tr>
  <tr>
    <td className="border px-4 py-2">user6</td>
    <td className="border px-4 py-2">matthews</td>
    <td className="border px-4 py-2">matthews@example.com</td>
    <td className="border px-4 py-2">2</td>
  </tr>
  <tr>
    <td className="border px-4 py-2">user11</td>
    <td className="border px-4 py-2">lola_b</td>
    <td className="border px-4 py-2">lola_b@example.com</td>
    <td className="border px-4 py-2">4</td>
  </tr>
  <tr>
    <td className="border px-4 py-2">user17</td>
    <td className="border px-4 py-2">richie_rich</td>
    <td className="border px-4 py-2">richie_rich@example.com</td>
    <td className="border px-4 py-2">6</td>
  </tr>
  <tr>
    <td className="border px-4 py-2">user14</td>
    <td className="border px-4 py-2">kevin_k</td>
    <td className="border px-4 py-2">kevin_k@example.com</td>
    <td className="border px-4 py-2">0</td>
  </tr>
  <tr>
    <td className="border px-4 py-2">user4</td>
    <td className="border px-4 py-2">zoe_99</td>
    <td className="border px-4 py-2">zoe_99@example.com</td>
    <td className="border px-4 py-2">3</td>
  </tr>
  <tr>
    <td className="border px-4 py-2">user19</td>
    <td className="border px-4 py-2">chris_b</td>
    <td className="border px-4 py-2">chris_b@example.com</td>
    <td className="border px-4 py-2">1</td>
  </tr>
  <tr>
    <td className="border px-4 py-2">user8</td>
    <td className="border px-4 py-2">david_w</td>
    <td className="border px-4 py-2">david_w@example.com</td>
    <td className="border px-4 py-2">2</td>
  </tr>
  <tr>
    <td className="border px-4 py-2">user16</td>
    <td className="border px-4 py-2">nina_k</td>
    <td className="border px-4 py-2">nina_k@example.com</td>
    <td className="border px-4 py-2">5</td>
  </tr>
                </tbody>
              </table>
            </div>
          </div>




      </div>
    </div>
   
    
  )
}

export default Analytics


