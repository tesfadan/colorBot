import React, { createContext, useReducer } from 'react';
export const ColorContext = createContext();

export const initialState = {
    schemes: [
        { uid: "", colors: ["#AC57BC", "#95B9E3", "#F7CC6C"] },
        { uid: "", colors: ["#002957", "#FE562D", "#FE9147"] },
        { uid: "", colors: ["#674BCA", "#0B0BF5", "#FE552D"] },
        { uid: "", colors: ["#2B2B2B", "#366769", "#B3D5D6"] },
        { uid: "", colors: ["#021859", "#0433BF", "#F25CA2"] },
        { uid: "", colors: ["#0A1747", "#0029FA", "#8D07F6"] }
    ],
    format: 'hex',
    copied: { state: false, color: '' },
    mode: { edit: false, scheme: {}, index: '' }
};

const actions = {
    SET_SCHEMES: "SET_SCHEMES",
    SET_FORMAT: "SET_FORMAT",
    SET_COPIED: "SET_COPIED",
    SET_MODE: "SET_MODE"
}

function reducer(state, action) {
    switch (action.type) {
        case actions.SET_SCHEMES:
            return { ...state, schemes: action.value };
        case actions.SET_FORMAT:
            return { ...state, format: action.value };
        case actions.SET_COPIED:
            return { ...state, copied: action.value };
        case actions.SET_MODE:
            return { ...state, mode: action.value };
    }
}

export function Provider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const value = {
        schemes: state.schemes,
        format: state.format,
        copied: state.copied,
        mode: state.mode,
        setSchemes: (value) => {
            dispatch({ type: actions.SET_SCHEMES, value: value });
        },
        setFormat: (value) => {
            dispatch({ type: actions.SET_FORMAT, value: value });
        },
        setCopied: (value) => {
            dispatch({ type: actions.SET_COPIED, value: value });
        },
        setMode: (value) => {
            dispatch({ type: actions.SET_MODE, value: value });
        },
    };
    return (
        <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
    );
}

