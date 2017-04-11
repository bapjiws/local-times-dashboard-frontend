import test from 'tape';
import deepFreeze from 'deep-freeze';

import cityListReducers from '../../../app/redux/reducers/cities/list';
import {
    ADD_CITY,
    DELETE_CITY_BY_ITS_PLACE,
    RESTORE_DELETED_CITY
} from '../../../app/redux/actions/actionTypes';

test('should return the initial state', t => {
    t.deepEqual(cityListReducers(undefined, {}), []);
    t.end();
});

test('should add a new city to the list', t => {
    const cityListBefore = [];
    deepFreeze(cityListBefore);

    t.deepEqual(cityListReducers(cityListBefore, {
        type: ADD_CITY,
        city: {
            accentName: 'NYC',
            country: 'USA'
        }
    }),
        [
            {
                placeInList: 0,
                accentName: 'NYC',
                country: 'USA'
            }
        ]
    );
    t.end();
});

test('should remove the city from the list by its place', t => {
    const cityListBefore = [
        {
            placeInList: 0,
            accentName: 'NYC',
            country: 'USA'
        },
        {
            placeInList: 1,
            accentName: 'LA',
            country: 'USA'
        },
        {
            placeInList: 2,
            accentName: 'Frisco',
            country: 'USA'
        },
        {
            placeInList: 3,
            accentName: 'The Hub',
            country: 'USA'
        }
    ];
    deepFreeze(cityListBefore);

    t.deepEqual(cityListReducers(
        cityListBefore,
        {
            type: DELETE_CITY_BY_ITS_PLACE,
            placeInList: 1
        }
    ),
        [
            {
                placeInList: 0,
                accentName: 'NYC',
                country: 'USA'
            },
            {
                placeInList: 1,
                accentName: 'Frisco',
                country: 'USA'
            },
            {
                placeInList: 2,
                accentName: 'The Hub',
                country: 'USA'
            }
        ]
    );
    t.end();
});

test('should restore the last deleted city', t => {
    const cityListBefore = [
        {
            placeInList: 0,
            accentName: 'NYC',
            country: 'USA'
        },
        {
            placeInList: 1,
            accentName: 'Frisco',
            country: 'USA'
        },
        {
            placeInList: 2,
            accentName: 'The Hub',
            country: 'USA'
        }
    ];
    deepFreeze(cityListBefore);

    t.deepEqual(
        cityListReducers(
            cityListBefore,
            {
                type: RESTORE_DELETED_CITY,
                city: {
                    placeInList: 1,
                    accentName: 'LA',
                    country: 'USA'
                }
            }
        ),
        [
            {
                placeInList: 0,
                accentName: 'NYC',
                country: 'USA'
            },
            {
                placeInList: 1,
                accentName: 'LA',
                country: 'USA'
            },
            {
                placeInList: 2,
                accentName: 'Frisco',
                country: 'USA'
            },
            {
                placeInList: 3,
                accentName: 'The Hub',
                country: 'USA'
            }
        ]
    );
    t.end();
});

