export const localStorageKey = "resUsInfo";

export const FetchDataFromLocalStorage = (array, localData) => {
    let i = 0;
    let appData = [...array];
    appData.forEach((item)=>item.openModal = false);
    for (let _id in localData){
        while  ( i < appData.length){
            if (+appData[i].id === +_id){
                for (let key in localData[_id]) {
                    if (key === "username" || key === "name" || key === "phone" || key === "email" || key === "website") appData[i][key] = localData[_id][key];
                    if (key === "city" || key === "street" || key === "suite" || key === "zipcode") appData[i].address[key] = localData[_id][key];
                    if (key === "catchPhrase" || key === "bs") appData[i].company[key] = localData[_id][key];
                    if (key === "companyname") appData[i].company.name = localData[_id][key];
                }
                i++;
                break;
            }
            i++;
        }
    }
};

export const AddDataFromLocalStorage = (changedData, localData) => {
    if (!localData[changedData.id]) localData[changedData.id] = {};
    for (let key in changedData){
        if (key !== "id")localData[changedData.id][key] = changedData[key];
    }
    localStorage[localStorageKey] = JSON.stringify(localData);
    return localData;
};

