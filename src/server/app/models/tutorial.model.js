module.exports = (mongoose) => {
  const Tutorial = mongoose.model(
    "tutorial",
    mongoose.Schema(
      {
        firstName: String,
        lastName: String,
        email: String,
        event: String,
      },
      { timestamps: true }
    )
  );

  return Tutorial;
};
