import { DTBundle } from '~types/dataTypes';
import { initialState, Example, Options, Help } from './Alphanumeric.ui';
import { rowStateReducer, getMetadata } from './Alphanumeric.generate';

const bundle: DTBundle = {
	initialState,
	Example,
	Options,
	Help,
	rowStateReducer,
	getMetadata
};

export default bundle;
