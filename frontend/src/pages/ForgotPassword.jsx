

// // src/pages/ForgotPassword.jsx
// import React, { useState } from "react";
// import { useAuth } from "../context/AuthContext";
// import { useNavigate } from "react-router-dom";

// export default function ForgotPassword() {
//   const { forgotPassword } = useAuth();
//   const [login, setLogin] = useState("");
//   const [info, setInfo] = useState("");
//   const [err, setErr] = useState("");
//   const navigate = useNavigate();

//   const submit = async (e) => {
//     e.preventDefault();
//     setErr(""); 
//     setInfo("");
//     try {
//       await forgotPassword({ login });
//       setInfo("OTP sent to your registered email.");
//       setTimeout(() => navigate(`/reset-password?login=${encodeURIComponent(login)}`), 600);
//     } catch (e) {
//       setErr(e?.response?.data?.message || "Failed to send OTP");
//     }
//   };

//   return (
//     <div className="auth-container" style={{ backgroundImage: "url('/forgotbg.jpg')", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
//       <form className="card auth-form" onSubmit={submit}>
//         <h2>Forgot Password</h2>
//         <label>
//           Emp ID or Email
//           <input 
//             value={login}
//             onChange={(e) => setLogin(e.target.value)}
//             required
//             placeholder="e.g. EMP123 or email"
//           />
//         </label>
//         <button className="btn btn-primary" type="submit">Send OTP</button>
//         {info && <div className="success">{info}</div>}
//         {err && <div className="error">{err}</div>}
//       </form>
//     </div>
//   );
// }





// src/pages/ForgotPassword.jsx
import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {
  const { forgotPassword } = useAuth();
  const [login, setLogin] = useState("");
  const [info, setInfo] = useState("");
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    setErr("");
    setInfo("");
    try {
      await forgotPassword({ login });
      setInfo("OTP sent to your registered email.");
      setTimeout(
        () => navigate(`/reset-password?login=${encodeURIComponent(login)}`),
        600
      );
    } catch (e) {
      setErr(e?.response?.data?.message || "Failed to send OTP");
    }
  };

  return (
    <div
      className="auth-container"
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #4f46e5, #9333ea, #ec4899)", // 💜 Blue + Purple + Pink blend
        backgroundSize: "400% 400%",
        animation: "gradientShift 8s ease infinite",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      {/* Add keyframe animation for smooth color movement */}
      <style>
        {`
          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>

      <form
        className="card auth-form"
        onSubmit={submit}
        style={{
          background: "rgba(255, 255, 255, 0.9)",
          padding: "35px 40px",
          borderRadius: "12px",
          boxShadow: "0 8px 30px rgba(0, 0, 0, 0.2)",
          width: "360px",
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "#1e3a8a", marginBottom: "20px" }}>
          Forgot Password
        </h2>
        <label
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "left",
            marginBottom: "15px",
            color: "#334155",
            fontWeight: "500",
          }}
        >
          Emp ID or Email
          <input
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            required
            placeholder="e.g. EMP123 or email"
            style={{
              marginTop: "6px",
              padding: "10px",
              borderRadius: "6px",
              border: "1px solid #cbd5e1",
              outline: "none",
              fontSize: "14px",
            }}
          />
        </label>
        <button
          className="btn btn-primary"
          type="submit"
          style={{
            backgroundColor: "#2563eb",
            color: "#fff",
            padding: "10px 0",
            width: "100%",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: "600",
            fontSize: "15px",
            transition: "0.3s",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#1d4ed8")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#2563eb")}
        >
          Send OTP
        </button>

        {info && (
          <div
            className="success"
            style={{
              color: "#16a34a",
              background: "#dcfce7",
              padding: "8px",
              borderRadius: "6px",
              marginTop: "15px",
              fontSize: "14px",
            }}
          >
            {info}
          </div>
        )}
        {err && (
          <div
            className="error"
            style={{
              color: "#b91c1c",
              background: "#fee2e2",
              padding: "8px",
              borderRadius: "6px",
              marginTop: "15px",
              fontSize: "14px",
            }}
          >
            {err}
          </div>
        )}
      </form>
    </div>
  );
}
