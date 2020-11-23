import React from 'react';

const Menu = ({items}) => {
  return (
    <div className="section-center"> 
      {items.map(menuItem => (
        <article key={menuItem.id} className="menu-item">
          <img src={menuItem.img} alt={menuItem.name} className="photo"/>
          <div className="item-info">
            <header>
              <h4>{menuItem.title}</h4>
              <div className="price">$ {menuItem.price}</div>
            </header>
            <p className="item-text">{menuItem.desc}</p>
          </div>
        </article>
      ))}
    </div>
  );
};

export default Menu;
