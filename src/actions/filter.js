export const FILTER_DATE = 'FILTER_DATE';
export const FILTER_PRICE = 'FILTER_PRICE';
export const FILTER_CATEGORY = 'FILTER_CATEGORY';
export const FILTER_CONDITION = 'FILTER_CONDITION';


export const filterDate = (filter) => { //1 = old to new (asc) .. 2 = new to old (desc)
  return function(dispatch) {
    dispatch({
      type : FILTER_DATE,
      dateFilter : filter
    })
  }
}

//1 = low to high (asc) .. 2 = high to low (desc)
export const filterPrice = (filter) => {
  console.log('ACTION FIRE', filter);
  return function(dispatch) {
    dispatch({
      type : FILTER_PRICE,
      priceFilter : filter
    });
  }
}

export const filterCategory = (filter) => { // 1 = vehicles 2 = appliances 3 = computers 4 = furn
  return function(dispatch) {
    dispatch({
      type : FILTER_CATEGORY,
      categoryFilter : filter
    })
  }
}

export const filterCondition = (filter) => { // {...} 1 = new 2 = good 3 = fair 4 = worn
  return function(dispatch) {
    dispatch({
      type : FILTER_CONDITION,
      conditionFilter : filter
    })
  }
}