import { GET_ERROR , GET_ALL_MAPS, DELETE_MAPS, ADD_MAPS, GET_ALL_STATES, GET_LOCATIONS_FROM_STATES, GET_ADMAIN_FROM_LOCALITY, GET_ONE_MAP, EDIT_MAP} from "../type";

const inital = {
   maps:[],
   deleteMap:[],
   addMap:[],
   allStates:[],
   allLocations:[],
   allAdminUnits:[],
   oneMap:[],
   editMap:[],
}

const MapsReducer =(state= inital, action) => {
   switch (action.type) {
      case GET_ALL_MAPS:
         return {
            ...state,
            maps:action.payload,
         }
      case DELETE_MAPS:
         return {
            ...state,
            deleteMap:action.payload,
         }
      case ADD_MAPS:
         return {
            ...state,
            addMap:action.payload,
         }
      case GET_ALL_STATES:
         return {
            ...state,
            allStates:action.payload,
         }
      case GET_LOCATIONS_FROM_STATES:
         return {
            ...state,
            allLocations:action.payload,
         }
      case GET_ADMAIN_FROM_LOCALITY:
         return {
            ...state,
            allAdminUnits:action.payload,
         }
      case GET_ONE_MAP:
         return {
            ...state,
            oneMap:action.payload,
         }
      case EDIT_MAP:
         return {
            ...state,
            editMap:action.payload,
         }
         case GET_ERROR:
            return { 
                maps:action.payload,
            }
      default:
         return state;
   }
}

export default MapsReducer