import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addToCart } from '../redux/slices/cartSlice';
import { fetchGoods } from '../redux/slices/goodsSlice/fetching';

import { GoodItem } from '../components';

function Goods() {
  const dispatch = useDispatch();
  const { goods } = useSelector(({ goods }) => goods);
  const { activeMenuItem } = useSelector(({ menu }) => menu);

  React.useEffect(() => {
    dispatch(fetchGoods(activeMenuItem.id));
  }, [activeMenuItem.id]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="shop__container">
      <h1 className="goods__category">{activeMenuItem.name}</h1>
      <div className="shop__wrapper">
        {goods.length && goods.map(item => {
          return (
            <GoodItem
              key={item.id}
              item={item}
              addToCart={handleAddToCart}
            />
          )
        })}
      </div>
    </div>
  )
};

export default Goods;