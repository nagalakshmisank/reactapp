const initialState = {
    message: "Please Subscribe"
   };
  
 const reducer = (state = initialState, action) => {
      const newState = { ...state };
      if (action.message === "Message_change")
    newState.type = "Thank you for subscribing";
      return newState;
    };
  
  export default reducer;