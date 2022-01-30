import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { CartState } from "../context/Context";

const Filters = () => {
    const {
        productDispatch,
        productState: { available, sort},
      } = CartState();
    return (
        <div className="filters">
            <span className="title">Filter Products</span>
            <span>
            <Form.Check
                    inline
                    label="Exclude out of stock"
                    name="group1"
                    type="checkbox"
                id={`inline-1`}
                onChange={() =>
                    productDispatch({
                      type: "FILTER_BY_STOCK",
                    })
                  }
                  checked={!available}
                />        

            </span>
            <Button
        variant="light"
        onClick={() =>
          productDispatch({
            type: "CLEAR_FILTERS",
          })
        }
      >
        Clear Filters
      </Button>
        </div>
    );
};

export default Filters;
