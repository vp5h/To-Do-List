import React, { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { useProjectValue, useSelectedProjectValue } from '../../context';
import { firebase } from '../../firebase';

export const IndividualProject = () => {
  const [showConfirm, setShowConfirm] = useState(false);
  const [projects, setProjects] = useProjectValue();
  const [setSelectedProject] = useSelectedProjectValue();

  const deleteProject = () => {
    firebase.firestore
      .collection('projects')
      .doc(docId)
      .delete()
      .then(() => {
        setProjects([...projects]);
        setSelectedProject('INBOX');
      });
  };
};
