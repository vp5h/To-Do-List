/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { firebase } from '../firebase';

export const Checkbox = ({ id, taskdec, arc }) => {
  const archiveTask = () => {
    firebase.firestore().collection('tasks').doc(id).update({
      archived: !arc,
    });
  };
  return (
    <div
      className="checkbox-holder"
      data-testid="checkbox-action"
      onClick={() => archiveTask()}
    >
      {!arc ? (
        <span className="checkbox" />
      ) : (
        <span className="checkbox" style={{ backgroundColor: 'Grey' }} />
      )}
    </div>
  );
};
