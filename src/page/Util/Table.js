import React from "react";
import { useNavigate } from "react-router-dom";

const Table = ({
  data,
  tableHead,
  functions,
  hover,
  striped,
  buttonName = null,
  buttonNavigation = null,
}) => {
  const navigate = useNavigate()

  return (
    <div>
      <div class="flex flex-col w-full">
        <div class="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
          <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div class="overflow-hidden">
              <table class="min-w-full">
                <thead
                  class="bg-amber-200 border-b"
                  style={{ position: "sticky", top: "0" }}
                >
                  <tr>
                    {tableHead.map((head) => (
                      <th
                        scope="col"
                        class="text-sm font-larg text-gray-900 px-2 py-4 text-left"
                      >
                        {head.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {data.map((el) => (
                    <tr
                      className={` ${hover && "hover"} ${striped && "striped"}`}
                    >
                      <td class="px-2 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {el.studentName}
                      </td>
                      <td class="px-2 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {el.totalDonate}
                      </td>
                      <td class="px-2 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {el.totalRecovery}
                      </td>
                      <td class="px-2 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {el.totalDonate - el.totalRecovery}
                      </td>
                      <td class=" py-1 whitespace-nowrap text-sm font-medium text-gray-900">
                        <button onClick={()=>navigate("/details-view")} className="rounded-2xl border-2 border-red-400 px-4 py-1">
                          Details
                        </button>
                      </td>
                      {/* 
                        // This is the apply for when all field is available database results

                        {tableHead.map((col) => (
                        <td class="px-2 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {el[col.fieldName]}
                        </td>
                      ))} */}
                    </tr>
                  ))}{" "}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
