/* eslint-disable import/extensions */
import sortByHp from '../src/main.js';

test('Массив теперь сортируется по убыванию здоровья по нулевому инексу', () => {
  const index = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];

  const testArray = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];
  const testFunction = sortByHp(testArray);

  expect(index[0]).toEqual(testFunction[0]);
});

test('Массив теперь сортируется по убыванию здоровья по первому индексу', () => {
  const index = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];
  const testArray = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];
  const testFunction = sortByHp(testArray);

  expect(index[1]).toEqual(testFunction[1]);
});

test('Массив теперь сортируется по убыванию здоровья по второму индексу', () => {
  const index = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];

  const testArray = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];
  const testFunction = sortByHp(testArray);

  expect(index[2]).toEqual(testFunction[2]);
});
