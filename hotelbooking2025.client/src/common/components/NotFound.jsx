import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                textAlign: "center",
                backgroundColor: "#f8f9fa",
            }}
        >
            <h1 style={{ fontSize: "4rem", color: "#dc3545" }}>404</h1>
            <p style={{ fontSize: "1.5rem", color: "#6c757d" }}>
                Oops! The page you're looking for doesn't exist.
            </p>
            <Link to="/" style={{ fontSize: "1.2rem", color: "#0d6efd" }}>
                Go Back to Home
            </Link>
        </div>
    );
};

export default NotFound;