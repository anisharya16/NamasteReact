import React from "React";
import ReactDOM from "React-dom/client";

const Header = () => {
    return (
        <div className="header">
            <img src="https://dz8fbjd9gwp2s.cloudfront.net/logos/6389e494e4b0a2e361db7362.png?v=6" alt="logo" width={"50px"} />
            <input type="text" placeholder="Enter Text" />
            <img src="https://dz8fbjd9gwp2s.cloudfront.net/logos/6389e494e4b0a2e361db7362.png?v=6" alt="logo" width={"50px"} />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Header />);