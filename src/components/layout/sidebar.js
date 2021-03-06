/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import {
  FaChevronDown,
  FaInbox,
  FaRegCalendar,
  FaRegCalendarAlt,
} from 'react-icons/fa';
import { Projects } from '../Projects';
import { useSelectedProjectValue } from '../../context';
import { AddProject } from '../AddProjects';
import { useSidebar } from '../../context/sidebar-context';

export const Sidebar = () => {
  const { setSelectedProject } = useSelectedProjectValue();
  const [active, setActive] = useState('inbox');
  const [showProjects, setShowProjects] = useState(true);
  const { showSbar, setshowSbar } = useSidebar();

  return (
    <div
      className={!showSbar ? 'sidebar' : ' mobsidebar'}
      data-testid="sidebar"
    >
      <ul className="sidebar__genric">
        <li
          data-testid="inbox"
          className={active === 'inbox' ? 'active' : undefined}
          onClick={() => {
            setActive('inbox');
            setSelectedProject('INBOX');
            setshowSbar(!showSbar);
          }}
        >
          <span>
            <FaInbox />
          </span>
          <span>Inbox </span>
        </li>
        <li
          data-testid="today"
          className={active === 'today' ? 'active' : undefined}
          onClick={() => {
            setActive('today');
            setSelectedProject('TODAY');
            setshowSbar(!showSbar);
          }}
        >
          <span>
            <FaRegCalendar />
          </span>
          <span>Today</span>
        </li>
        <li
          data-testid="next_7"
          className={active === 'next_7' ? 'active' : undefined}
          onClick={() => {
            setActive('next_7');
            setSelectedProject('NEXT_7');
            setshowSbar(!showSbar);
          }}
        >
          <span>
            <FaRegCalendarAlt />
          </span>
          <span>Next 7 Days</span>
        </li>
        <li
          data-testid="archived"
          className={active === 'archived' ? 'active' : undefined}
          onClick={() => {
            setActive('archived');
            setSelectedProject('Archived');
            setshowSbar(!showSbar);
          }}
        >
          <span>
            <FaRegCalendarAlt />
          </span>
          <span>Archived</span>
        </li>
      </ul>
      <div
        className="sidebar__middle"
        aria-label="Show/hide projects"
        onClick={() => setShowProjects(!showProjects)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') setShowProjects(!showProjects);
        }}
        role="button"
        tabIndex={0}
      >
        <span>
          <FaChevronDown
            className={!showProjects ? 'hidden-projects' : undefined}
          />
        </span>
        <h2>Projects</h2>
      </div>
      <ul className="sidebar__projects" onClick={() => setActive('')}>
        {showProjects && (
          <Projects activeValue={active} setActiveValue={setActive} />
        )}
      </ul>
      {showProjects && <AddProject />}
    </div>
  );
};
