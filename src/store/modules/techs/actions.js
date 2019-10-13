export function addTech(tech){
  return {
    type: 'ADD_TECH',
    payload: { tech }
  }
}

export function getTechsSuccess(tech){
  return {
    type: 'GET_TECHS_SUCCESS',
    payload: { tech }
  }
}

export function getTechsFailure(){
  return {
    type: 'GET_TECHS_FAILURE',
  }
}