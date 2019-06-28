export const loadState = () =>{
    try
    {
        let seralizedSatate = localStorage.getItem("state");
        if(seralizedSatate == null)
        {
            return undefined;
        }
        else
        {
            return JSON.parse(seralizedSatate);
        }
    }
    catch(error)
    {
        return undefined;
    }
}

export const saveState = (state) =>{
    localStorage.setItem("state", JSON.stringify(state))
}