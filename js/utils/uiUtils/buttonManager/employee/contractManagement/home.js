import { BUTTON } from '../../../../../../config/employee/contractManagement/contractManagement.js';
import { viewInformationList } from '../../../tableRenderer/employee/contractManagement/informationList.js';
import { informationType } from '../../../tableRenderer/employee/contractManagement/informationList.js';
import {initialButtons} from "../../../common/buttonUtils.js";

const viewDefaultContract = () => {
  viewInformationList(informationType.DEFAULT_CONTRACT);
}

const viewRecontract = () => {
  viewInformationList(informationType.RECONTRACT);
}

const viewEndorsement = () => {
  viewInformationList(informationType.ENDORSEMENT);
}

const viewRevival = () => {
  viewInformationList(informationType.REVIVAL);
}

const viewTermination = () => {
  viewInformationList(informationType.TERMINATION);
}

const contractManagementTaskMapper = {
  HOME: {
    DEFAULT_CONTRACT: viewDefaultContract,
    RECONTRACT: viewRecontract,
    ENDORSEMENT: viewEndorsement,
    REVIVAL: viewRevival,
    TERMINATION: viewTermination
  }
}

export const renderButtons = () => {
  initialButtons(BUTTON.TASK.CONTRACT_MANAGEMENT.HOME, contractManagementTaskMapper.HOME);
}
