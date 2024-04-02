
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories, fetchMenuItems } from '../store/actions';

export const Categories = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector(state => state.categories);
  const [activeCategory, setActiveCategory] = useState(null);
  

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleCategoryClick = (short_name) => {
    dispatch(fetchMenuItems(short_name));
    setActiveCategory(short_name);
  };

  

  return (
    <div>
      <h2>Categories</h2>
      <ul>
        {categories.map(category => (
          <li key={category.id}>
            <button
              onClick={() => handleCategoryClick(category.short_name)}
              className={`category-button ${activeCategory === category.short_name ? 'active' : ''}`}
            >
              {category.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

