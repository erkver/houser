

const HANDLE_NAME = "HANDLE_NAME";
const HANDLE_ADDRESS = "HANDLE_ADDRESS";
const HANDLE_CITY = "HANDLE_CITY";
const HANDLE_STATE = "HANDLE_STATE";
const HANDLE_ZIP = "HANDLE_ZIP";
const HANDLE_IMAGE_URL = "HANDLE_IMAGE_URL";
const HANDLE_MORTGAGE_AMT = "HANDLE_MORTGAGE_AMT";
const HANDLE_MONTHLY_RENT = "HANDLE_MONTHLY_RENT";
const CLEAR_INPUTS = "CLEAR_INPUTS";


export function handleName(name) {
  return {
    type: HANDLE_NAME,
    payload: name
  };
}

export function handleAddress(address) {
  return {
    type: HANDLE_ADDRESS,
    payload: address
  };
}

export function handleCity(city) {
  return {
    type: HANDLE_CITY,
    payload: city
  };
}

export function handleState(st) {
  return {
    type: HANDLE_STATE,
    payload: st
  };
}

export function handleZip(zip) {
  return {
    type: HANDLE_ZIP,
    payload: zip
  };
}

export function handleImageUrl(image_url) {
  return {
    type: HANDLE_IMAGE_URL,
    payload: image_url
  };
}

export function handleMortgageAmt(mortgage_amt) {
  return {
    type: HANDLE_MORTGAGE_AMT,
    payload: mortgage_amt
  };
}

export function handleMonthRent(monthly_rent) {
  return {
    type: HANDLE_MONTHLY_RENT,
    payload: monthly_rent
  };
}

export function clearInputs() {
  return {
    type: CLEAR_INPUTS,
    payload: initalState
  }
}

const initalState = {
  name: "",
  address: "",
  city: "",
  st: "",
  zip: 0,
  image_url: "",
  mortgage_amt: 0,
  monthly_rent: 0
}

export default function reducer(state = initalState, action) {
  switch(action.type) {
    case HANDLE_NAME:
      return {
        ...state,
        name: action.payload
      };
    case HANDLE_ADDRESS:
      return {
        ...state,
        address: action.payload
      };
    case HANDLE_CITY:
      return {
        ...state,
        city: action.payload
      };
    case HANDLE_STATE:
      return {
        ...state,
        st: action.payload
      };
    case HANDLE_ZIP:
      return {
        ...state,
        zip: action.payload
      };
    case HANDLE_IMAGE_URL:
      return {
        ...state,
        image_url: action.payload
      };
    case HANDLE_MORTGAGE_AMT:
      return {
        ...state,
        mortgage_amt: action.payload
      };
    case HANDLE_MONTHLY_RENT:
      return {
        ...state,
        monthly_rent: action.payload
      };
    case CLEAR_INPUTS:
      return {
        ...state,
        name: action.payload.name,
        address: action.payload.address,
        city: action.payload.city,
        st: action.payload.st, 
        zip: action.payload.zip,
        image_url: action.payload.image_url,
        mortgage_amt: action.payload,
        monthly_rent: action.payload
      }
    default:
      return state;
  }
}
