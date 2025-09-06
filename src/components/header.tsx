import { useTheme } from '../hooks/useTheme'
const Header = () => {
    const { isDarkMode, toggleTheme } = useTheme();

    return <div className="text-start flex flex-row justify-between dark:bg-Neutral_800 bg-Neutral_0 text-white p-3 rounded-2xl mb-8">
        <img src="src/assets/images/logo.svg"></img>
        <button className="rounded-xl w-10 dark:bg-Neutral_700 bg-Neutral_100 p-2.5 hover:bg-Neutral_300 dark:hover:bg-Neutral_600" onClick={toggleTheme}>
            <img className="justify-self-center" src={isDarkMode ? "src/assets/images/icon-sun.svg" : "src/assets/images/icon-moon.svg"}></img>
        </button>
    </div>
}

export default Header;