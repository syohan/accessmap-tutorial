import { combineReducers } from 'redux';

import getMediaType from 'utils/mediaTypes';

// Action types
import {
  LOAD_APP,
  RESIZE_WINDOW,
} from 'actions';

// Default actions
import { defaultBrowser as defaults } from './defaults';


export default function () {
    return [
	{
	    mode: "INCLINE",
	    type: "Path Incline Tutorial",
	    description: "a",
	},
	{
	    mode: "CURBRAMP",
	    type: "Curb Ramp Tutorial",
	    description: "b",
	},	

    ]
} 
