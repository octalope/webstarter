const now = () => {
  const today = new Date();
  return today.toISOString();
};

module.exports = now;
