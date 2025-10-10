import { useState, type FormEvent } from "react";
import { useCards } from "../hooks/useCards";
import ModalExtention from '../components/ext-modal'

const ExtentionForm = () => {
    const [extention, setExtention] = useState({ name: "", description: "" });
    const { createCard, toggleOpenCreate } = useCards();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => setExtention({ ...extention, [e.target.name]: e.target.value });
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        toggleOpenCreate();
        e.preventDefault();
        createCard(extention);
    }

    return <ModalExtention title="Add New Extention">
        <form className="flex flex-col gap-4 m-4 align-center" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" onChange={handleChange} className="border rounded-xl p-1 border-s-From_Dark_Gradient dark:bg-Neutral_100"/>
            <textarea name="description" placeholder="Description" rows={3} onChange={handleChange} className="border rounded-xl p-1 border-s-From_Dark_Gradient dark:bg-Neutral_100"/>
            <button className="border rounded-xl p-1 border-s-From_Dark_Gradient hover:bg-Neutral_600 hover:text-Neutral_0" type="submit">Add Extension</button>
        </form>
    </ModalExtention>
}

export default ExtentionForm;