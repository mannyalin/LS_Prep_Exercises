function copyObject(objectToCopy, keys) {
    let newObj = {};
    if(keys) {
        objectToCopy.forEach(function(key) {
            newObj[key] = objectToCopy[key]
        });
        return newObj;
    }
    else {
        return newObj = Object.assign(newObj, objectToCopy);
    }
}