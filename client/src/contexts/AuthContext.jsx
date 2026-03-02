import React, { createContext, useState, useEffect } from 'react';
import { setToken, getToken, removeToken } from '../utils/tokenHelper';
import authService from '../services/authService';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const initializeAuth = async () => {
            const token = getToken();
            if (token) {
                try {
                    const userData = await authService.getProfile();
                    setUser(userData);
                } catch (error) {
                    console.error('Invalid token or network error', error);
                    removeToken();
                }
            }
            setLoading(false);
        };

        initializeAuth();
    }, []);

    const login = (userData, token) => {
        setToken(token);
        setUser(userData);
    };

    const logout = () => {
        removeToken();
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};
