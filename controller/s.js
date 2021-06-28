$reactTemp0.reduce((acc, v) => {
  if (v.name === 'vendor') {
    acc.push(
      v.condition === 'equalTo'
        ? { vendor: { $eq: v.value } }
        : v.condition === 'notEqualTo'
        ? { vendor: { $ne: v.value } }
        : v.condition === 'startWith'
        ? { vendor: { $regex: new RegExp(`^${v.value}`) } }
        : v.condition === 'endsWith'
        ? { vendor: { $regex: new RegExp(`${v.value}$`) } }
        : v.condition === 'contain'
        ? { vendor: { $regex: new RegExp(v.value) } }
        : {}
    );
  } else if (v.name === 'price') {
    acc.push(
      v.condition === 'equalTo'
        ? { price: { $eq: v.value } }
        : v.condition === 'notEqualTo'
        ? { price: { $ne: v.value } }
        : v.condition === 'greaterTo'
        ? { price: { $gt: v.value } }
        : v.condition === 'lessThan'
        ? { price: { $lt: v.value } }
        : {}
    );
  } else {
    acc.push({ tags: { $in: [v.value] } });
  }

  return acc;
}, []);
