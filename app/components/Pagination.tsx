import { LeftArrow } from "@/app/components/Icons/LeftArrow";
import { RightArrow } from "@/app/components/Icons/RightArrow";

interface PaginationProps {
    totalNumberOfPeople: number;
    currentPage: number;
    peoplePerPage: number;
    setCurrentPage: (pageNumber: number) => void;
    setPeoplePerPage: (peoplePerPage: number) => void;
}

export const Pagination = ({ totalNumberOfPeople, currentPage, peoplePerPage, setCurrentPage, setPeoplePerPage }: PaginationProps) => {
    const numberOfPages = Math.ceil(totalNumberOfPeople / peoplePerPage);
    const hasNext = currentPage < numberOfPages;
    const hasPrevious = currentPage !== 1;

    return (
        <div className="w-full flex items-center justify-between border-t border-gray-200 px-4 py-3 sm:px-6">
            <div className="flex flex-1 items-center justify-between">
                <div>
                    <p className="flex items-center space-x-2 text-sm text-gray-200">
                        <span>Showing</span>
                        <input
                            className="block w-16 rounded-md border-0 py-1.5 px-2 bg-transparent text-white ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            type="number"
                            min={10}
                            max={numberOfPages}
                            value={peoplePerPage}
                            onChange={(e) =>
                                setPeoplePerPage(e.target.valueAsNumber)
                            }
                        />
                        <span>of</span>
                        <span className="font-medium">{totalNumberOfPeople}</span>
                        <span>results</span>
                    </p>
                </div>
                <div>
                    <nav className="isolate flex items-center space-x-2 rounded-md shadow-sm" aria-label="Pagination">
                        <button className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-700 focus:z-20 focus:outline-offset-0" disabled={!hasPrevious} onClick={() => setCurrentPage(currentPage - 1)}>
                            <span className="sr-only">Previous</span>
                            <LeftArrow />
                        </button>
                        <span className="text-sm text-gray-400">Page</span>
                        <input
                            className="block w-16 rounded-md border-0 py-1.5 px-2 bg-transparent text-white ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            type="number"
                            min={1}
                            max={numberOfPages}
                            value={currentPage}
                            onChange={(e) =>
                                setCurrentPage(e.target.valueAsNumber)
                            }
                        />
                        <span className="text-sm text-gray-400">
                            of {numberOfPages}
                        </span>
                        <button className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-700 focus:z-20 focus:outline-offset-0" disabled={!hasNext} onClick={() => setCurrentPage(currentPage + 1)}>
                            <span className="sr-only">Next</span>
                            <RightArrow />
                        </button>
                    </nav>
                </div>
            </div>
        </div>
    )
}
