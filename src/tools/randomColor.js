export function setBg() {
  const colors = [
    '#0074D9',
    '#7FDBFF',
    '#39CCCC',
    '#B10DC9',
    '#FF851B',
    '#FFDC00',
    '#2ECC40',
    '#01FF70',
    '#3D9970',
    '#DDDDDD',
  ];
  const random = Math.floor(Math.random() * colors.length);
  return colors[random];
}
