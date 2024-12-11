import React from "react";
import { Link } from "react-router-dom";

const UnderWorking = () => {
  return (
    <div>
      <body class="bg-gray-100 dark:bg-gray-800 min-h-screen p-4">
        <div class=" flex flex-col justify-center items-center">
          <img
            src="https://www.svgrepo.com/show/426192/cogs-settings.svg"
            alt="Logo"
            class="mb-8 h-40"
          />
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-700 dark:text-white mb-4">
            This Page is under maintenance
          </h1>
          <p class="text-center text-gray-500 dark:text-gray-300 text-lg md:text-xl lg:text-2xl mb-2">
            We're working hard to improve the user experience. Stay tuned!
          </p>
          <p class="text-center text-gray-500 dark:text-gray-300 text-lg md:text-xl lg:text-2xl mb-8">
            Feel Free to visit Masjid.life and explore more portal
          </p>
          <div class="flex space-x-4">
            <Link
              to="/"
              class="bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded dark:bg-gray-700 dark:hover:bg-gray-600"
            >
              Back Home
            </Link>
            <a
              href="https://masjid.life/"
              target="blank"
              class="border-2 border-gray-800 text-black font-bold py-3 px-6 rounded dark:text-white dark:border-white"
            >
              Go Masjid.Life
            </a>
          </div>
        </div>
      </body>
    </div>
  );
};

export default UnderWorking;
