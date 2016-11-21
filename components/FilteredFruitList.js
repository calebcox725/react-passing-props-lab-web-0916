const React = require('react');
const { Component } = require('react');

function FilteredFruitList(props) {
  const list = props.filter ? props.fruit.filter(f => {return f.fruit_type === props.filter}) : props.fruit

  return (
    <ul className="fruit-list">
      {list.map((i,idx) => <li key={idx}>{i.char}</li>)}
    </ul>
  )
}

FilteredFruitList.defaultProps = {
  fruit: [],
  filter: null
}

module.exports = FilteredFruitList
