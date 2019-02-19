import isNativePage from './isNativePage';

const isNativeSymbolsPage = (layer) =>
    isNativePage(layer) && String(layer.name()) === 'Symbols';

export default isNativeSymbolsPage;
