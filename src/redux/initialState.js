import { defaultStyles, defaultTitle } from "../constants"
import { clone } from "../core/utils"

const defaultState = {
    title: defaultTitle,
    rowState: {},
    colState: {},
    dataState: {},
    stylesState: {},
    currentText: '',
    currentStyles: defaultStyles


}

const normasize = state => ({
    ...state,
    currentStyles: defaultStyles,
    currentText: ''
})

export function normalizeInitialState(state) {
    return state ? normasize(state) : clone(defaultState)
}