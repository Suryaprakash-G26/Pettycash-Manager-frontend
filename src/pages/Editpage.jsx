import { useParams } from "react-router-dom";
import { AppState } from "../contextapi/dataupdate";
import EditExpense from "../components/Editexpense";
import { useEffect } from "react";

const Editpage = () => {
  // Params
  const { id } = useParams();
  const { info,editable,setEditable,index,setIndex} = AppState();



  useEffect(() => {
    // Find editable and index
    const foundEditable = info.find((data) => data._id === id);
    const foundIndex = info.findIndex((data) => data._id === id);

    // Update state
    setEditable(foundEditable);
    setIndex(foundIndex);
  }, [id, info]);

  return (
    
    <div className="h-3/4	">
    <EditExpense id={id} edit={editable} index={index} />
    </div>
  );
};

export default Editpage;
