/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { firebase } from '../firebase';

export const Checkbox = ({ id, arc, taskdec }) => {
  const archiveTask = () => {
    firebase.firestore().collection('tasks').doc(id).update({
      archived: !arc,
    });
  };
  const deleteTask = () => {
    firebase.firestore().collection('tasks').doc(id).delete();
  };
  const [showConfirm, setShowConfirm] = useState(false);
  return (
    <>
      <div
        className="checkbox-holder"
        data-testid="checkbox-action"
        onClick={() => archiveTask()}
      >
        {!arc ? (
          <>
            <span className="checkbox" />
          </>
        ) : (
          <span className="checkbox" style={{ backgroundColor: 'Grey' }} />
        )}
      </div>
      <div className="task_del">
        {!arc ? taskdec : <strike>{taskdec}</strike>}
      </div>
      <span
        className="project-delete"
        data-testid="delete-project"
        onClick={() => setShowConfirm(!showConfirm)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') setShowConfirm(!showConfirm);
        }}
        tabIndex={0}
        role="button"
        aria-label="Confirm deletion of project"
        style={{ justifyContent: 'flex-end', marginLeft: '1vh' }}
      >
        <FaTrashAlt />

        {showConfirm && (
          <div className="project-delete-modal">
            <div className="project-delete-modal__inner">
              <p>Are You sure you want to delete "{taskdec}" </p>
              <button
                type="button"
                onClick={() => {
                  deleteTask();
                }}
              >
                Delete
              </button>
              <span onClick={() => setShowConfirm(!showConfirm)}>Cancel</span>
            </div>
          </div>
        )}
      </span>
    </>
  );
};
