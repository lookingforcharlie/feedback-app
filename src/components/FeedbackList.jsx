import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react";
import React from "react";
import FeedbackItem from "./FeedbackItem";
// import PropTypes from "prop-types";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackList() {
  const { feedback } = useContext(FeedbackContext);

  console.log(feedback);
  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Yet</p>;
  }
  return (
    <div className='feedback-list'>
      <AnimatePresence>
        {feedback.map((item) => {
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <FeedbackItem
                key={item.id}
                item={item}
                // handleDelete={handleDelete}
              />
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );

  // version of return without the animation
  // return (
  //   <div className='feedback-list'>
  //     {feedback.map((item) => {
  //       return (
  //         <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
  //       );
  //     })}
  //   </div>
  // );
}

// FeedbackList.propTypes = {
//   feedback: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
//       text: PropTypes.string.isRequired,
//       rating: PropTypes.number.isRequired,
//     })
//   ).isRequired,
// };

export default FeedbackList;

//rfce
// impt
