import { Link } from "react-router-dom";

function Citas() {
  // Mock data for demonstration
  const appointments = [
    { id: "101", patientName: "John Doe", time: "9:00 AM" },
    { id: "205", patientName: "Jane Smith", time: "10:30 AM" },
    { id: "317", patientName: "Peter Jones", time: "11:00 AM" },
  ];

  return (
    <div>
      <h2>Appointments List</h2>
      <ul>
        {appointments.map((cita) => (
          <li key={cita.id}>
            Appointment with {cita.patientName} at {cita.time} -{" "}
            <Link to={`/cita/${cita.id}`}>View Details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Citas;
