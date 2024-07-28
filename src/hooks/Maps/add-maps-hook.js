import  { useEffect, useState } from 'react'
import { notify } from '../../Components/uitlity/useNotification';
import { useDispatch, useSelector } from 'react-redux';
import { addMapAction, getAdminUnitsFromLocality, getAllStatesAction, getLocalitiesFromStates } from '../../redux/actions/MapsAction';

const AddMapsHook = () => {
  const token = localStorage.getItem("token")
  const dispatch = useDispatch()
  const [loading,setLoading] = useState(true)
    const [stateName, setStateName] = useState('');
    const [stateID, setStateID] = useState();
    const [locationName, setlocationName] = useState('');
    const [locationID, setlocationID] = useState();
    const [adminName, setAdminName] = useState('');
    const [adminID, setAdminID] = useState();
    const [showAdd, setShowAdd] = useState(false); 

    const onChangStateName= async (e) => {
      const formData= new FormData()
      formData.append("token", token)
      setStateName(e.target.value)
      setStateID(e.target.options[e.target.selectedIndex].id)
      await dispatch(getLocalitiesFromStates(e.target.options[e.target.selectedIndex].id,formData))
   }

    const onChangLocationName=async (e) => {
      const formData= new FormData()
      formData.append("token", token)
      setlocationName(e.target.value)
      setlocationID(e.target.options[e.target.selectedIndex].id)
      await dispatch(getAdminUnitsFromLocality(e.target.options[e.target.selectedIndex].id,formData))
   }
    const onChangAdminName= (e) => {
      setAdminName(e.target.value)
      setAdminID(e.target.options[e.target.selectedIndex].id)
   }

    const handleCloseAdd = () => setShowAdd(false);
    const handleShowAdd = async () => {
      setShowAdd(true);
      const formData= new FormData()
      formData.append("token", token)
      await dispatch(getAllStatesAction(formData))
    }

    const states = useSelector(state => state.MapsReducer.allStates)
    const locations = useSelector(state => state.MapsReducer.allLocations)
    const adminUnits = useSelector(state => state.MapsReducer.allAdminUnits)

    let allStates = []
    try {      
       if(states.data){
          allStates = states.data
         }else{
            allStates= []
         }
      } catch (error) {}

      let allLocations = []
    try {      
       if(locations.data){
         allLocations = locations.data
       }else{
         allLocations= []
        }
    } catch (error) {
       
    }
      let allAdminUnits = []
    try {      
       if(adminUnits.data){
         allAdminUnits = adminUnits.data
       }else{
         allAdminUnits= []
        }
    } catch (error) {
       
    }

 const handleAdd = async(e) => { 
    setShowAdd(false) 
   e.preventDefault();

          const formData= new FormData()
          formData.append("token", token)
          formData.append("state_id", stateID)
          formData.append("locality_id", locationID)
          formData.append("admin_unit_id", adminID)
          setLoading(true)
           await dispatch(addMapAction(formData)) 
          setLoading(false)
         } 
         const res = useSelector(state => state.MapsReducer.addMap)

  useEffect(() => {
  if(loading === false){
      if(res.status === true){
        notify(res.msg, "success") 
        setTimeout(() => {
          window.location.reload(false)
      }, 2000);
      }else {
        notify(res.msg, "error")
      }
  }
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [loading])

  return [ handleAdd, showAdd,handleCloseAdd,handleShowAdd,onChangAdminName,stateName,
    onChangStateName,locationName,onChangLocationName,adminName,allStates,allLocations,allAdminUnits
   ]
}

export default AddMapsHook