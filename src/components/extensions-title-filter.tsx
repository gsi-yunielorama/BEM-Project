import ExtensionButton from "./ext-button";

const ExtensionsTitleFilter = () => {
    return <div className="flex flex-col gap-5 mb-5 md:flex-row md:justify-between md:mt-8 md:mb-8">
        <h1 className="font-bold text-3xl dark:text-Neutral_0 text-Neutral_900">Extensions List</h1>
        <div className="flex flex-row gap-4 justify-center md:gap-2">
            <ExtensionButton title="All" />
            <ExtensionButton title="Active" />
            <ExtensionButton title="Inactive" />
        </div>
    </div>
}

export default ExtensionsTitleFilter;