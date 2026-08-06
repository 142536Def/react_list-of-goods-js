import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';

export const goodsFromServer = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

function sortGoods(goods, sortType, isReverse) {
  const sortedGoods = [...goods];

  if (sortType === 'alphabetical') {
    sortedGoods.sort((a, b) => a.localeCompare(b));
  }

  if (sortType === 'length') {
    sortedGoods.sort((a, b) => a.length - b.length);
  }

  if (isReverse) {
    sortedGoods.reverse();
  }

  return sortedGoods;
}

export const App = () => {
  const [sortType, setSortType] = useState('');
  const [isReverse, setIsReverse] = useState(false);

  const visibleGoods = sortGoods(goodsFromServer, sortType, isReverse);

  const isOrderChange = sortType !== '' || isReverse;

  function handleReset() {
    setSortType('');
    setIsReverse(false);
  }

  return (
    <div className="section content">
      <div className="buttons">
        <button
          onClick={() => setSortType('alphabetical')}
          type="button"
          className={
            sortType === 'alphabetical'
              ? 'button is-info'
              : 'button is-info is-light'
          }
        >
          Sort alphabetically
        </button>

        <button
          onClick={() => setSortType('length')}
          type="button"
          className={
            sortType === 'length'
              ? 'button is-success'
              : 'button is-success is-light'
          }
        >
          Sort by length
        </button>

        <button
          onClick={() => setIsReverse(!isReverse)}
          type="button"
          className={
            isReverse ? 'button is-warning' : 'button is-warning is-light'
          }
        >
          Reverse
        </button>

        {isOrderChange && (
          <button
            onClick={handleReset}
            type="button"
            className="button is-danger is-light"
          >
            Reset
          </button>
        )}
      </div>

      <ul>
        {visibleGoods.map(good => (
          <li key={good} data-cy="Good">
            {good}
          </li>
        ))}
      </ul>
    </div>
  );
};
