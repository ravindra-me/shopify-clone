import React from 'react';

function Variant({ variant, updateProduct, product }) {
  const availableVariantOptions = ['color', 'size', 'material'];
  console.log(variant);
  const changeHandler = (e, index) => {
    const variantUpdate = product.variant.map((v, i) =>
      i === index ? { name: e.target.value, options: [...v.options] } : v
    );
    console.log('abcx', e, index, variantUpdate);
    updateProduct({
      ...product,
      variant: variantUpdate,
    });
  };

  const inputHandler = (e, index) => {
    if (e.charCode === 13) {
      const variantUpdate = product.variant[index].options.push(e.target.value);
      updateProduct({
        ...product,
        variant: product.variant,
      });
    }
  };

  return (
    <div>
      <p>Options</p>
      {variant.map((vara, index) => (
        //    console.log(variant)
        <div className=" border border-solid border-black p-2 my-4 rounded">
          <div className="flex">
            <select
              onChange={(e) => changeHandler(e, index)}
              value={vara.name}
              className="flex-30 bg-gray-200 text-center"
            >
              <option value={vara.name} className="text-center">
                {vara.name}
              </option>
              {findNextVar(variant, availableVariantOptions).map((opt) => {
                return <option value={opt}>{opt}</option>;
              })}
            </select>
            <input
              type="text"
              name=""
              className="border border-gray-200 border-solid border-black flex-60"
              onKeyPress={(e) => inputHandler(e, index)}
            ></input>
          </div>
          <div className="flex flex-wrap my-4">
            {vara.options.map((opt, i) => (
              <p className="bg-gray-200 rounded-lg p-1 px-4 ml-4">
                {opt}
                <span
                  className="ml-2 cursor"
                  onClick={() => {
                    let updatevariantOptions = vara.options.filter(
                      (t) => opt !== t
                    );
                    console.log(updatevariantOptions, 'sdsadsdas');
                    product.variant[index].options = updatevariantOptions;
                    updateProduct({
                      ...product,
                      variant: product.variant,
                    });
                  }}
                >
                  <i className="fas fa-times"></i>
                </span>
              </p>
            ))}
          </div>
        </div>
      ))}
      {variant.length === 3 ? null : (
        <button
          onClick={() => {
            if (availableVariantOptions.length !== variant.length) {
              const filtered = findNextVar(variant, availableVariantOptions);
              updateProduct({
                ...product,
                variant: product.variant.concat({
                  name: filtered[0],
                  options: [],
                }),
              });
            }
            return;
          }}
        >
          Add Product
        </button>
      )}
    </div>
  );
}

function findNextVar(selectedVar, availableVariantOptions) {
  console.log(selectedVar, availableVariantOptions);
  const filtered = availableVariantOptions.filter((vara) => {
    console.log(vara);
    return !selectedVar.find((obj) => obj.name === vara);
  });
  console.log(filtered);
  return filtered;
}

export default Variant;
