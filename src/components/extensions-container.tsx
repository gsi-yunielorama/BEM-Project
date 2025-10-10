import { useCards } from "../hooks/useCards";
import ExtensionCard from "./extension-card";

const ExtensionsContainer = () => {
    const { filteredCards } = useCards();
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {filteredCards.map(({ _id, name, description, logo, isActive }) => <ExtensionCard key={_id} {...{ _id, name, description, logo, isActive }} />)}
    </div>

}

export default ExtensionsContainer; 