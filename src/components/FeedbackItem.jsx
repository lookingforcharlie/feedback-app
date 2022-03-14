// FaTimes is a cross icon, FaEdit is a pencil icon
import { FaTimes, FaEdit } from "react-icons/fa";
import Card from "./shared/Card";
import { PropTypes } from "prop-types";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackItem({ item }) {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);

  return (
    <Card>
      <div className='num-display'>{item.rating}</div>
      {/* We don't need to create an extra function here for onClick */}
      <button className='close' onClick={() => deleteFeedback(item.id)}>
        <FaTimes color='purple' />
      </button>
      <button className='edit' onClick={() => editFeedback(item)}>
        <FaEdit color='purple' />
      </button>
      <div className='text-display'>{item.text}</div>
    </Card>
  );
}

FeedbackItem.protoTypes = {
  item: PropTypes.object.isRequired,
};

export default FeedbackItem;
