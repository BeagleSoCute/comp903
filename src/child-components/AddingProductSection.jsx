import React, { useRef } from "react";
import Button from "../share-components/Button";
import { generateId } from "../services/product.service";

const AddingProductSection = ({ displayForm, onAdd, onRandomAdd,onDisplayForm }) => {
  const nameRef = useRef(null);
  const descriptionRef = useRef(null);
  const priceRef = useRef(null);

  const handleSubmit = () => {
    const name = nameRef.current.value;
    const description = descriptionRef.current.value;
    const price = parseInt(priceRef.current.value);
    onAdd({ name, description, price, id: generateId() });
    onDisplayForm(false);
  };
  return (
    <div>
      <div className="grid mb-2 justify-end">
        <div className=" grid grid-cols-2 gap-5 ">
          {!displayForm && (
            <>
              <Button onClick={() => onDisplayForm(true)} className="p-2">
                Add Product
              </Button>
              <Button onClick={() => onRandomAdd()} className="p-2">
                Generate 10,000 products
              </Button>
            </>
          )}
        </div>
      </div>
      {displayForm ? (
        <div className="grid justify-center gap-5 border-solid border-2 border-gray-700 p-2 my-5 ">
          <h1 className="font-title">Add a product</h1>
          <form className="grid gap-5">
            <div class="text-gray-400 focus-within:text-green-600 focus-within:underline">
              <p> Enter product's name: </p>
              <input
                class="ml-2 px-4 py-2 border rounded"
                type="text"
                placeholder="Name"
                ref={nameRef}
              />
            </div>
            <div class="text-gray-400 focus-within:text-green-600 focus-within:underline">
              <p> Enter product's description: </p>
              <textarea
                class="ml-2 px-4 py-2 border rounded"
                type="text"
                placeholder="Description"
                ref={descriptionRef}
              />
            </div>
            <div class="text-gray-400 focus-within:text-green-600 focus-within:underline">
              <p> Enter product's price: </p>
              <input
                class="ml-2 px-4 py-2 border rounded"
                type="number"
                placeholder="Price"
                ref={priceRef}
              />
            </div>
          </form>
          <div className="flex gap-5">
            <Button onClick={() => onDisplayForm(false)} className="p-2">
              Cancel
            </Button>
            <Button
              type="submit"
              onClick={() => handleSubmit()}
              className="p-2"
            >
              Submit
            </Button>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default AddingProductSection;
