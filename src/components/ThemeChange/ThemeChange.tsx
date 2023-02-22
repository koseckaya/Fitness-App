import { FC } from "react";
import { Toggle } from "../Toggle";
import { ThemeContext } from "../utils/contexts";
import { themes } from "../utils/contexts/ThemeContext";

export type Props = {};

const ThemeChange: FC<Props> = ({}: Props) => (
    <ThemeContext.Consumer>
        {({ theme, setTheme }) => (
            <Toggle
                onChange={() => {
                    if (theme === themes.light && setTheme) setTheme(themes.dark);
                    if (theme === themes.dark && setTheme) setTheme(themes.light);
                }}
                value={theme === themes.dark}
            />
        )}
    </ThemeContext.Consumer>
);

export default ThemeChange;
