import { useParams, Link } from "react-router-dom";

function CitaDetalle() {
  const { id } = useParams();

  return (
    <div>
      <h2>Appointment Details</h2>
      <p>
        Details for Appointment ID: <strong>{id}</strong>
      </p>
      <Link to="/citas">Back to Appointments</Link>
    </div>
  );
}

export default CitaDetalle;
