const levelMap = {
  1: 'intern',
  2: 'junior',
  3: 'strong junior',
  4: 'middle',
  5: 'senior',
  6: 'team lead',
};

export default level => levelMap[level] || '';
