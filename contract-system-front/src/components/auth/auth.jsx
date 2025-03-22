import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router';

const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();

    const [user, setUser] = useState(() => {
        // Retrieve the user from localStorage when the app initializes
        const savedUser = localStorage.getItem('user');
        return savedUser ? JSON.parse(savedUser) : null;
    });

    const login = (userData) => {
        setUser(userData);
        // Save the user to localStorage
        localStorage.setItem('user', JSON.stringify(userData));
    };

    const logout = () => {
        setUser(null);
        // Remove the user from localStorage
        localStorage.removeItem('user');
        navigate('/');

        
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};