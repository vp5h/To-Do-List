import React from 'react';
import {
  FaChevronDown,
  FaInbox,
  FaRegCalendar,
  FaRegCalendarAlt,
} from 'react-icons/fa';

export const Sidebar = () => (
  <div className="sidebar" data-testid="sidebar">
    <ul className="sidebar__genric">
      <li data-testid="inbox" className="inbox">
        <span>
          <FaInbox />
        </span>
        <span>Inbox</span>
      </li>
      <li data-testid="today" className="today">
        <span>
          <FaRegCalendar />
        </span>
        <span>Today</span>
      </li>
      <li data-testid="next_7" className="next_7">
        <span>
          <FaRegCalendarAlt />
        </span>
        <span>Next 7 Days</span>
      </li>
    </ul>
    <div className="sidebar__middle">
      <span>
        <FaChevronDown />
      </span>
      <h2>Projects</h2>
    </div>
    <ul className="sidebar__projects">Projects Will be here</ul>
    Add project component heere
  </div>
);
