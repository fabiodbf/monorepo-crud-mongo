export function getNewId() {
  return (
    Date.now().toString(36) + Math.random().toString(36).substring(2, 10)
  ).toUpperCase();
}

export function reOrder(orderProperty, collection) {
  if (!Array.isArray(collection)) {
    throw new Error("The collection must be an array.");
  }

  const sortedCollection = collection.sort((a, b) => {
    if (a[orderProperty] === undefined || b[orderProperty] === undefined) {
      throw new Error(
        `Property "${orderProperty}" is not found in the collection items.`
      );
    }

    return a[orderProperty] - b[orderProperty];
  });

  sortedCollection.forEach((item, index) => {
    item[orderProperty] = index + 1;
  });

  return sortedCollection;
}

export function getOrder(orderProperty, collection) {
  if (!Array.isArray(collection)) {
    throw new Error("The collection must be an array.");
  }

  const highestOrder = collection.reduce((max, item) => {
    const value = item[orderProperty];
    if (Number.isInteger(value)) {
      return Math.max(max, value);
    }
    return max;
  }, 0);

  return highestOrder + 1;
}
