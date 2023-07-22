const BASE_URL = 'http://localhost:5000';

export const EVENTS_URL = BASE_URL + '/api/events';
export const EVENT_CATEGORIES_URL = EVENTS_URL + '/categories';
export const EVENTS_BY_SEARCH_URL = EVENTS_URL + '/search/';
export const EVENTS_BY_CATEGORY_URL = EVENTS_URL + '/category/';
export const EVENT_BY_ID_URL = EVENTS_URL + '/';

export const USER_LOGIN_URL = BASE_URL + '/api/users/login';
export const USER_REGISTER_URL = BASE_URL + '/api/users/register';
export const USER_PROFILE_URL = BASE_URL + '/api/users/profile/';
export const USER_ORDERS_URL = BASE_URL + '/api/users/orders/';

export const ORDERS_URL = BASE_URL + '/api/orders';
export const ORDER_CREATE_URL = ORDERS_URL + '/create';
export const ORDER_PAY_URL = ORDERS_URL + '/pay';
export const ORDER_TRACK_URL = ORDERS_URL + '/track/';