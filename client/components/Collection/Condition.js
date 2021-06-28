import React from 'react';

function Condition(props) {
  const { collection, setCollection } = props;
  const { automatedType, allCondition, anyCondition, automated } = collection;

  const changeOption = (event, index, val) => {
    const obj = automated[index];
    obj[val] = event.target.value;
    // obj.condition = 'equalTo';

    let newAutomated = automated.map((e, i) => {
      if (i === index) {
        return obj;
      }
      return e;
    });

    setCollection({
      ...collection,
      automated: newAutomated,
    });
  };

  //   let handleValue = (event, index, val) => {
  //     const obj = automated[index];
  //     obj[val] = event.target.value;

  //     let newAutomated = automated.map((e, i) => {
  //       if (i === index) {
  //         return obj;
  //       }
  //       return e;
  //     });
  //     console.log(obj);
  //     setCollection({
  //       ...collection,
  //       automated: newAutomated,
  //     });
  //   };

  const priceCondition = ['equalTo', 'notEqualTo', 'greaterThan', 'lessThan'];

  const tagCondition = ['equalTo'];
  const vendorCondition = [
    'equalTo',
    'notEqualTo',
    'startWith',
    'endsWith',
    'contain',
  ];

  return (
    <div className="bg-white mt-2 p-8">
      <h4 className="font-bold">Condition</h4>
      <div className="flex">
        <p>product must Match:</p>
        <div className="ml-4 flex ">
          <fieldset className="mr-8">
            <input
              type="radio"
              name="condition"
              className="mr-4"
              onChange={() => {
                setCollection({
                  ...collection,
                  allCondition: true,
                  anyCondition: false,
                  automatedType: 'allCondition',
                });
              }}
              checked={allCondition}
            />
            <label>all conditions</label>
          </fieldset>
          <fieldset>
            <input
              type="radio"
              name="condition"
              className="mr-4"
              onChange={() => {
                setCollection({
                  ...collection,
                  allCondition: false,
                  anyCondition: true,
                  automatedType: 'anyCondition',
                });
              }}
              checked={anyCondition}
            />
            <label>any conditions</label>
          </fieldset>
        </div>
      </div>
      <div>
        {automated.map((elem, index) => {
          return (
            <div key={index}>
              <SelectCondition
                index={index}
                changeOption={changeOption}
                elem={elem}
                priceCondition={priceCondition}
                tagCondition={tagCondition}
                vendorCondition={vendorCondition}
                automated={automated}
              />
            </div>
          );
        })}
        <div>
          <button
            onClick={() =>
              setCollection({
                ...collection,
                automated: automated.concat({
                  ...automated[automated.length - 1],
                }),
              })
            }
          >
            create
          </button>
        </div>
      </div>
    </div>
  );
}

function Options({ array }) {
  return array.map((e) => {
    return (
      <option value={e} className="text-center">
        {e}
      </option>
    );
  });
}

function SelectCondition({
  index,
  changeOption,
  elem,
  priceCondition,
  tagCondition,
  vendorCondition,
  automated,
}) {
  console.log(elem, 'ele');
  return (
    <div className="my-4">
      <select
        onChange={(event) => {
          changeOption(event, index, 'name');
        }}
        value={elem.name}
        className="flex-30 bg-gray-200 text-center  border py-1 px-2 mr-1 border bg-gray-200"
      >
        {['vendor', 'tags', 'price'].map((name) => {
          return (
            <option value={name} className="text-center">
              {name}
            </option>
          );
        })}
      </select>
      <select
        onChange={(event) => {
          changeOption(event, index, 'condition');
        }}
        value={elem.condition}
        className="flex-30 bg-gray-200 text-center border py-1 px-2  mr-4 bg-gray-200"
      >
        {elem.name === 'tags' ? (
          <Options array={tagCondition} />
        ) : elem.name === 'vendor' ? (
          <Options array={vendorCondition} />
        ) : (
          <Options array={priceCondition} />
        )}
      </select>
      <input
        type="text"
        name="value"
        className="border py-1 px-2 rounded"
        placeholder="enter value"
        value={elem.value}
        onChange={(event) => {
          changeOption(event, index, 'value');
        }}
      />
    </div>
  );
}

export default Condition;
