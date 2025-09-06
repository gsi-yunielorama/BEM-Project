import { useCards } from "../hooks/useCards";

type ExtensionCardProps = {
    id: string;
    logo: string;
    name: string;
    description: string;
    isActive: boolean;
};

const ExtensionCard = ({ id, name, description, logo, isActive }: ExtensionCardProps) => {
    const { deleteCard, toggleCardStatus } = useCards();
    const onDeleteCard = () => deleteCard(id);
    const onToggleStatusCard = () => toggleCardStatus(id);

    return <div className="text-start flex flex-col border border-solid border-Neutral_300 dark:border-Neutral_600 justify-between bg-Neutral_0 dark:bg-Neutral_800 text-white p-4 rounded-3xl gap-8">
        <div className="flex gap-4">
            <img src={logo}></img>
            <div className="flex flex-col mt-3 gap-1">
                <h1 className="text-xl font-semibold text-Neutral_900 dark:text-Neutral_0">{name}</h1>
                <p className="text-Neutral_600 dark:text-Neutral_0 font-normal">{description}</p>
            </div>
        </div>
        <div className="flex flex-row justify-between">
            <button className="font-normal border border-solid border-Neutral_300 dark:border-Neutral_600 bg-Neutral_0 dark:bg-Neutral_800 dark:hover:bg-Red_500 hover:bg-Red_500 hover:border-Red_500 dark:hover:border-Neutral_900 dark:hover:text-Neutral_900 hover:text-Neutral_0 focus:border-none focus:bg-Neutral_300 dark:focus:bg-Neutral_600 focus:text-Neutral_900 dark:focus:text-Neutral_0 focus:outline focus:outline-offset-4 focus:outline-Red_500 focus:outline-2 pl-4 pr-4 pt-2 pb-2 rounded-3xl text-Neutral_900 dark:text-Neutral_0" onClick={onDeleteCard}>Remove</button>
            <label className="inline-flex items-center cursor-pointer ">
                <input type="checkbox" className="sr-only peer" checked={isActive} onChange={onToggleStatusCard} />
                <div className="relative w-11 h-6 bg-Neutral_300 dark:bg-Neutral_600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-Neutral_0 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-Neutral_0 dark:after:border-Neutral_600 after:border-Neutral_300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-Red_500"></div>
            </label>
        </div>
    </div>
}

export default ExtensionCard;