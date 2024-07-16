import React, { useState, useEffect } from "react";
import axios from "axios";
<<<<<<< HEAD
import Chart from "chart.js/auto";
=======
import { PieChart, Pie, Cell } from "recharts";
>>>>>>> a20fe5b1cae794c9adbbc456feb2c1ff89ca1dbf

const Statistics = () => {
  const isAdmin = localStorage.getItem("isAdmin") === "true"; // Retrieve and parse admin status

  const [statistics, setStatistics] = useState([]);
  const [selectedStatistic, setSelectedStatistic] = useState(null);
  const [formData, setFormData] = useState({
    branchName: "",
    wins: 0,
<<<<<<< HEAD
    list: "",
  });
  const [showForm, setShowForm] = useState(false);
  const [chartInstance, setChartInstance] = useState(null);
=======
    list: ""
  });
  const [showForm, setShowForm] = useState(false);
>>>>>>> a20fe5b1cae794c9adbbc456feb2c1ff89ca1dbf

  useEffect(() => {
    fetchStatistics();
  }, []);

<<<<<<< HEAD
  useEffect(() => {
    if (statistics.length > 0) {
      if (chartInstance) {
        chartInstance.destroy();
      }
      renderBarChart();
    }
  }, [statistics]);

  const fetchStatistics = () => {
    axios
      .get("http://localhost:5000/api/auth/getAllStatistics")
=======
  const fetchStatistics = () => {
    axios
      .get("https://kreedacbit.onrender.com/api/auth/getAllStatistics")
>>>>>>> a20fe5b1cae794c9adbbc456feb2c1ff89ca1dbf
      .then((response) => setStatistics(response.data))
      .catch((error) => console.error(error));
  };

  const handleRowClick = (statistic) => {
    setSelectedStatistic(statistic);
    setFormData({
      branchName: statistic.branchName,
      wins: statistic.wins,
<<<<<<< HEAD
      list: statistic.list.join(", "),
=======
      list: statistic.list.join(", ")
>>>>>>> a20fe5b1cae794c9adbbc456feb2c1ff89ca1dbf
    });
    setShowForm(true);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const { branchName, wins, list } = formData;
    const data = {
      branchName,
      wins: parseInt(wins),
<<<<<<< HEAD
      list: list.split(",").map((item) => item.trim()),
=======
      list: list.split(",").map((item) => item.trim())
>>>>>>> a20fe5b1cae794c9adbbc456feb2c1ff89ca1dbf
    };

    if (selectedStatistic) {
      axios
        .put(
<<<<<<< HEAD
          `http://localhost:5000/api/auth/updateStatistic/${selectedStatistic._id}`,
=======
          `https://kreedacbit.onrender.com/api/auth/updateStatistic/${selectedStatistic._id}`,
>>>>>>> a20fe5b1cae794c9adbbc456feb2c1ff89ca1dbf
          data
        )
        .then(() => {
          fetchStatistics();
          setSelectedStatistic(null);
          // setShowForm(false);
        })
        .catch((error) => console.error(error));
    } else {
      axios
<<<<<<< HEAD
        .post("http://localhost:5000/api/auth/addStatistic", data)
=======
        .post("https://kreedacbit.onrender.com/api/auth/addStatistic", data)
>>>>>>> a20fe5b1cae794c9adbbc456feb2c1ff89ca1dbf
        .then(() => {
          fetchStatistics();
          setFormData({
            branchName: "",
            wins: 0,
<<<<<<< HEAD
            list: "",
=======
            list: ""
>>>>>>> a20fe5b1cae794c9adbbc456feb2c1ff89ca1dbf
          });
        })
        .catch((error) => console.error(error));
    }
  };

  const handleDelete = () => {
    if (selectedStatistic) {
      axios
        .delete(
<<<<<<< HEAD
          `http://localhost:5000/api/auth/deleteStatistic/${selectedStatistic._id}`
=======
          `https://kreedacbit.onrender.com/api/auth/deleteStatistic/${selectedStatistic._id}`
>>>>>>> a20fe5b1cae794c9adbbc456feb2c1ff89ca1dbf
        )
        .then(() => {
          fetchStatistics();
          setSelectedStatistic(null);
          setShowForm(false);
        })
        .catch((error) => console.error(error));
    }
  };

  const handleToggleForm = () => {
    setShowForm(!showForm);
    if (!showForm) {
      setFormData({
        branchName: "",
        wins: 0,
<<<<<<< HEAD
        list: "",
=======
        list: ""
>>>>>>> a20fe5b1cae794c9adbbc456feb2c1ff89ca1dbf
      });
      setSelectedStatistic(null);
    }
  };

  const handleclearform = () => {
    if (showForm) {
      setFormData({
        branchName: "",
        wins: 0,
<<<<<<< HEAD
        list: "",
=======
        list: ""
>>>>>>> a20fe5b1cae794c9adbbc456feb2c1ff89ca1dbf
      });
      setSelectedStatistic(null);
    }
  };

<<<<<<< HEAD
  const renderBarChart = () => {
    const ctx = document.getElementById("barChart");
    if (ctx) {
      const branchNames = statistics.map((statistic) => statistic.branchName);
      const wins = statistics.map((statistic) => statistic.wins);

      const newChartInstance = new Chart(ctx, {
        type: "bar",
        data: {
          labels: branchNames,
          datasets: [
            {
              label: "Wins",
              data: wins,
              backgroundColor: "rgba(54, 162, 235, 0.5)",
              borderColor: "rgba(54, 162, 235, 1)",
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
      setChartInstance(newChartInstance);
    }
  };
=======
  // Prepare data for the pie chart
  const pieChartData = statistics.map((statistic) => ({
    name: statistic.branchName, // Branch name
    value: statistic.wins // Wins
  }));

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
>>>>>>> a20fe5b1cae794c9adbbc456feb2c1ff89ca1dbf

  return (
    <div className="container mt-4">
      <h1>Statistics</h1>
      {isAdmin && (
        <button onClick={handleToggleForm} className="btn btn-secondary mb-3">
          {showForm ? "Hide" : "Enter"}
        </button>
      )}

      {isAdmin && showForm && (
        <div className="row">
          <div className="col-md-4">
            <label>Branch Name:</label>
            <input
              type="text"
              name="branchName"
              value={formData.branchName}
              onChange={handleInputChange}
              className="form-control mb-2"
            />
          </div>
          <div className="col-md-4">
            <label>Wins:</label>
            <input
              type="number"
              name="wins"
              value={formData.wins}
              onChange={handleInputChange}
              className="form-control mb-2"
            />
          </div>
          <div className="col-md-4">
            <label>List of Wins:</label>
            <input
              type="text"
              name="list"
              value={formData.list}
              onChange={handleInputChange}
              className="form-control mb-2"
            />
          </div>

          <div className="col-md-12 mt-3">
            <button onClick={handleSubmit} className="btn btn-primary mr-2">
              {selectedStatistic ? "Update" : "Add"}
            </button>
            <button onClick={handleDelete} className="btn btn-danger">
              Delete
            </button>
            <button
              onClick={handleclearform}
              className="btn btn-secondary ml-2"
            >
              Clear
            </button>
          </div>
        </div>
      )}

<<<<<<< HEAD
      <div className="row mt-3">
        <div className="col-md-6">
          <canvas id="barChart"></canvas>
        </div>
        <div className="col-md-6">
          <table className="table">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Branch Name</th>
                <th>Wins</th>
                <th>List of Wins</th>
              </tr>
            </thead>
            <tbody>
              {statistics.map((statistic, index) => (
                <tr
                  key={index}
                  onClick={() => handleRowClick(statistic)}
                  className={`${
                    selectedStatistic &&
                    selectedStatistic._id === statistic._id
                      ? "active"
                      : ""
                  }`}
                >
                  <td>{index + 1}</td>
                  <td>{statistic.branchName}</td>
                  <td>{statistic.wins}</td>
                  <td>{statistic.list.join(", ")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
=======
      <table className="table mt-3">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Branch Name</th>
            <th>Wins</th>
            <th>List of Wins</th>
          </tr>
        </thead>
        <tbody>
          {statistics.map((statistic, index) => (
            <tr
              key={index}
              onClick={() => handleRowClick(statistic)}
              className={`${
                selectedStatistic && selectedStatistic._id === statistic._id
                  ? "active"
                  : ""
              }`}
            >
              <td>{index + 1}</td>
              <td>{statistic.branchName}</td>
              <td>{statistic.wins}</td>
              <td>{statistic.list.join(", ")}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-5">
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            data={pieChartData}
            cx="50%"
            cy="50%"
            outerRadius={150}
            fill="#8884d8"
            label={({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
              const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
              const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
              const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));
              const isLeftHalf = midAngle > 90 && midAngle < 270;

              return (
                <text
                  x={isLeftHalf ? x - 10 : x + 10} // Adjust position based on left or right half
                  y={y}
                  fill="#000000" // Set the fill color to black
                  textAnchor={isLeftHalf ? "end" : "start"}
                  dominantBaseline="central"
                >
                  {`${(percent * 100).toFixed(2)}%`}
                </text>
              );
            }}
          >
            {pieChartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
>>>>>>> a20fe5b1cae794c9adbbc456feb2c1ff89ca1dbf
      </div>
    </div>
  );
};

export default Statistics;
