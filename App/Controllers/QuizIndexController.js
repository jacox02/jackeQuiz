import computerQuestions from "../Model/computers";
import spaceQuestions from "../Model/space";
import generalQuestions from "../Model/generalK";
import vehicleQuestions from "../Model/vehicles";

const QIController = {
  getComputerQuestions: () => {
    return computerQuestions;
  },

  getGeneralQuestions: () => {
    return generalQuestions;
  },
  getSpaceQuestions: () => {
    return spaceQuestions;
  },
  getVehiclesQuestions: () => {
    return vehicleQuestions;
  },
};

export default QIController;
