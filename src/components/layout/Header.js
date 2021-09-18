/* eslint-disable react/jsx-no-bind */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { FaPizzaSlice, FaSignOutAlt } from 'react-icons/fa';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { AddTask } from '../AddTask';
import { useAuth } from '../../context/AuthContext';

export const Header = ({ darkMode, setDarkMode }) => {
  const [shouldShowMain, setShouldShowMain] = useState(false);
  const [showQuickAddTask, setShowQuickAddTask] = useState(false);
  const { currentUser, logout } = useAuth();
  const history = useHistory();
  const [error, setError] = useState('');

  async function handleLogout() {
    setError('');

    try {
      await logout();
      history.push('/login');
    } catch {
      setError('Failed to log out');
    }
  }
  return (
    <header className="header" data-testid="header">
      <nav>
        <div className="logo">
          <img src="/images/logo.png" alt="TodoList" />
        </div>
        <p>Hi, {currentUser.email}</p>
        <div className="settings">
          <ul>
            <li
              className="settings_add"
              data-test-id="quick-add-task-action"
              onClick={() => {
                setShowQuickAddTask(true);
                setShouldShowMain(true);
              }}
            >
              +
            </li>

            <li
              className="settings__darkmode"
              data-testid="dark-mode-action"
              aria-label="Darkmode on/off"
              type="button"
              onClick={() => setDarkMode(!darkMode)}
            >
              <FaPizzaSlice />
            </li>

            <li
              className="settings_add"
              data-test-id="quick-add-task-action"
              onClick={handleLogout}
            >
              <FaSignOutAlt />
            </li>
          </ul>
        </div>
      </nav>

      <AddTask
        showAddTaskMain={false}
        shouldShowMain={shouldShowMain}
        showQuickAddTask={showQuickAddTask}
        setShowQuickAddTask={setShowQuickAddTask}
      />
    </header>
  );
};
