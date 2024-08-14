import { TextInput, PasswordInput, Button } from "@mantine/core";
import { IconUser, IconArrowRight } from "@tabler/icons-react"; // Use an available icon
import { useState } from "react";
import axios from "axios";

const SignupPage = () => {
    const [username, setUsername] = useState(''); // Add state for username
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignup = async (e) => {
        e.preventDefault();
        setError(''); // Clear previous errors

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        try {
            const response = await axios.post('http://localhost:8000/api/signup/', {
                username, // Include username in request
                email,
                password
            });
            console.log('Signup successful:', response.data);
            // Handle successful signup (e.g., redirect to login page or show a success message)
        } catch (error) {
            console.error('Signup failed:', error.response ? error.response.data : error.message);
            setError(error.response ? error.response.data.message : 'An error occurred');
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.box}>
                <h2 style={styles.title}>Sign Up</h2>
                <form onSubmit={handleSignup} style={styles.form}>
                    <TextInput
                        style={styles.input}
                        label="Username"
                        variant="unstyled"
                        placeholder="Your username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <TextInput
                        style={styles.input}
                        label="Email"
                        variant="unstyled"
                        placeholder="Your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <PasswordInput
                        style={styles.input}
                        label="Password"
                        variant="unstyled"
                        placeholder="Your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <PasswordInput
                        style={styles.input}
                        label="Confirm Password"
                        variant="unstyled"
                        placeholder="Confirm your password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    {error && <div style={styles.error}>{error}</div>}
                    <Button
                        type="submit"
                        style={styles.button}
                        fullWidth
                    >
                        <IconArrowRight style={styles.icon} /> Sign Up
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

export default SignupPage;
