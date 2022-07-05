import React, { SyntheticEvent, useState } from 'react';
import Header from './Header';
import data from '../data';
const NewOrder = () => {
  const [{ brand, model }, setData] = useState({
    brand: 'Aprilia',
    model: '',
  });
  const [modelInformation, setModelInformation] = useState({
    lastSupportedYear: 0,
    chainChangePrice: 0,
    oilAndOilFilterChangePrice: 0,
    airFilterChangePrice: 0,
    brakeFluidChangePrice: 0,
  });
  const brands = data.map((item) => (
    <option key={item.brand} value={item.brand}>
      {item.brand}
    </option>
  ));
  const models = data
    .find((item) => item.brand === brand)
    ?.models.map((item) => (
      <option key={item.model} value={item.model}>
        {item.model}
      </option>
    ));

  function handleBrandChange(event: SyntheticEvent) {
    setData((data) => ({
      brand: (event.target as HTMLTextAreaElement).value,
      model: '',
    }));
    const initialState = {
      lastSupportedYear: 0,
      chainChangePrice: 0,
      oilAndOilFilterChangePrice: 0,
      airFilterChangePrice: 0,
      brakeFluidChangePrice: 0,
    };
    setModelInformation(initialState);
  }
  function handleModelChange(event: SyntheticEvent) {
    const model = (event.target as HTMLTextAreaElement).value;
    setData((data) => ({
      ...data,
      model: model,
    }));
    const test = data
      .find((item) => item.brand === brand)
      ?.models.find((item) => item.model === model);
    setModelInformation(test as any);
  }
  return (
    <div className="pl-28 pt-28">
      <Header></Header>
      <p className="text-2xl font-bold">New Order</p>
      <form className="flex">
        <div className="flex flex-col">
          <label className="">Select Brand</label>
          <select
            name="brands"
            id="brands"
            className="input"
            onChange={handleBrandChange}
            value={brand}
          >
            {brands}
          </select>
          <label>Model</label>
          <select
            name="models"
            id="models"
            className="input"
            onChange={handleModelChange}
            value={model}
          >
            {models}
          </select>
          <label>Model year</label>
          <input type="text" placeholder="Enter year..." className="input" />
          <label>Mileage</label>
          <input type="text" placeholder="Enter mileage..." className="input" />
        </div>
        <div className="flex flex-col">
          <label>Choose date:</label>
          <input type="date" name="" id="" className="input h-28" />
          <label>Type of service</label>
          <label>
            <input type="checkbox" name="chain-change" id="chain-change" />{' '}
            Chain Change
          </label>
          <label>
            <input type="checkbox" name="oil-change" id="oil-change" /> Oil and
            oil filter change
          </label>
          <label>
            <input type="checkbox" name="air-change" id="air-change" /> Air
            filter change
          </label>
          <label>
            <input type="checkbox" name="air-change" id="air-change" /> Brake
            fuild change
          </label>
        </div>
      </form>
    </div>
  );
};

export default NewOrder;
