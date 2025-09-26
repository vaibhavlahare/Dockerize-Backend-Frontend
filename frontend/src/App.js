import React from "react";

function App() {
    const [message, setMessage] = React.use.State ("");

    React.use.Effect (() => {
        fetch("/api/hello")
        .then(res => res.text())
        .catch(err => setMessage("Error: " + err));
    }, [];

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>React Frontend</h1>
            <p>Backend says: {message}</p>
        </div>
    );
}

export default App;