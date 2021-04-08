import React, { useEffect, useState } from 'react';
import Product from "../Product/Product"
import Header from '../Header/Header';
import { css } from "@emotion/core";
// import ClipLoader from "react-spinners/ClipLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
const Home = () => {
    const style = {
        display: 'flex',
        margin: '40px',
        justifyContent: 'space-between'
    }
    const [events, setEvents] = useState([]);

    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#ffffff");

    useEffect(() => {
        fetch('https://calm-fjord-86946.herokuapp.com/events')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])

    return (
        // <div style={style} className="row">
        <div>
            <Header />
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    events.map(event => <Product event={event}></Product>)
                }
            </div>

            {/* ===>>>tried to add spinner! Please Check It */}

            {/* <div className="sweet-loading">
                <button onClick={() => setLoading(!loading)}>Toggle Loader</button>
                <input
                    value={color}
                    onChange={(input) => setColor(input.target.value)}
                    placeholder="Color of the loader"
                />

                <ClipLoader color={color} loading={loading} css={override} size={150} />
            </div> */}
        </div>
    );
};

export default Home;