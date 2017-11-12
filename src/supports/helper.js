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


export const validation = () => {

    let isEmpty = (value, ...args) => {
        if(args.length > 0) {
            for (let i = 0; i <= args.length; i++) {
                if (_.trim(value[args[i]]).length === 0) return args[i];
            }
        }
        else {
            if(_.trim(value).length === 0) return false;
        }
        
        return "";
    }


    return {
        isEmpty: isEmpty
    }
}