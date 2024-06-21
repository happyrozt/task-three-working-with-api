import axios from 'axios';

export const fetchData = async () => {
    try {
        const response = await axios.get("https://rickandmortyapi.com/api/character");
        if (!response || response.data.results.length === 0) {
            return [];
        } else {
            return response.data.results;
        }
    } catch (error) {
        console.error('Error fetching data:', error);

        return [];
    }
}


export const getJsonData = (id) => {
    const url = `https://rickandmortyapi.com/api/${id}`;
    window.open(url, '_blank');
}

export const dropDownOption = async (type) => {
    if (type === 'status') {
        try {
            let filterStatus = await fetchData();
            let option = [...new Set(filterStatus.map(item => item.status))];
            return option
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }
    else {
        try {
            let filterGender = await fetchData();
            let option = [...new Set(filterGender.map(item => item.gender))];
            return option
        } catch (error) {
            console.log(error)
        }
    }
};

export const CharacterStatus = async (status) => {
    try {

        let statusData = await axios.get(`https://rickandmortyapi.com/api/character/?name=rick&status=${status}`);
        if (!statusData || statusData.data.results === 0) {
            return [];
        } else {
            return statusData.data.results;
        }
    } catch (error) { console.log(error) }
}

export const CharacterGender = async (gender) => {
    try {

        let genderData = await axios.get(`https://rickandmortyapi.com/api/character/?name=rick&gender=${gender}`);
        if (!genderData || genderData.data.results === 0 || genderData === undefined) {
            return [];
        } else {
            return genderData.data.results;
        }
    } catch (error) {
        console.log(error)
        return [];
    }
}

export const selectedFilteredData = async (gender, status) => {
   
    let endpoint = `https://rickandmortyapi.com/api/character`;

   
    let queryParams = [];
    if (gender) queryParams.push(`gender=${gender}`);
    if (status) queryParams.push(`status=${status}`);

   
    if (queryParams.length > 0) {
        endpoint += `?${queryParams.join('&')}`;
    }

    try {
        let filteredData = await axios.get(endpoint);

        if (!filteredData || filteredData.data.results.length === 0 || filteredData === undefined) {
            return [];
        } else {
            return filteredData.data.results;
        }
    } catch (error) {
        console.log(error);
        return [];
    }
}




