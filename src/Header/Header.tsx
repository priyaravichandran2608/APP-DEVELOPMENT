// src/Header/Header.tsx
import { Avatar, Button, Indicator } from "@mantine/core";
import { IconAnchor, IconBell, IconSettings } from "@tabler/icons-react";
import NavLinks from "./NavLinks";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { login, logout } from '../store/authSlice';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    dispatch(login());
    navigate('/login');
  };

  const handleSignup = () => {
    navigate('/signup');
  };

  const buttonStyles = {
    backgroundColor: '#fabe25',
    color: '#2d2d2d',
    border: 'none',
    borderRadius: '4px',
    padding: '10px 20px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    fontWeight: 'bold',
  };

  return (
    <div
      className="w-full px-6 text-white h-28 flex justify-between items-center font-['poppins']"
      style={{ backgroundColor: '#2d2d2d' }}
    >
      <div className="flex gap-3 items-center text-bright-sun-400">
        <IconAnchor className="h-8 w-8" stroke={2.5} />
        <div className="text-2xl font-semibold">JobHook</div>
      </div>
      <NavLinks />
      <div className="flex gap-5 items-center">
        {!isAuthenticated && (
          <div className="flex items-center gap-3">
            <Button
              onClick={handleLogin}
              style={buttonStyles}
            >
              LOGIN
            </Button>
            <Button
              onClick={handleSignup}
              style={buttonStyles}
            >
              SIGN UP
            </Button>
          </div>
        )}
        <div className="bg-mine-shaft-900 p-1 rounded-full">
          <IconSettings stroke={1.5} />
        </div>
        <div className="bg-mine-shaft-900 p-1 rounded-full">
          <Indicator color="#fabe25" offset={6} size={8} processing>
            <IconBell />
          </Indicator>
        </div>
      </div>
    </div>
  );
};

export default Header;
