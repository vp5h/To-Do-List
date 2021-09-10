import { collatedTasks } from '../constants';

export const collatedTasksExist = (selctedProject) =>
  collatedTasks.find((task) => task.key === selctedProject);
