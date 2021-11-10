/* eslint-disable array-callback-return */
import React, { useEffect } from 'react';
import { useTasks } from '../hooks';
import { Checkbox } from './Checkbox';
import { getTitle, getCollatedTitle, collatedTasksExist } from '../helpers';
import { useSelectedProjectValue, useProjectValue } from '../context';
import { collatedTasks } from '../constants';
import { AddTask } from './AddTask';

export const Tasks = () => {
  const { selectedProject } = useSelectedProjectValue();
  const { projects } = useProjectValue();
  const { tasks, archivedTasks } = useTasks(selectedProject);

  let projectName = '';
  if (collatedTasksExist(selectedProject) && selectedProject) {
    projectName = getCollatedTitle(collatedTasks, selectedProject).name;
    // console.log('projectName 2', projectName);
  }

  if (
    projects &&
    projects.length > 0 &&
    selectedProject &&
    !collatedTasksExist(selectedProject)
  ) {
    projectName = getTitle(projects, selectedProject).name;
    // console.log('projectName 1', projectName);
  }

  // console.log(tasks, 'task');

  useEffect(() => {
    document.title = `${projectName}: TodoList`;
  });

  /* {(() => {
        if (projectName === 'Archived') {
          return <div>hi</div>;
        }
      })()} */

  return (
    <div className="tasks" data-testid="tasks">
      {projectName !== 'Archived' ? (
        <>
          <h2 data-testid="project-name">{projectName}</h2>
          <ul className="tasks__list">
            {tasks.map((task) => (
              <li key={`${task.id}`}>
                <Checkbox
                  id={task.id}
                  arc={task.archived}
                  taskdec={task.task}
                />
                {task.archived ? (
                  <span>
                    <strike>{task.task}</strike>
                  </span>
                ) : (
                  <span> {task.task}</span>
                )}
              </li>
            ))}
          </ul>
          <AddTask />
        </>
      ) : (
        <>
          <h2 data-testid="project-name">Archived</h2>
          <ul className="tasks__list">
            {archivedTasks.map((task) => (
              <li key={`${task.id}`}>
                <Checkbox
                  id={task.id}
                  arc={task.archived}
                  taskdec={task.task}
                />

                <span>
                  <strike>{task.task}</strike>
                </span>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};
