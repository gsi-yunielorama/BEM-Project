import { useCards } from "../hooks/useCards";
import type { CardFilterType } from "../types/CardTypes";

type ExtensionButtonProps = {
    title: string;
};

const ExtensionButton = ({ title }: ExtensionButtonProps) => {
    const { setFilterMode, filter } = useCards();
    const onFilterMode = () => setFilterMode(title.toLowerCase() as CardFilterType);
    const isFilterActive: boolean = filter === title.toLowerCase() as CardFilterType;
    return <button className={`font-normal dark:bg-Neutral_700 bg-Neutral_0 ${isFilterActive ? 'bg-Red_500 dark:bg-Red_500 hover:bg-Red_500' : 'bg-Neutral_0 hover:bg-Neutral_100 dark:hover:bg-Neutral_600'} focus:text-Neutral_0  pl-4 pr-4 pt-2 pb-2 rounded-3xl dark:text-Neutral_0 text-Neutral_900`} onClick={onFilterMode}>
        {title}
    </button>
}

export default ExtensionButton;