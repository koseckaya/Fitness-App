import { FC } from "react";
import { Toggle } from "../Toggle";
import { ThemeContext } from "../utils/contexts";
import { themes } from "../utils/contexts/ThemeContext";

export type Props = {
    className: string;
};

const ThemeChange: FC<Props> = ({className}: Props) => (
    <ThemeContext.Consumer>
        {({ theme, setTheme }) => (
            <Toggle
                onChange={() => {
                    if (theme === themes.light && setTheme) setTheme(themes.dark);
                    if (theme === themes.dark && setTheme) setTheme(themes.light);
                }}
                value={theme === themes.dark}
                className={className}
            />
        )}
    </ThemeContext.Consumer>
);

export default ThemeChange;
