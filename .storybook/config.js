import { configure, addDecorator } from '@storybook/react';
import {withThemesProvider} from 'storybook-addon-styled-component-theme';
import { theme } from "../src/utils"

// automatically import all files ending in *.stories.js
configure(require.context('../stories', true, /\.stories\.js$/), module);

const themes = [theme.light];
// addDecorator(withThemesProvider(themes));