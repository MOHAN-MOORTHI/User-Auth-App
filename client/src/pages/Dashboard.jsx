import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import authService from '../services/authService';
import { LogOut, Users, Loader2, ShieldCheck, Calendar, AtSign } from 'lucide-react';

const Dashboard = () => {
    const { user, logout } = useContext(AuthContext);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const data = await authService.getAllUsers();
                setUsers(data);
            } catch (err) {
                setError('Failed to fetch users list');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    const getInitials = (name) => {
        return name ? name.charAt(0).toUpperCase() : '?';
    };

    const formatDate = (dateString) => {
        if (!dateString) return 'Just now';
        const date = new Date(dateString);
        if (isNaN(date)) return 'Just now';
        return new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        }).format(date);
    };

    return (
        <div className="dashboard-layout">
            <nav className="navbar">
                <div className="nav-brand">
                    <ShieldCheck size={28} />
                    User Auth App
                </div>
                <div className="user-menu">
                    <div className="user-avatar" title={user.name}>
                        {getInitials(user.name)}
                    </div>
                    <button onClick={logout} className="btn-icon" title="Logout">
                        <LogOut size={20} />
                    </button>
                </div>
            </nav>

            <main className="dashboard-content">
                <div className="page-header">
                    <h1 className="page-title">Welcome back, {user.name.split(' ')[0]} 👋</h1>
                </div>

                <div className="stats-grid">
                    <div className="stat-card">
                        <div className="stat-icon blue">
                            <Users size={24} />
                        </div>
                        <div className="stat-details">
                            <h3>Total Users Registered</h3>
                            <p>{loading ? '-' : users.length}</p>
                        </div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-icon green">
                            <AtSign size={24} />
                        </div>
                        <div className="stat-details">
                            <h3>Your Email Address</h3>
                            <p style={{ fontSize: '1.1rem', marginTop: '0.2rem' }}>{user.email}</p>
                        </div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-icon purple">
                            <Calendar size={24} />
                        </div>
                        <div className="stat-details">
                            <h3>Account Created</h3>
                            <p style={{ fontSize: '1.1rem', marginTop: '0.2rem' }}>{formatDate(user.created_at)}</p>
                        </div>
                    </div>
                </div>

                <div className="table-card">
                    <div className="table-header">
                        <h2>User Directory</h2>
                    </div>

                    {loading ? (
                        <div className="flex-center" style={{ minHeight: '200px' }}>
                            <Loader2 className="animate-spin text-primary" size={32} />
                        </div>
                    ) : error ? (
                        <div style={{ padding: '2rem', textAlign: 'center', color: 'red' }}>{error}</div>
                    ) : (
                        <div style={{ overflowX: 'auto' }}>
                            <table className="users-table">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Joined</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map((u) => (
                                        <tr key={u.id}>
                                            <td>#{u.id}</td>
                                            <td style={{ fontWeight: 500 }}>{u.name} {u.id === user.id ? '(You)' : ''}</td>
                                            <td>{u.email}</td>
                                            <td>{formatDate(u.created_at)}</td>
                                            <td>
                                                <span className="badge active">Active</span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
