import { fetchGetCustomerByIdHandler,
          fetchGetAllInsuranceHandler} from '../../apiHandler/customer/customer.js';

export const fetchGetCustomerById = async (id) => {
  return await fetchGetCustomerByIdHandler();
};

export const fetchGetAllInsurance = async () => {
  return await fetchGetAllInsuranceHandler();
}


(async () => {
  const data = await fetchGetCustomerById(2002);
  console.log(data); // 받아온 데이터를 콘솔에 출력
})();
