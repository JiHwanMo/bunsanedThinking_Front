import {BUTTON, INFORMATION_TYPE} from '../../../../../../config/employee/contractManagement/contractManagement.js';
import { viewInformationList } from '../../../tableRenderer/employee/contractManagement/informationList.js';
import {initialButtons} from "../../../common/buttonUtils.js";

const viewDefaultContract = () => {
  viewInformationList(INFORMATION_TYPE.DEFAULT_CONTRACT);
}

const viewRecontract = () => {
  viewInformationList(INFORMATION_TYPE.RECONTRACT);
}

const viewEndorsement = () => {
  viewInformationList(INFORMATION_TYPE.ENDORSEMENT);
}

const viewRevival = () => {
  viewInformationList(INFORMATION_TYPE.REVIVAL);
}

const viewTermination = () => {
  viewInformationList(INFORMATION_TYPE.TERMINATION);
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
