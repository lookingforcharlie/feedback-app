import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

// create our context
const FeedbackContext = createContext();

// create the provider of our context
// we gonna wrapper props inside provider, like what router does
export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "This item 1 is from context",
      rating: 1,
    },
    {
      id: 2,
      text: "This item 2 is from context",
      rating: 2,
    },
    {
      id: 3,
      text: "This item 3 is from context",
      rating: 3,
    },
  ]);

  // globe state for editing feedback
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  // delete Feedback
  const deleteFeedback = (id) => {
    const tempFeedback = [...feedback];
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(tempFeedback.filter((item) => item.id !== id));
      console.log(id);
    }
  };

  // add feedback
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    console.log(newFeedback);
    setFeedback([newFeedback, ...feedback]);
  };

  // update feedback item
  // if you wanna return an array with same length, use array.map()
  const updateFeedback = (id, newUpdatedItem) => {
    console.log(id, newUpdatedItem);
    const tempFeedback = feedback.map((item) =>
      item.id === id ? { ...item, ...newUpdatedItem } : item
    );
    setFeedback(tempFeedback);
  };

  // Set item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item, // shorthand for item: item
      edit: true,
    });
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback, // shorthand for 'feedback: feedback'
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
