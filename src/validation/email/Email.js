const validateEmaill = email => {
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    return false;
  } else {
    return true;
  }
};

export default validateEmaill;
