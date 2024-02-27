import { Person } from "@/app/types";
import { Modal } from "@/app/components/Modal";

interface PersonModal {
    onClose: () => void;
    personData: Person;
}

export const PersonModal = ({ onClose, personData }: PersonModal) => (
    <Modal onClose={onClose}>
        <div className="flex flex-col space-y-2">
            <span>ID: {personData._id}</span>
            <h3>Name: {personData.name}</h3>
            <p>DOB: {personData.dob}</p>
            <address>
                Address: {`${personData.address.street}, ${personData.address.town} ${personData.address.postcode}`}
            </address>
            <p>telephone: {personData.telephone}</p>
            <p>Pets: {personData.pets.join(',')}</p>
            <p>Email: {personData.email}</p>
            <p>URL: <a href={personData.url} target="_blank">{personData.url}</a></p>
            <p>Description: {personData.description}</p>
            <p>Verified: {personData.verified ? 'Yes' : 'No'}</p>
            <p>Salary: £{personData.salary}</p>
        </div>
    </Modal>
)
