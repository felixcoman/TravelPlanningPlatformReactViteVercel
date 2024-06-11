export function addChoice({country,city,region,buget,period,data}) {
    return {
      type: "ADD_CHOICE",
      payload:{country,city,region,buget,period,data}
    };
  }
  
  export function removeChoice({country,city,region,buget,period,data}) {
    return {
      type: "REMOVE_CHOICE",
      payload:{country,city,region,buget,period,data} ,
    };
  }
  
  export function returnToDefault() {
    return {
      type: "RETURN_TO_DEFAULT",
    };
  }