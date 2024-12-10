import DarkModeButton from "./DarkModeButton";
const NewFooter = () =>(
    <footer className="mt-auto w-full max-w-[100rem] py-5 px-4 sm:px-6 lg:px-8 mx-auto bg-white">
      <div className="pt-5 border-t border-gray-200 dark:border-neutral-700">
        <div className="sm:flex sm:justify-between sm:items-center">
          <div className="flex flex-wrap items-center gap-3">
            <div className="space-x-4 text-sm">
              <DarkModeButton/>
              <a className="inline-flex gap-x-2 text-[#003865] hover:text-gray-800 focus:outline-none focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200" href="#">Privacy</a>
              <a className="inline-flex gap-x-2 text-[#003865] hover:text-gray-800 focus:outline-none focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200" href="#">Status</a>
              <p className="inline-flex gap-x-2 text-[#003865] hover:text-gray-800 focus:outline-none focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200">&copy; {new Date().getFullYear()}  Aurore. All rights reserved.</p>
            </div>
          </div>
    
          <div className="flex flex-wrap justify-between items-center gap-3">
                <p className="mt-1 text-xs sm:text-sm text-[#003865] dark:text-neutral-400">
                     Api
                </p>
                <p className="mt-1 text-xs sm:text-sm text-[#003865] dark:text-neutral-400">
                    Carrers
                </p>
                <p className="mt-1 text-xs sm:text-sm text-[#003865] dark:text-neutral-400">
                    Privacy Policy
                </p>
                <p className="mt-1 text-xs sm:text-sm text-[#003865] dark:text-neutral-400">
                    Cookie Policy
                </p>
          </div>

        </div>
      </div>
    </footer>
    )

export default NewFooter;