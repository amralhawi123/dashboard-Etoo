import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editMapAction, getAdminUnitsFromLocality, getAllStatesAction, getLocalitiesFromStates, getOneMap } from '../../redux/actions/MapsAction'
import AddMapsHook from './add-maps-hook'
import { notify } from '../../Components/uitlity/useNotification'

const EditMapsHook = () => {
  const token = localStorage.getItem("token")
  const dispatch = useDispatch()
  const [loading,setLoading] = useState(true)
  const [id, setId] = useState()
  const [LoadingData, setLoadingData] = useState(true)
    const [showEdit, setShowEdit] = useState(false);
    const [statesNameEdit, setStateNameEdit] = useState('');
    const [localityNameEdit, setLocalityNameEdit] = useState('');
    const [adminNameEdit, setAdminNameEdit] = useState('');
    const [stateID, setStateID] = useState();
    const [locationID, setlocationID] = useState();
    const [adminID, setAdminID] = useState();
    const onChangStateNameEdit= async (e) => {
      const formData= new FormData()
      formData.append("token", token)
      setStateNameEdit(e.target.value)
      setStateID(e.target.options[e.target.selectedIndex].id)
      await dispatch(getLocalitiesFromStates(e.target.options[e.target.selectedIndex].id,formData))
   }

    const onChangLocationNameEdit=async (e) => {
      const formData= new FormData()
      formData.append("token", token)
      setLocalityNameEdit(e.target.value)
      setlocationID(e.target.options[e.target.selectedIndex].id)
      await dispatch(getAdminUnitsFromLocality(e.target.options[e.target.selectedIndex].id,formData))
   }
    const onChangAdminNameEdit= (e) => {
      setAdminNameEdit(e.target.value)
      setAdminID(e.target.options[e.target.selectedIndex].id)
   }

    const handleCloseEdit = () => setShowEdit(false);
    const handleShowEdit = async(e) => {
      setShowEdit(true);
      setId(e)
      const formData= new FormData()
      formData.append("token", token)
      setLoadingData(true)
      await dispatch(getOneMap(e,formData))
      await dispatch(getAllStatesAction(formData)) 
      setLoadingData(false)
    }
    const states = useSelector(state => state.MapsReducer.allStates)
    const locations = useSelector(state => state.MapsReducer.allLocations)
    const adminUnits = useSelector(state => state.MapsReducer.allAdminUnits)

    let allStatesEdit = []
    try {      
       if(states.data){
        allStatesEdit = states.data
         }else{
          allStatesEdit= []
         }
      } catch (error) {}

      let allLocationsEdit = []
    try {      
       if(locations.data){
        allLocationsEdit = locations.data
       }else{
        allLocationsEdit= []
        }
    } catch (error) {}

      let allAdminEdit = []
    try {      
       if(adminUnits.data){
        allAdminEdit = adminUnits.data
       }else{
        allAdminEdit= []
        }
    } catch (error) {
    }
    const oneMap = useSelector(state => state.MapsReducer.oneMap)

      
    useEffect(() => {
      if(LoadingData === false){
        if(oneMap.Map){
          setStateNameEdit(oneMap.Map.State_Name)   
          setLocalityNameEdit(oneMap.Map.Location_Name)   
          setAdminNameEdit(oneMap.Map.Admin_Unit_Name)   
        }
      }
    }, [LoadingData]);

   
   const handleEdit= async(e) => {
        setShowEdit(false) 
        e.preventDefault();

        const formData= new FormData()
        formData.append("token", token)
        formData.append("state_id", stateID)
        formData.append("locality_id", locationID)
        formData.append("admin_unit_id", adminID)
        setLoading(true)
         await dispatch(editMapAction(id,formData)) 
        setLoading(false)
       } 
       const res = useSelector(state => state.MapsReducer.editMap)

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

  return [ handleEdit, showEdit,handleCloseEdit,handleShowEdit ,
    statesNameEdit, adminNameEdit,localityNameEdit,onChangStateNameEdit,
    onChangLocationNameEdit,onChangAdminNameEdit,allStatesEdit,allLocationsEdit,allAdminEdit
  ]
}

export default EditMapsHook