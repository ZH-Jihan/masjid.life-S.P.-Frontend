import React, { useState } from "react";

const MySingUp = () => {
  const [selectAll, setSelectAll] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedRole, setSelectRole] = useState({
    role: "user",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setSelectRole((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    const newUser = {
      name: event.target.name.value,
      email: event.target.email.value,
      password: event.target.password.value,
      demo: event.target.password.value,
      confirmPassword: event.target.password.value,
      role: selectedRole.role,
    };
    console.log(newUser);
    

    // const respons = await CustomAxiosPost("/user/singup", newUser);

    // if (respons?.status === "Success") {
    //   setSelectAll(false);
    //   setSelectedItems([]);
    //   setSelectRole({ role: "user" });
    //   toast.success("Successfully Create User");
    // }
    // event.target.reset();
  };
    return (
      <div>
        <div class=" bg-gray-100  flex flex-col justify-center w-full">
          <form onSubmit={handleRegister}>
            <div class="w-full relative flex items-center justify-center bg-center bg-gray-50 py-4 px-4 sm:px-6 lg:px-8  bg-no-repeat bg-cover relative items-center">
              <div class="absolute opacity-60 inset-0 z-0"></div>
              <div class="w-full space-y-8 p-10 bg-white rounded-xl shadow-lg z-10">
                <div class="grid  gap-8 grid-cols-1">
                  <div class="flex flex-col ">
                    <div class="form">
                      <div class="md:grid grid lg:grid-cols-2 gap-4 w-full text-xs">
                        <div class="form-control  mb-3 space-y-2 w-full text-base">
                          <label class="font-semibold text-gray-600 text-xl py-2">
                            User Name
                          </label>
                          <input
                            type="text"
                            name="name"
                            required
                            class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                            placeholder="Name"
                          />
                        </div>
                        <div class="form-control  mb-3 space-y-2 w-full text-base">
                          <label class="font-semibold text-gray-600 text-xl py-2">
                            User Email
                          </label>
                          <input
                            type="email"
                            name="email"
                            required
                            class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                            placeholder="ex: demo@gmail.com"
                          />
                        </div>
                        <div class="form-control  mb-3 space-y-2 w-full text-base">
                          <label class="font-semibold text-gray-600 text-xl py-2">
                            User Password
                          </label>
                          <input
                            type="text"
                            name="password"
                            required
                            class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                            placeholder="password"
                          />
                        </div>
                        <div class="form-control  mb-3 space-y-2 w-2/4 text-base">
                          <label class="font-semibold text-gray-600 py-2">
                            User Role
                          </label>
                          <select
                            autocomplete="None"
                            onChange={onChange}
                            value={selectedRole.role}
                            class="appearance-none text-base block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                            type="text"
                            required
                            name="role"
                          >
                            <option value={"student"}>Student</option>
                            <option value={"donar"}>Donar</option>
                          </select>
                        </div>
                      </div>
                      <div class="form-control mt-5 text-right md:space-x-3 md:block flex flex-col-reverse">
                        <button
                          type="submit"
                          class="mb-2 md:mb-0 bg-green-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-green-500"
                        >
                          Create User
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
};

export default MySingUp;
