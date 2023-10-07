export function filterData(searchText, restaurants) {
  const searchedRestaurant = restaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase().includes(searchText.toLowerCase())
  );
  return searchedRestaurant;
}
