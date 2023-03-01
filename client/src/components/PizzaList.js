import React, { useEffect } from 'react';
import AllPizza from '../pizza-data';
import arrow from '../Images/arrow.png';
import Pizza from './Pizza';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPizzas } from '../action/pizzaAction';
import Loader from './Loader';
import Error from './Error';
const PizzaList = () => {
  const dispatch = useDispatch();
  const pizzaState = useSelector((state) => state.getAllPizzaReducer);
  const { loading, pizzas, error } = pizzaState;
  useEffect(() => {
    dispatch(getAllPizzas());
  }, [dispatch]);
  return (
    <div className="pizza-list-wrapper">
      <div className="arrow-div d-flex flex-wrap justify-content-between align-items-center ">
        <h2 className="m-0 p-0 arrow-text">
          Order a <span className="arrow-text-span"> delicious pizza</span> on
          the go, anywhere, <span className="arrow-text-span">anytime !</span>
        </h2>
        <img src={arrow} alt="arrow" className="arrow-img" />
      </div>
      {loading ? (
        <Loader />
      ) : error ? (
        <Error>Error while fetching pizzas {error}</Error>
      ) : (
        <div className="pizza-list d-flex justify-content-center justify-content-md-between">
          {pizzas?.map((pizza) => (
            <div md={4} key={pizza.name}>
              <Pizza pizza={pizza} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PizzaList;
