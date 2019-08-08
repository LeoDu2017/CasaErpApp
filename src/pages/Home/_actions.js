'use strict';
import * as types from './_actionTypes';
import { menu } from '../../_Service';

import NewMenu from './_Reorganization';


const getMenu = () => {
    return dispatch => {
        menu()
            .then(({ data }) => {
                const _data = NewMenu(data)
                dispatch(getmenuData(_data))
            })
            .catch((error) => {
                console.log(error)
            })
    }
}

const getmenuData = (Menus) => {
    return {
        type: types.MENU_GET,
        Menus
    }
}

export default { getMenu };