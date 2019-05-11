// default options
export const options = {
    // duration of the scroll per 1000px, default 500
    speed: 500,

    // minimum duration of the scroll
    minDuration: 250,

    // maximum duration of the scroll
    maxDuration: 1500,

    // DOM element to scroll, default window
    // Pass a reference to a DOM object
    // Example: document.querySelector('#element-to-scroll'),
    element: window,

    // should animated scroll be canceled on user scroll/keypress
    // if set to "false" user input will be disabled until animated scroll is complete
    cancelOnUserAction: true
}

// Mobile Offset
export const desiredOffset = [160, 790, 1420, 2050, 2680, 3310];

