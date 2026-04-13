// TablePage.tsx
import React from 'react';

const TablePage = () => {
  const data = [
    { name: 'John', age: 28 },
    { name: 'Jane', age: 32 },
    { name: 'Mike', age: 25 },
  ];

  return (
    <div>
      <h2>Таблица пользователей</h2>
      <table>
        <thead>
          <tr>
            <th>Имя</th>
            <th>Возраст</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablePage;