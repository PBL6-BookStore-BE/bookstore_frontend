import apiClient from "../../../utils/apiClient";

export const listBookByFilterThunk = async(_, thunkAPI) => {
    const { category, publisher, lowest, highest } = thunkAPI.getState().filter;
    let url = `/searchbook?highest&lowest&namePub&nameCate`;

    if(category || publisher || lowest || highest){
        if(publisher === 'All' && category === 'All'){
            url = `/searchbook?highest=${highest}&lowest=${lowest}&namePub&nameCate`;
        }
        else if(publisher === 'All' ){
            url = `/searchbook?highest=${highest}&lowest=${lowest}&namePub&nameCate=${category}`;
        }
        else if(category === 'All'){
            url = `/searchbook?highest=${highest}&lowest=${lowest}&namePub=${publisher}&nameCate`;
        }
        else url = `/searchbook?highest=${highest}&lowest=${lowest}&namePub=${publisher}&nameCate=${category}`;
    }

    try {
        console.log(url);
        const response = await apiClient.get(url);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue('There was an error')
    }
}