function logExperimentals() {
    return {
        endlessscrolling, caching
    };
}

function enableEndlessScrolling() {
    endlessscrolling = true;
    toast(toasts.experimental);
    return endlessscrolling;
}

function enableCaching() {
    caching = true;
    toast(toasts.experimental);
    return caching;
}