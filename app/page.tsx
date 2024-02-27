"use client"

import { useState } from "react";
import { Table } from "@/app/components/Table";
import { Pagination } from "@/app/components/Pagination";
import { PersonModal } from "@/app/components/PersonModal";

import { Person } from "@/app/types";
import randomPeopleData from '@/app/data/random-people-data.json';

export default function Home() {
  const data = randomPeopleData.ctRoot;
  const [currentPage, setCurrentPage] = useState(1);
  const [peoplePerPage, setPeoplePerPage] = useState(10);
  const [currentPerson, setCurrentPerson] = useState<Person>();
  const [isPersonModalOpen, setIsPersonModalOpen] = useState(false);

  const indexOfLastPerson = currentPage * peoplePerPage;
  const indexOfFirstPerson = indexOfLastPerson - peoplePerPage;
  const currentPeople = data.slice(indexOfFirstPerson, indexOfLastPerson);

  const handlePersonView = (person: Person) => {
    setCurrentPerson(person);
    setIsPersonModalOpen(true);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-8 px-24">
      <Table data={currentPeople} handlePersonView={handlePersonView} />
      <Pagination
        totalNumberOfPeople={data.length}
        currentPage={currentPage}
        peoplePerPage={peoplePerPage}
        setCurrentPage={setCurrentPage}
        setPeoplePerPage={setPeoplePerPage}
      />
      {currentPerson && isPersonModalOpen && (
        <PersonModal
          onClose={() => setIsPersonModalOpen(false)}
          personData={currentPerson}
        />
      )}
    </main>
  );
}
