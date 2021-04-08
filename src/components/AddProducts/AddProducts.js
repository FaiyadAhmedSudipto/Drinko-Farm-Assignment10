import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import "../Header/Header.css";
import Admin from '../Admin/Admin';

const AddProducts = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const [imageURL, setIMageURL] = useState(null);


  const onSubmit = data => {
    const eventData = {
      productName: data.name,
      price: data.price,
      quantity: data.quantity,
      imageURL: imageURL
    };
    const url = `https://calm-fjord-86946.herokuapp.com/addProduct`;
    console.log(eventData);

    fetch(url, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(eventData)
    })
      .then(res => console.log('server side response', res))
  };

  const handleImageUpload = event => {
    console.log(event.target.files[0])
    const imageData = new FormData();
    imageData.set('key', '9096ab08782293a3c1d93a0ab3b3dc63');
    imageData.append('image', event.target.files[0]);

    axios.post('https://api.imgbb.com/1/upload',
      imageData)
      .then(function (response) {
        setIMageURL(response.data.data.display_url);
        console.log(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });

  }
  return (
    <div>
      <Admin />
      <div>
        <div className="emailCard">
          <h3 class="fw-light">Add New Products</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="col-sm-15">
              <input name="name" type="text" defaultValue="Name" class="form-control" id="inputPassword" {...register("name")} />
            </div>
            <div id="align" className="col-sm-15">
              <input name="Price" defaultValue="Price" class="form-control" id="inputPassword" {...register("price")} />
            </div>
            <div className="col-sm-15">
              <input name="Quantity" type="number" defaultValue="1" class="form-control" id="inputPassword" {...register("quantity")} />
            </div>
            <div className="col-sm-15">
              {/* <input name="exampleRequired" type="file" class="form-control" id="inputPassword" onChange={handleImageUpload} /> */}
              <input name="exampleRequired" type="file" class="btn btn-outline-light" onChange={handleImageUpload} />
            </div>
            <br />
            {/* <input type="submit" /> */}
            <input class="btn btn-primary" type="submit" value="Submit"></input>
          </form>
        </div>

      </div>
    </div>
  );
};

export default AddProducts;