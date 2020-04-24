function sortByHp(arr) {
  arr.sort((a, b) => b.health - a.health);
  return arr;
}

export default sortByHp;
