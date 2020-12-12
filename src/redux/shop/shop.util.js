const COLLECTION_ID_MAP = {
    hats: 1,
    sneakers: 2,
    jackets: 3,
    womens: 4,
    mens: 5
}

export const getItemsByCategoryName = (collections, name) => {
  const id =  COLLECTION_ID_MAP[name];
  console.log(id);
  return collections.find(collection => collection.id === id);
};