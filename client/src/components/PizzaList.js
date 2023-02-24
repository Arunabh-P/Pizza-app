import React from 'react';
import AllPizza from '../pizza-data';
import arrow from '../Images/arrow.png';
import Pizza from './Pizza';
const PizzaList = () => {
  return (
    <div className="pizza-list-wrapper">
      <div className="arrow-div d-flex flex-wrap justify-content-between align-items-center ">
        <h2 className="m-0 p-0 arrow-text">
          Order a <span className="arrow-text-span"> delicious pizza</span> on
          the go, anywhere, <span className="arrow-text-span">anytime !</span>
        </h2>
        <img src={arrow} alt="arrow" className="arrow-img" />
      </div>
      <div className="pizza-list d-flex  justify-content-center justify-content-md-between">
        {AllPizza.map((pizza) => (
          <div md={4} key={pizza.name}>
            <Pizza pizza={pizza} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PizzaList;
