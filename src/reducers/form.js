const initialData = {
  firstName: "John",
  lastName: "Woke",
  email: "some@email.com",
  event: "2020-12-12"
};

const formReducer = (state = initialData, action) => {
  switch (action.type) {
    case "ADD_FIRSTNAME":
      return { ...state, firstName: action.payload };
    case "ADD_LASTNAME":
      return { ...state, lastName: action.payload };
    case "ADD_EMAIL":
      return { ...state, email: action.payload };
    case "ADD_EVENT":
      return { ...state, event: action.payload };
    case "ADD_ALL":
      return {
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        email: action.payload.email,
        event: action.payload.event
      };
    default:
      return state;
  }
};

export default formReducer;
