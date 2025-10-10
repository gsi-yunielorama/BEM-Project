import { useCards } from "../hooks/useCards";
import ExtensionButton from "./ext-button";

const ExtensionsTitleFilter = () => {
    const { toggleOpenCreate } = useCards()
    return <div className="flex flex-col gap-5 mb-5 md:flex-row md:justify-between md:mt-8 md:mb-8">
        <h1 className="font-bold text-3xl dark:text-Neutral_0 text-Neutral_900">Extensions List</h1>
        <button className="flex items-center justify-center border border-solid border-Neutral_300 dark:border-Neutral_600 gap-2 rounded-xl w-48 dark:bg-Neutral_700 bg-Neutral_100 p-1 hover:bg-Neutral_300 dark:hover:bg-Neutral_600" onClick={toggleOpenCreate}>
            <h2 className="font-bold dark:text-Neutral_0 text-Neutral_900">Add Extention</h2>
            <h1 className="font-bold text-2xl pb-1 dark:text-Neutral_0 text-Neutral_900">+</h1>
        </button>
        <div className="flex flex-row gap-4 justify-center md:gap-2">
            <ExtensionButton title="All" />
            <ExtensionButton title="Active" />
            <ExtensionButton title="Inactive" />
        </div>
    </div>
}

export default ExtensionsTitleFilter;