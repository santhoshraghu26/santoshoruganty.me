import { AiOutlineControl } from 'react-icons/ai';
import { SanitizedThemeConfig } from '../../interfaces/sanitized-config';
import { LOCAL_STORAGE_KEY_NAME } from '../../constants';
import { skeleton } from '../../utils';
import { MouseEvent } from 'react';

/**
 * Renders a theme changer component.
 *
 * @param {Object} props - The props object.
 * @param {string} props.theme - The current theme.
 * @param {function} props.setTheme - A function to set the theme.
 * @param {boolean} props.loading - Whether the component is in a loading state.
 * @param {SanitizedThemeConfig} props.themeConfig - The theme configuration object.
 * @return {JSX.Element} The rendered theme changer component.
 */
const ThemeChanger = ({
  theme,
  setTheme,
  loading,
  themeConfig,
}: {
  theme: string;
  setTheme: (theme: string) => void;
  loading: boolean;
  themeConfig: SanitizedThemeConfig;
}) => {
  const toggleTheme = () => {
    const newTheme = theme === 'black' ? 'light' : 'black';

    document.querySelector('html')?.setAttribute('data-theme', newTheme);
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', newTheme);
    }
    setTheme(newTheme);
  };

  return (
    <div className="card overflow-visible shadow-lg compact bg-base-100">
      <div className="flex-row items-center space-x-4 flex pl-6 pr-2 py-4">
        <div className="flex-1">
          <h5 className="card-title">
            {loading ? (
              skeleton({
                widthCls: 'w-20',
                heightCls: 'h-8',
                className: 'mb-1',
              })
            ) : (
              <span className="text-base-content opacity-70">Theme</span>
            )}
          </h5>
          <span className="text-base-content text-opacity-40 capitalize text-sm">
            {loading
              ? skeleton({ widthCls: 'w-16', heightCls: 'h-5' })
              : theme === themeConfig.defaultTheme
              ? 'Default'
              : theme}
          </span>
        </div>
        <div className="flex-0">
          {loading ? (
            skeleton({
              widthCls: 'w-14 md:w-28',
              heightCls: 'h-10',
              className: 'mr-6',
            })
          ) : (
            <label className="cursor-pointer label">
              <span className="label-text mr-2">Light</span>
              <input
                type="checkbox"
                className="toggle toggle-primary"
                checked={theme === 'black'}
                onChange={toggleTheme}
              />
              <span className="label-text ml-2">Dark</span>
            </label>
          )}
        </div>
      </div>
    </div>
  );
};

export default ThemeChanger;
