/* eslint-disable array-callback-return */
import React, { useEffect } from 'react';
import { useTasks } from '../hooks';
import { Checkbox } from './Checkbox';
import { getTitle, getCollatedTitle, collatedTasksExist } from '../helpers';
import { useSelectedProjectValue, useProjectValue } from '../context';
import { collatedTasks } from '../constants';

export const Tasks = () => {
  const { tasks } = useTasks();
  const { selectedProject } = useSelectedProjectValue();
  const { projects } = useProjectValue();

  let projectName = '';

  if (projects && selectedProject && !collatedTasksExist(selectedProject)) {
    projectName = getTitle(projects, selectedProject).name;
    console.log('projectName 1', projectName);
  }

  if (collatedTasksExist(selectedProject) && selectedProject) {
    projectName = getCollatedTitle(collatedTasks, selectedProject).name;
    console.log('projectName 2', projectName);
  }

  // console.log(tasks, 'task');

  useEffect(() => {
    document.title = `${projectName}: TodoList`;
  }, []);
  return (
    <div className="tasks" data-testid="tasks">
      <h2 data-testid="project-name">{projectName}</h2>

      <ul className="tasks__list">
        {tasks.map((task) => (
          <li key={`${task.id}`}>
            <Checkbox id={task.id} taskdec={task.task} />
            <span>{task.task}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
