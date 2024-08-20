import React, { useState } from 'react';
import "./searchBar.scss";

const types = ["buy", "rent"];

function SearchBar() {
    const [query, setQuery] = useState({
        type: "buy",
        location: "",
        minprice: 0,
        maxprice: 0
    });

    const switchType = (val) => {
        setQuery((prev) => ({ ...prev, type: val }));
    };

    return (
        <div className='searchBar'>
            <div className="type">
                {types.map((type) => (
                    <button
                        key={type}
                        onClick={() => switchType(type)}
                        className={query.type === type ? "active" : ""}
                    >
                        {type}
                    </button>
                ))}
            </div>

            <form action="">
                <input
                    type="text"
                    name='location'
                    value={query.location}
                    onChange={(e) => setQuery((prev) => ({ ...prev, location: e.target.value }))}
                    placeholder='City Location'
                />

                <input
                    type="number"
                    name='minPrice'
                    value={query.minprice}
                    onChange={(e) => setQuery((prev) => ({ ...prev, minprice: e.target.value }))}
                    min={0}
                    max={1000000}
                    placeholder='MinPrice'
                />

                <input
                    type="number"
                    name='maxPrice'
                    value={query.maxprice}
                    onChange={(e) => setQuery((prev) => ({ ...prev, maxprice: e.target.value }))}
                    min={0}
                    max={1000000}
                    placeholder='MaxPrice'
                />

                <button type="submit">
                    <img src="/search.png" alt="" />
                </button>
            </form>
        </div>
    );
}

export default SearchBar;
