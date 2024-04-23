export const setTokenInLocalStorage = (token) => {
    localStorage.setItem('jwtToken', token);
};

export const getTokenFromLocalStorage = () => {
    return localStorage.getItem('jwtToken');
};
export const isAuthenticated = () => {
    if (localStorage.getItem('jwtToken')) {
        return true;
    } else {
        false;
    }
};
export async function saveProfile() {
    const response = await fetchWithToken('https://buy-sell-api.onrender.com/api/user/profile');
    if (response.ok) {
        const profile = await response.json();
        setProfileInLocalStorage(profile);
        console.log('Успішно збережено профіль:', profile);
    } else {
        console.error('Помилка при збережені акаунта:', response.statusText);
    }
}

// Збереження об'єкта профілю в локальному сховищі
export const setProfileInLocalStorage = (profile) => {
    localStorage.setItem('profile', JSON.stringify(profile));
}

// Отримання об'єкта профілю з локального сховища
export const getProfileFromLocalStorage = () => {
    const profileString = localStorage.getItem('profile');
    return JSON.parse(profileString);
}
export const getMyId = () => {
    const profile = getProfileFromLocalStorage();
    return profile.id;
}

export const setEditObjectInLocalStorage = (editObject) => {
    localStorage.setItem('editObject', JSON.stringify(editObject));
}

export const getEditObjectFromLocalStorage = () => {
    const editObjectString = localStorage.getItem('editObject');
    return JSON.parse(editObjectString);
}

export const fetchWithToken = async (url, options = {}) => {
    const token = getTokenFromLocalStorage();
    if (token) {
        options.headers = {
            ...options.headers,
            Authorization: `Bearer ${token}`,
        };
    } else {
        console.log('Ввійдіть в акаунт')
    }
    if (options.method === 'POST' || options.method === 'PUT') {
        options.headers = {
            ...options.headers,
            'Content-Type': 'application/json', // Встановлюємо заголовок Content-Type

        };
        //options.body = JSON.stringify(options.body); // Конвертуємо тіло запиту в JSON
    } else if (options.method === 'DELETE') {
        options.method = 'DELETE'; // Встановлюємо метод DELETE
    }
    return await fetch(url, options);
};


