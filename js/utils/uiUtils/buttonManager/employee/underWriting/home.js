import { BUTTON } from '../../../../../../config/employee/underWriting/underWriting.js';
import { viewInformationListAll,informationType } from '../../../tableRenderer/employee/underWriting/informationList.js';
import {initialButtons} from "../../../common/buttonUtils.js";

export const renderButtons = () => {
  initialButtons(BUTTON.TASK.EMPLOYEE.UNDERWRITING.HOME, underWritingTaskMapper);
};

const viewRequestingContract = () => {
  viewInformationListAll(informationType.REVIEW_ACQUISITION);
}

const applyCoperation = () => {
  viewInformationListAll(informationType.APPLY_COPERATION);
}

const applyReinsurance = () => {
  viewInformationListAll(informationType.APPLY_REINSURANCE);
}

const underWritingTaskMapper = {
  // key: value -> constants의 키 이름: 함수
  REVIEW_ACQUISITION: viewRequestingContract,
  APPLY_COPERATION: applyCoperation,
  APPLY_REINSURANCE: applyReinsurance
}
