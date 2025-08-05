export function localStorageGetItem(storageName, defaultValue){
    const item = localStorage.getItem(storageName);

    if (!item){
        localStorageSetItem(storageName, defaultValue);
        return null;
    }

    return JSON.parse(item);
}

export function localStorageSetItem(storageName, value){
    localStorage.setItem(storageName, JSON.stringify(value));
}