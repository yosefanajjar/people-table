import { Person } from "@/app/types";
import { ExpandIcon } from "@/app/components/Icons/ExpandIcon";

interface TableProps {
    data: Person[];
    handlePersonView: (person: Person) => void;
}

export const Table = ({ data, handlePersonView }: TableProps) => (
    <table className="w-full text-left">
        <thead>
            <tr className="border-b border-slate-600 text-white">
                <th className="p-4 pl-0">Name</th>
                <th className="p-4">DOB</th>
                <th className="p-4">Email</th>
                <th className="p-4">Verified</th>
                <th className="p-4">Salary</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {data.map((person) => (
                <tr key={person._id} className="border-b last:border-b-0 border-slate-600">
                    <td className="p-4 pl-0 text-white">{person.name}</td>
                    <td className="p-4 text-slate-50">{person.dob}</td>
                    <td className="p-4 text-slate-50">{person.email}</td>
                    <td className="p-4 text-slate-50">{person.verified ? 'Yes' : 'No'}</td>
                    <td className="p-4 text-slate-50">£{person.salary}</td>
                    <td>
                        <button onClick={() => handlePersonView(person)}>
                            <ExpandIcon />
                        </button>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
)
