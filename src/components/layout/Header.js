import { FaPizzaSlice } from 'react-icons/fa';

// eslint-disable-next-line arrow-body-style
export const Header = () => {
  return (
    <header className="header" data-testid="header">
      <nav>
        <div className="logo">
          <img src="/images/logo.png" alt="TodoList" />
        </div>
        <div className="settings">
          <ul>
            <li className="quick-add-task-action" data-test-id="settings_add">
              +
            </li>

            <li className="settings__darkmode" data-testid="dark-mode-action">
              <FaPizzaSlice />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
