/* eslint-disable no-nested-ternary */
import moment from 'moment';
import { useState, useEffect } from 'react';
import { firebase } from '../firebase';
import { collatedTasksExist } from '../helpers';

export const useTask = (selectedProject) => {
  const [task, setTask] = useState([]);
  const [archived, setArchived] = useState([]);

  useEffect(() => {
    let unsubscribe = firebase
      .fireStore()
      .collection('task')
      .where('userId', '==', 'sdfasfsdfdfasfdsfasdas');

    unsubscribe =
      selectedProject && !collatedTasksExist(selectedProject)
        ? (unsubscribe = unsubscribe.where('projectId', '==', selectedProject))
        : selectedProject === 'TODAY'
        ? (unsubscribe = unsubscribe.where(
            'date',
            '==',
            moment().format('DD/MM/YYYY')
          ))
        : selectedProject === 'INBOX' || selectedProject === 0
        ? (unsubscribe = unsubscribe.where('date', '==', ''))
        : unsubscribe;

    unsubscribe = unsubscribe.onSnapshot((snapshot) => {
      const newTasks = snapshot.docs.map((task) => ({
        id: task.id,
        ...task.data(),
      }));

      setTask(
        selectedProject === 'NEXT_7'
          ? newTasks.filter(
              (task) =>
                moment(task.data, 'DD-MM-YYYY').diff(moment(), 'days') <= 7 &&
                task.archived !== true
            )
          : newTasks.flter((task) => task.archived !== true)
      );
      setArchived(newTasks.filter((task) => task.archived === true));
    });

    return () => unsubscribe();
  }, [selectedProject]);

  return { task, archived };
};

// sdfasfsdfdfasfdsfasdas
export const useProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    firebase.fireStore
      .collection('projects')
      .where('userId', '==', 'sdfasfsdfdfasfdsfasdas')
      .orderBy('projectId')
      .get()
      .then((snapshot) => {
        const allProjects = snapshot.docs.map((project) => ({
          ...project.data(),
          docId: project.id,
        }));

        if (JSON.stringify(allProjects) !== JSON.stringify(projects)) {
          setProjects(allProjects);
        }
      });
  }, [projects]);

  return { projects, setProjects };
};
