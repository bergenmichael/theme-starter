import React from 'react';

// const equalAside = (prevProps, nextProps) => {
//   return prevProps.list.length === nextProps.list.length;
// }

const Aside = ({list}) => (
  <aside className="aside">
    <ul>
      {list.map((item, i) => (
        <li key={i}><a href={item.link}>{item.title}</a></li>
      ))}
    </ul>
    <div style={{paddingLeft: '10px', maxWidth: '120px'}}>
      <a href="/" style={{marginRight: '5px'}}>Apartment #01F - 0204</a><span className="fa fa-heart"></span>
    </div>
  </aside>
);

const MemoizedAside = Aside;

export default MemoizedAside;