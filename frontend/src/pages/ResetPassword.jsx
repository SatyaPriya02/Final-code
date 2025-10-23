



// import React, { useState, useMemo } from "react";
// import { useAuth } from "../context/AuthContext";
// import { useNavigate, useLocation } from "react-router-dom";

// export default function ResetPassword() {
//   const { resetPassword } = useAuth();
//   const qs = new URLSearchParams(useLocation().search);
//   const initialLogin = useMemo(() => qs.get("login") || "", [qs]);
//   const [login, setLogin] = useState(initialLogin);
//   const [otp, setOtp] = useState("");
//   const [p1, setP1] = useState("");
//   const [p2, setP2] = useState("");
//   const [err, setErr] = useState("");
//   const [ok, setOk] = useState("");
//   const navigate = useNavigate();

//   const submit = async (e) => {
//     e.preventDefault();
//     setErr("");
//     setOk("");
//     if (p1 !== p2) {
//       setErr("Passwords do not match");
//       return;
//     }
//     try {
//       await resetPassword({ login, otp, newPassword: p1 });
//       setOk("Password updated. Please login.");
//       setTimeout(() => navigate("/login"), 600);
//     } catch (e) {
//       setErr(e?.response?.data?.message || "Reset failed");
//     }
//   };

//   return (
//     <div className="auth-container">
//       <form className="card" onSubmit={submit}>
//         <h2>Reset Password</h2>
//         <label>
//           Emp ID or Email
//           <input value={login} onChange={(e) => setLogin(e.target.value)} required />
//         </label>
//         <label>
//           OTP (from email)
//           <input value={otp} onChange={(e) => setOtp(e.target.value)} required />
//         </label>
//         <label>
//           New Password
//           <input type="password" value={p1} onChange={(e) => setP1(e.target.value)} required />
//         </label>
//         <label>
//           Confirm Password
//           <input type="password" value={p2} onChange={(e) => setP2(e.target.value)} required />
//         </label>
//         <button className="btn" type="submit">
//           Update Password
//         </button>
//         {ok && <div className="success">{ok}</div>}
//         {err && <div className="error">{err}</div>}
//       </form>
//     </div>
//   );
// }




import React, { useState, useMemo } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, useLocation } from "react-router-dom";

export default function ResetPassword() {
  const { resetPassword } = useAuth();
  const qs = new URLSearchParams(useLocation().search);
  const initialLogin = useMemo(() => qs.get("login") || "", [qs]);
  const [login, setLogin] = useState(initialLogin);
  const [otp, setOtp] = useState("");
  const [p1, setP1] = useState("");
  const [p2, setP2] = useState("");
  const [err, setErr] = useState("");
  const [ok, setOk] = useState("");
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    setErr("");
    setOk("");
    if (p1 !== p2) {
      setErr("Passwords do not match");
      return;
    }
    try {
      await resetPassword({ login, otp, newPassword: p1 });
      setOk("Password updated. Please login.");
      setTimeout(() => navigate("/login"), 600);
    } catch (e) {
      setErr(e?.response?.data?.message || "Reset failed");
    }
  };

  // Inline styles
  const pageStyle = {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #dbeafe, #f0f9ff)",
    fontFamily: "Poppins, sans-serif",
  };

  const cardStyle = {
    background: "#fff",
    padding: "30px 40px",
    borderRadius: "12px",
    boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
    width: "360px",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  };

  const headingStyle = {
    textAlign: "center",
    color: "#1e3a8a",
    marginBottom: "10px",
  };

  const labelStyle = {
    display: "flex",
    flexDirection: "column",
    fontWeight: "500",
    color: "#1e293b",
    fontSize: "14px",
  };

  const inputStyle = {
    marginTop: "6px",
    padding: "10px",
    border: "1px solid #cbd5e1",
    borderRadius: "6px",
    fontSize: "14px",
    outline: "none",
    transition: "border-color 0.2s",
  };

  const btnStyle = {
    backgroundColor: "#2563eb",
    color: "#fff",
    padding: "10px 0",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "600",
    marginTop: "10px",
    fontSize: "15px",
    transition: "background-color 0.3s",
  };

  const successStyle = {
    color: "#16a34a",
    background: "#dcfce7",
    borderRadius: "6px",
    padding: "8px 10px",
    textAlign: "center",
    fontSize: "14px",
    fontWeight: "500",
  };

  const errorStyle = {
    color: "#b91c1c",
    background: "#fee2e2",
    borderRadius: "6px",
    padding: "8px 10px",
    textAlign: "center",
    fontSize: "14px",
    fontWeight: "500",
  };

  return (
    <div style={pageStyle}>
      <form style={cardStyle} onSubmit={submit}>
        <h2 style={headingStyle}>Reset Password</h2>

        <label style={labelStyle}>
          Emp ID or Email
          <input
            style={inputStyle}
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            required
          />
        </label>

        <label style={labelStyle}>
          OTP (from email)
          <input
            style={inputStyle}
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
          />
        </label>

        <label style={labelStyle}>
          New Password
          <input
            style={inputStyle}
            type="password"
            value={p1}
            onChange={(e) => setP1(e.target.value)}
            required
          />
        </label>

        <label style={labelStyle}>
          Confirm Password
          <input
            style={inputStyle}
            type="password"
            value={p2}
            onChange={(e) => setP2(e.target.value)}
            required
          />
        </label>

        <button
          style={btnStyle}
          type="submit"
          onMouseOver={(e) => (e.target.style.backgroundColor = "#1d4ed8")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#2563eb")}
        >
          Update Password
        </button>

        {ok && <div style={successStyle}>{ok}</div>}
        {err && <div style={errorStyle}>{err}</div>}
      </form>
    </div>
  );
}
