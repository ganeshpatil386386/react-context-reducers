import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Rating from "./Rating";
import "./styles.css";

const Filters = () => {
  const [rate, setRate] = useState(0);
  return (
    <div className='filetrs'>
      <span className='title'>Filter Products</span>
      <span>
        <Form.Check
          inline
          label='Ascending'
          name='group1'
          tyoe='radio'
          id={`inline-1`}
        />
      </span>
      <span>
        <Form.Check
          inline
          label='Descending'
          name='group1'
          tyoe='radio'
          id={`inline-2`}
        />
      </span>
      <span>
        <Form.Check
          inline
          label='include Out of Stock'
          name='group1'
          tyoe='checkbox'
          id={`inline-3`}
        />
      </span>
      <span>
        <Form.Check
          inline
          label='Fast Delivery Only'
          name='group1'
          tyoe='checkbox'
          id={`inline-4`}
        />
      </span>

      <span>
        <label style={{ paddingRight: 10 }}>Rating</label>

        <Rating
          rating={rate}
          onClick={(i) => setRate(i + 1)}
          style={{ cursor: "pointer" }}
        />
      </span>
      <Button variant='light'>Clear Filters</Button>
    </div>
  );
};

export default Filters;
