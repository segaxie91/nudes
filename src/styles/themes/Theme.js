import ThemeDefault from './theme-default';
import ThemeBlack from './theme-black';
import ThemeViolet from './theme-violet';

const Theme = {

    themes: {
        default: ThemeDefault,
        black: ThemeBlack,
        violet: ThemeViolet,
    },

    set: function(theme) {
        Object.assign(this, theme);
    },

};

Theme.set(ThemeDefault);

export default Theme;
