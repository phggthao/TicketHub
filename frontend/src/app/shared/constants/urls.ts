const BASE_URL = 'http://localhost:5000';

export const EVENTS_URL = BASE_URL + '/api/events';
export const EVENT_CATEGORIES_URL = EVENTS_URL + '/categories';
export const EVENTS_BY_SEARCH_URL = EVENTS_URL + '/search/';
export const EVENTS_BY_CATEGORY_URL = EVENTS_URL + '/category/';
export const EVENT_BY_ID_URL = EVENTS_URL + '/';

export const USERS_URL = BASE_URL + '/api/users';
export const USER_LOGIN_URL = USERS_URL + '/login';
export const USER_REGISTER_URL = USERS_URL + '/register';
export const USER_PROFILE_URL = USERS_URL + '/profile/';

export const ORDERS_URL = BASE_URL + '/api/orders';
export const ORDER_CREATE_URL = ORDERS_URL + '/create';
export const ORDER_PAY_URL = ORDERS_URL + '/pay';
export const ORDERS_BY_USER_URL = ORDERS_URL + '/user/';
export const ORDER_BY_ID_URL = ORDERS_URL + '/track/';

export const ORGANIZERS_URL = BASE_URL + '/api/organizers';
export const ORGANIZER_REGISTER_URL = ORGANIZERS_URL + '/register';
export const ORGANIZER_PROFILE_URL = ORGANIZERS_URL + '/profile/';