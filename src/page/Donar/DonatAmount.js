import React, { useState } from "react";
import toast from "react-hot-toast";
import CustomAxiosPost from "../Util/hooks/CostomAxiosProst";
import useGetData from "../Util/hooks/getData";
const DonatAmount = () => {
  const { data: students } = useGetData("/users/get-student-user");
  const [selected, setselected] = useState({
    selectedId: "",
    wayOfTransaction: "",
  });
  const onChange = (e) => {
    const { name, value } = e.target;
    setselected((prev) => ({ ...prev, [name]: value }));
  };

  const HandleDonatePost = async (event) => {
    event.preventDefault();
    const newData = {
      student: selected.selectedId,
      amount: event.target.amount.value,
      donateBy: selected.wayOfTransaction,
      transactionId: event.target.transcationId.value,
    };

    const response = await CustomAxiosPost("/transaction", newData)
    if (response?.message === "Success") {
      setselected({});
      toast.success("Successfully Submited Donation Amount");
      event.target.reset();
    }
    
  };
  return (
    <div>
      <div class="flex items-center justify-center mt-4">
        <div class="mx-auto w-full max-w-[700px] border rounded-xl shadow-xl p-8">
          <h1 className="font-bold text-3xl text-center mb-8">
            Submit Donation Amount
          </h1>
          <form onSubmit={HandleDonatePost}>
            <div class="-mx-3 flex flex-wrap">
              <div class="w-full px-3 sm:w-1/3">
                <label
                  for="guest"
                  class="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Select Student
                </label>
                <select
                  type="text"
                  required
                  onChange={onChange}
                  value={selected.selectedId}
                  name="selectedId"
                  class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                >
                  <option value={""}>-- Select One --</option>
                  {students.map((student) => (
                    <option value={student._id}>{student.fullName}</option>
                  ))}
                </select>
              </div>
              <div class="w-full px-3 sm:w-1/2">
                <div class="mb-5">
                  <label
                    for="lName"
                    class="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Amount
                  </label>
                  <input
                    type="Number"
                    name="amount"
                    required
                    placeholder="Amount"
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
              <div class="w-full px-3 sm:w-1/3">
                <label
                  for="guest"
                  class="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Means of transaction
                </label>
                <select
                  type="text"
                  required
                  onChange={onChange}
                  value={selected.wayOfTransaction}
                  name="wayOfTransaction"
                  class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                >
                  <option className="text-base font-medium text-[#6B7280]">
                    -- Select One --
                  </option>
                  <option className="text-base font-medium text-[#6B7280]">
                    Bikas
                  </option>
                  <option className="text-base font-medium text-[#6B7280]">
                    Nagad
                  </option>
                  <option className="text-base font-medium text-[#6B7280]">
                    Bank
                  </option>
                </select>
              </div>
              <div class="w-full px-3 sm:w-2/3">
                <label
                  for="guest"
                  class="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Transacation ID
                </label>
                <input
                  type="text"
                  required
                  name="transcationId"
                  placeholder="Transcation ID"
                  class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                class="mt-8 hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DonatAmount;
