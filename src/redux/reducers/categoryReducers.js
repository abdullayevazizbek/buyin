const initialState = {
    categories: [
        {
            id: 1,
            name: 'Мужчинам',
            img: '',
            children: [],
        },
        {
            id: 2,
            name: 'Женщинам',
            img: '',
            children: [],
        },
        {
            id: 3,
            name: 'Спорт',
            img: '',
            children: [
                {
                    id: 31,
                    name: 'Спорт пит',
                    img: '',
                    children: [],
                },
                {
                    id: 32,
                    name: 'Фитнес и тренажеры',
                    img: '',
                    children: [],
                },
                {
                    id: 33,
                    name: 'Спортивные кроссовки',
                    img: '',
                    children: [],
                },
                {
                    id: 34,
                    name: 'Спорт пит',
                    img: '',
                    children: [],
                },
                {
                    id: 35,
                    name: 'Фитнес и тренажеры',
                    img: '',
                    children: [],
                },
            ],
        },
        {
            id: 4,
            name: 'Электроника',
            img: '',
            children: [],
        },
    ],
}

function CategoryReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_CATEGORIES':
            return { ...state, categories: action.payload.categories }
        default:
            return state
    }
}

export default CategoryReducer

export const SetCategoriesAC = (categories) => ({
    type: 'SET_CATEGORIES',
    payload: { categories },
})
