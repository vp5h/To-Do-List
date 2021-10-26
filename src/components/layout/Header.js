/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext, useState } from 'react';
import { FaPizzaSlice, FaSignOutAlt, FaEdit } from 'react-icons/fa';
import { Link, useHistory } from 'react-router-dom';
import { useSidebar } from '../../context/sidebar-context';
import { AddTask } from '../AddTask';
import { useAuth } from '../../context/AuthContext';

export const Header = ({ darkMode, setDarkMode }) => {
  const [shouldShowMain, setShouldShowMain] = useState(false);
  const [showQuickAddTask, setShowQuickAddTask] = useState(false);
  const { currentUser, logout } = useAuth();
  const history = useHistory();
  const [error, setError] = useState('');
  const { showSbar, setshowSbar } = useSidebar();
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
        <div
          className="logo"
          onClick={() => {
            setshowSbar(!showSbar);
          }}
        >
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
            <Link to="/update-profile">
              <li className="settings_add" data-test-id="quick-add-task-action">
                <FaEdit />
              </li>
            </Link>
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
