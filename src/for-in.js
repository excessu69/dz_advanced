export default function orderByProps(obj, order) {
  const result = [];

  const addedKeys = new Set();

  for (const key of order) {
    if (key in obj) {
      result.push({ key, value: obj[key] });
      addedKeys.add(key);
    }
  }

  const remainingKeys = [];

  for (const key in obj) {
    if (!addedKeys.has(key)) {
      remainingKeys.push(key);
    }
  }

  remainingKeys.sort();

  for (const key of remainingKeys) {
    result.push({ key, value: obj[key] });
  }

  return result;
}
