import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, ScatterChart, Scatter } from 'recharts';

const ElectronicsAnalysisDashboard = () => {
  // Data based on analysis of the electronics e-commerce dataset
  
  // Theme 1: Battery Performance Issues
  const batteryIssuesData = [
    { category: 'Wireless Earbuds', satisfaction: 2.0, issueRate: 67, recommendRate: 33 },
    { category: 'Smartphones', satisfaction: 3.0, issueRate: 33, recommendRate: 67 },
    { category: 'Bluetooth Speaker', satisfaction: 2.0, issueRate: 50, recommendRate: 25 },
    { category: 'Tablets', satisfaction: 3.0, issueRate: 25, recommendRate: 50 },
    { category: 'Smartwatches', satisfaction: 4.0, issueRate: 20, recommendRate: 80 },
    { category: 'Cameras', satisfaction: 4.0, issueRate: 17, recommendRate: 83 },
    { category: 'Laptops', satisfaction: 2.0, issueRate: 14, recommendRate: 29 },
    { category: 'Drones', satisfaction: 3.0, issueRate: 33, recommendRate: 67 }
  ];

  // Theme 2: Software/Interface Issues
  const softwareIssuesData = [
    { category: 'Smart TVs', satisfaction: 2.7, issueRate: 60, recommendRate: 40 },
    { category: 'Smart Home Hubs', satisfaction: 2.5, issueRate: 67, recommendRate: 33 },
    { category: 'Laptops', satisfaction: 2.0, issueRate: 50, recommendRate: 29 },
    { category: 'Cameras', satisfaction: 3.0, issueRate: 25, recommendRate: 75 },
    { category: 'External Hard Drives', satisfaction: 4.0, issueRate: 17, recommendRate: 83 },
    { category: 'Gaming Consoles', satisfaction: 2.0, issueRate: 25, recommendRate: 50 }
  ];

  // Theme 3: Durability Issues
  const durabilityIssuesData = [
    { category: 'Tablets', satisfaction: 3.0, issueRate: 50, recommendRate: 25 },
    { category: 'Keyboards', satisfaction: 3.0, issueRate: 33, recommendRate: 33 },
    { category: 'Wireless Earbuds', satisfaction: 4.0, issueRate: 25, recommendRate: 75 },
    { category: 'Headphones', satisfaction: 4.0, issueRate: 20, recommendRate: 80 },
    { category: 'Smartwatches', satisfaction: 3.0, issueRate: 33, recommendRate: 67 }
  ];

  // Overall theme impact comparison
  const themeImpactData = [
    { theme: 'Battery Issues', affectedProducts: 18, avgSatisfaction: 2.9, recommendationDrop: 33 },
    { theme: 'Software/Interface', affectedProducts: 15, avgSatisfaction: 2.7, recommendationDrop: 27 },
    { theme: 'Durability', affectedProducts: 12, avgSatisfaction: 3.4, recommendationDrop: 65 }
  ];

  // Issue frequency by category
  const issueFrequencyData = [
    { name: 'Battery Issues', value: 18, color: '#ff6b6b' },
    { name: 'Software/Interface', value: 15, color: '#4ecdc4' },
    { name: 'Durability', value: 12, color: '#45b7d1' },
    { name: 'Other Issues', value: 25, color: '#96ceb4' },
    { name: 'No Issues', value: 30, color: '#feca57' }
  ];

  // Satisfaction vs Recommendation correlation
  const satisfactionRecommendData = [
    { satisfaction: 1, recommendation: 0 },
    { satisfaction: 2, recommendation: 25 },
    { satisfaction: 3, recommendation: 60 },
    { satisfaction: 4, recommendation: 85 },
    { satisfaction: 5, recommendation: 95 }
  ];

  const COLORS = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57'];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-300 rounded shadow-lg">
          <p className="font-semibold">{label}</p>
          {payload.map((entry, index) => (
            <p key={index} style={{ color: entry.color }}>
              {`${entry.dataKey}: ${entry.value}${entry.dataKey.includes('Rate') || entry.dataKey.includes('satisfaction') ? '%' : ''}`}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-6 bg-gray-50">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Electronics E-commerce Analysis Dashboard</h1>
        <p className="text-gray-600">Visual analysis of top 3 common themes affecting customer satisfaction</p>
      </div>

      {/* Theme Impact Overview */}
      <div className="mb-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Theme Impact Overview</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={themeImpactData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="theme" />
            <YAxis />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Bar dataKey="affectedProducts" fill="#8884d8" name="Affected Products" />
            <Bar dataKey="recommendationDrop" fill="#82ca9d" name="Recommendation Rate Drop (%)" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Issue Distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Issue Distribution Across Dataset</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={issueFrequencyData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {issueFrequencyData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Satisfaction vs Recommendation Correlation</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={satisfactionRecommendData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="satisfaction" label={{ value: 'Satisfaction Score', position: 'insideBottom', offset: -5 }} />
              <YAxis label={{ value: 'Recommendation Rate (%)', angle: -90, position: 'insideLeft' }} />
              <Tooltip content={<CustomTooltip />} />
              <Line type="monotone" dataKey="recommendation" stroke="#8884d8" strokeWidth={3} dot={{ r: 6 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Theme 1: Battery Performance Issues */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-red-600">Theme 1: Battery Performance Issues</h2>
        <p className="text-gray-600 mb-4">Impact across product categories showing satisfaction scores and recommendation rates</p>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={batteryIssuesData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" angle={-45} textAnchor="end" height={100} />
            <YAxis />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Bar dataKey="satisfaction" fill="#ff6b6b" name="Satisfaction Score" />
            <Bar dataKey="recommendRate" fill="#ffa8a8" name="Recommendation Rate (%)" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Theme 2: Software/Interface Issues */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-teal-600">Theme 2: Software/Interface Issues</h2>
        <p className="text-gray-600 mb-4">Setup difficulties and interface problems affecting user experience</p>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={softwareIssuesData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" angle={-45} textAnchor="end" height={100} />
            <YAxis />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Bar dataKey="satisfaction" fill="#4ecdc4" name="Satisfaction Score" />
            <Bar dataKey="recommendRate" fill="#a8e6cf" name="Recommendation Rate (%)" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Theme 3: Durability Issues */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-600">Theme 3: Durability and Build Quality</h2>
        <p className="text-gray-600 mb-4">Physical wear and durability concerns impacting long-term satisfaction</p>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={durabilityIssuesData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" angle={-45} textAnchor="end" height={100} />
            <YAxis />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Bar dataKey="satisfaction" fill="#45b7d1" name="Satisfaction Score" />
            <Bar dataKey="recommendRate" fill="#a8d8ea" name="Recommendation Rate (%)" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Key Insights Summary */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Key Insights Summary</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-4 bg-red-50 rounded-lg">
            <h3 className="text-lg font-semibold text-red-600 mb-2">Battery Management</h3>
            <p className="text-2xl font-bold text-red-700">2.9</p>
            <p className="text-sm text-gray-600">Avg Satisfaction Score</p>
            <p className="text-sm text-gray-600 mt-2">18% of negative reviews mention battery issues</p>
          </div>
          <div className="text-center p-4 bg-teal-50 rounded-lg">
            <h3 className="text-lg font-semibold text-teal-600 mb-2">Interface Experience</h3>
            <p className="text-2xl font-bold text-teal-700">27%</p>
            <p className="text-sm text-gray-600">Lower Recommendation Rate</p>
            <p className="text-sm text-gray-600 mt-2">Setup difficulties create lasting negative impressions</p>
          </div>
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-600 mb-2">Build Quality</h3>
            <p className="text-2xl font-bold text-blue-700">65%</p>
            <p className="text-sm text-gray-600">Lower Recommendation Rate</p>
            <p className="text-sm text-gray-600 mt-2">Durability issues severely impact customer loyalty</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElectronicsAnalysisDashboard;