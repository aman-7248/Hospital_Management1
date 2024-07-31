import React, { useContext, useEffect, useState } from "react";
import { Context } from "../main";
import axios from "axios";

const Dashboard = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:4000/api/v1/appointment/getall",
          { withCredentials: true }
        );
        setAppointments(data.appointments);
      } catch (error) {
        setAppointments([]);
      }
    };
    fetchAppointments();
  }, []);

  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }
};

export default Dashboard;
