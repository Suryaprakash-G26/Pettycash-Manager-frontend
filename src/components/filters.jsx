import { AppState } from "../contextapi/dataupdate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartPie, faTable } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

const FiltersandFunc = () => {
  library.add(faChartPie, faTable);

  const { showTable, setShowTable } = AppState();

  return (
    <div className="grid h-10 card rounded-box place-items-center m-1">
      <div className="flex cursor-pointer gap-2 items-center">
        <FontAwesomeIcon icon={faChartPie} />
        <h6>Chart</h6>
        <input
          type="checkbox"
          checked={showTable}
          onChange={() => setShowTable(!showTable)}
          className="toggle theme-controller"
        />
        <FontAwesomeIcon icon={faTable} />
        <h6>Table</h6>
      </div>
    </div>
  );
};

export default FiltersandFunc;
