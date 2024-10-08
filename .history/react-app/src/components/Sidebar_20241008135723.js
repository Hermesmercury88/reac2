import React from 'react';  // 6.9k (gzipped: 2.7k)
import { Link } from 'react-router-dom';  // 8k (gzipped: 3.2k)

export default function Sidebar() {
    return (
        <div className="w-64 h-screen bg-gray-800 text-white">
            <div className="p-4">
                <h2 className="text-xl font-bold">Admin Dashboard</h2>
            </div>
            <nav className="mt-10">
                <Link to="/" className="block py-3 px-4 hover:bg-gray-700">
                    User
                </Link>
                <Link to="/" className="block py-3 px-4 hover:bg-gray-700">
                    Ma
                </Link>
                <Link to="/about" className="block py-3 px-4 hover:bg-gray-700">
                    About
                </Link>
                <Link to="/account" className="block py-3 px-4 hover:bg-gray-700">
                   Account Management
                </Link>
                <Link to="/logout.js" className="block py-3 px-4 hover:bg-gray-700">
                   Fuck off
                </Link>
            </nav>
        </div>
    );
}