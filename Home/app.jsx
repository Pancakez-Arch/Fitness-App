function App() {
    const [showForm, setShowForm] = React.useState(false);

    const handleButtonClick = () => {
        setShowForm(true);
    };

    return (
        <>
            {!showForm ? (
                <a href="#" className="cta-button" onClick={handleButtonClick}>
                    Join us today!
                </a>
            ) : (
                <div className="form">
                    <h2>Sign Up</h2>
                    <input type="text" placeholder="Enter your name" />
                    <input type="email" placeholder="Enter your email" />
                    <button type="submit">Submit</button>
                </div>
            )}
        </>
    );
}

// This renders the App component into the root element in your HTML
