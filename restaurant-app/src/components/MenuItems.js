import React from 'react';
import { useSelector } from 'react-redux';



export const MenuItems = () => {
  const { menuItems } = useSelector(state => state.menuItems);

  return (
    <div>
      <h2>Menu Items</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {menuItems.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


