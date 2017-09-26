export const cloneObject = (objInstance) => {
    if(typeof objInstance === "object")
        return JSON.parse(JSON.stringify(objInstance));
    else 
        return false;

}

export const copiedValue = (source,target, exclude = new Array()) => {
    _.forEach(source, (value,key) => {
        if(exclude.length > 0) {
            if(_.indexOf(exclude,key) < 0) {
                target[key] = value;
            }
        }
        else {
            target[key] = value;
        }
    });
}