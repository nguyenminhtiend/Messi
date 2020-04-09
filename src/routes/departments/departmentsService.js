const getDepartments = async () => {
  const departments = [
    { id: 1, name: 'IT' },
    { id: 2, name: 'BPO' }
  ];
  return { departments };
};

module.exports = {
  getDepartments
};
