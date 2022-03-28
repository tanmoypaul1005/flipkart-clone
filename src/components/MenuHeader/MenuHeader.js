import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MenuHeader.css';
import { getAllCategory } from './../../actions/categoryActions';


const MenuHeader = (props) => {
  const category = useSelector(state => state.category);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategory());
  }, [])

  const renderCategories = (categories) => {
    let myCategories = [];
    for (let category of categories) {

      myCategories.push(
        <li key={category.name}>


          <a className="gg" href={`/${category.slug}?cid=${category._id}&type=${category.type}`}>{category.name}</a>
          {category.children.length > 0 ? (<ul>{renderCategories(category.children)}</ul>) : null}
        </li>
      )
    }
    return myCategories;
  }
  return (
    <div className="menuHeader">

      <ul style={{ zIndex: 4 }}>
        {category.categories.length > 0 ? renderCategories(category.categories) : null}
      </ul>
    </div>
  );
};

export default MenuHeader;

