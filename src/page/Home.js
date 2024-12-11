import Cookies from "js-cookie";
import React from "react";
import { Helmet } from "react-helmet";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { getUserRole, isAuthenticated } from "./auth/Auth";
import menuList from "./Util/data/MenuList.json";
import FontWosamIcon from "./Util/FontWosamIcon";

const Home = () => {
  const navigate = useNavigate();
  const checkUser = isAuthenticated();
  const userData = getUserRole();
  console.log(userData);

  const filterMenuUserAccessByRole = (value) => {
    let filterReportrole;
    if (userData?.role) {
      filterReportrole = value?.filter((el) => el.role.includes(userData?.role));
    }
    return filterReportrole;
  };
  
  const onClickHandelar = () => {
    if (!checkUser) {
      navigate("/login")
    } else {
      Cookies.remove("accessToken")
    localStorage.removeItem('authToken')
    navigate("/")
    }
  };
  return (
    <div>
      <div>
        <div>
          <nav class="bg-white border-b border-gray-200 fixed z-30 w-full">
            <div class="px-2 py-3 lg:px-5 lg:pl-3">
              <div class="flex items-center justify-between">
                <div class="flex items-center justify-start">
                  <button
                    id="toggleSidebarMobile"
                    aria-expanded="true"
                    aria-controls="sidebar"
                    class="btn btn-ghost lg:hidden mr-2 text-gray-600 hover:text-gray-900 cursor-pointer p-2 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 rounded"
                  >
                    <svg
                      id="toggleSidebarMobileHamburger"
                      class="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <svg
                      id="toggleSidebarMobileClose"
                      class="w-6 h-6 hidden"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                  <a
                    href="/"
                    class="text-xl font-bold flex items-center lg:ml-2.5"
                  >
                    <img
                      src="https://i.ibb.co.com/qnbtHc5/masjid-life-logo.jpg"
                      class="h-12 mr-2"
                      alt="Windster Logo"
                    />
                    <span class="self-center whitespace-nowrap">Masjid.Life <br/>  Education Portal</span>
                  </a>
                </div>

                <div class="flex items-center">
                  <button
                    id="toggleSidebarMobileSearch"
                    type="button"
                    class="lg:hidden text-gray-500 hover:text-gray-900 hover:bg-gray-100 p-2 rounded-lg"
                  >
                    <span class="sr-only">Search</span>
                    
                  </button>
                  <div>
                  <button className="btn btn-ghost" onClick={onClickHandelar}>
                      {checkUser ? "Log Out" : "LogIN"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          <div class="flex overflow-hidden bg-white pt-16">
            <aside
              id="sidebar"
              class="fixed hidden z-20 h-full top-0 left-0 pt-16 flex lg:flex flex-shrink-0 flex-col  transition-width duration-75"
              aria-label="Sidebar"
            >
              <div class="relative flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white pt-0">
                <div class="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                  <div className="dropdown dropdown-open">
                    <ul class="space-y-2 pb-2">
                      <li>
                        <form action="#" method="GET" class="lg:hidden">
                          <label for="mobile-search" class="sr-only">
                            Search
                          </label>
                          <div class="relative">
                            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <svg
                                class="w-5 h-5 text-gray-500"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                              </svg>
                            </div>
                            <input
                              type="text"
                              name="email"
                              id="mobile-search"
                              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-600 focus:ring-cyan-600 block w-full pl-10 p-2.5"
                              placeholder="Search"
                            />
                          </div>
                        </form>
                      </li>
                      {userData && <details className="mx-8 " open>
                        <summary>Dashbord</summary>
                        <ul>
                          {filterMenuUserAccessByRole(menuList)?.map((report) => (
                            <li>
                              <Link
                                to={report.navigate}
                                class="text-base text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"
                              >
                                <FontWosamIcon name={report.name} />
                                <span class="ml-3">{report.name}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </details>}
                      {/* {userDat.role === "admin" || userDat.role === "editor" ?
                        <details className="mx-8" open>
                        <summary>Entry Data For Report</summary>
                        <ul>
                          {filterUserAccess(addData)?.map((report) => (
                            <li>
                              <a
                                href={report.navigate}
                                class="text-base text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"
                              >
                                <FontWosamIcon name={report.name} />
                                <span class="ml-3">{report.name}</span>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </details>:""} */}
                    </ul>
                  </div>
                </div>
              </div>
            </aside>
            {/* <div
              class="bg-gray-900 opacity-50 hidden fixed inset-0 z-10"
              id="sidebarBackdrop"
            ></div> */}
            <div
              id="main-content"
              class="h-full w-full pt-8 bg-gray-50 relative overflow-y-aut lg:ml-60 lg:mr-2"
            >
              <Outlet></Outlet>
            </div>
          </div>
        </div>

        {/* 2nd Way to add script link in react file  */}
        <Helmet>
          <script
            async
            defer
            src="https://buttons.github.io/buttons.js"
          ></script>
          <script src="https://demo.themesberg.com/windster/app.bundle.js"></script>
        </Helmet>
      </div>
    </div>
  );
};

export default Home;
