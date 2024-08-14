import { TextInput, PasswordInput, Button } from "@mantine/core";
import { IconLogin } from "@tabler/icons-react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const getCookie = (name) => {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
};

const csrfToken = getCookie('csrftoken');

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const response = await axios.post('http://localhost:8000/api/login/', {
                username,
                password
            }, {
                headers: {
                    'X-CSRFToken': csrfToken 
                }
            });
            console.log('Login successful:', response.data);
            navigate('/homeafterlogin')
        } catch (error) {
            console.error('Login failed:', error.response ? error.response.data : error.message);
            setError(error.response ? error.response.data.message : 'An error occurred');
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.box}>
                <h2 style={styles.title}>Login</h2>
                <form onSubmit={handleLogin} style={styles.form}>
                    <TextInput
                        style={styles.input}
                        label="Username"
                        variant="unstyled"
                        placeholder="Your username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <PasswordInput
                        style={styles.input}
                        label="Password"
                        variant="unstyled"
                        placeholder="Your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {error && <div style={styles.error}>{error}</div>}
                    <Button
                        type="submit"
                        style={styles.button}
                        fullWidth
                    >
                        <IconLogin style={styles.icon} /> Login
                    </Button>
                </form>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        padding: '0 2rem',
        backgroundColor: '#1a1a1a' // Dark background color
    },
    box: {
        width: '100%',
        maxWidth: '400px',
        padding: '2rem',
        backgroundColor: '#2e2e2e', // Background color for the card
        borderRadius: '0.5rem',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
    },
    title: {
        fontSize: '2.25rem', // 36px
        fontWeight: '700',
        color: '#f4c542', // Button background color
        marginBottom: '1.5rem'
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
    },
    input: {
        backgroundColor: '#1a1a1a', // Dark background color
        color: '#f5f5f5', // Primary text color
        borderRadius: '0.375rem', // 6px
        padding: '0.5rem 1rem'
    },
    button: {
        backgroundColor: '#f4c542', // Button background color
        color: '#f5f5f5', // Primary text color
        borderRadius: '0.375rem', // 6px
        padding: '0.75rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'background-color 0.3s ease'
    },
    buttonHover: {
        backgroundColor: '#e1b92c' // Button hover background color
    },
    icon: {
        marginRight: '0.5rem'
    },
    error: {
        color: 'red',
        fontSize: '0.875rem' // 14px
    }
};

export default LoginPage;