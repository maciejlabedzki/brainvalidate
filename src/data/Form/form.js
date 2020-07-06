const formPattern = [
  {
    id: 0,
    label: "First Name",
    input: {
      name: "firstName",
      type: "text",
      placeholder: "Name",
      required: true,
    },
  },
  {
    id: 1,
    label: "Last Name",
    input: {
      name: "lastName",
      type: "text",
      placeholder: "Surname",
      required: true,
    },
  },
  {
    id: 2,
    label: "Email",
    input: {
      name: "email",
      type: "text",
      placeholder: "email@gmail.com",
      required: true,
    },
  },
  {
    id: 3,
    label: "Event",
    input: {
      type: "date",
      name: "event",
      placeholder: "2020-01-01",
      required: true,
      min: "2020-01-01",
      max: "2020-12-31",
    },
  },
];

export default formPattern;
