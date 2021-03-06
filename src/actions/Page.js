import { request } from '../core/helpers/Request';
import { dispatch } from '../core/helpers/EventEmitter';

export function list(params, success, error) {
    request(`/page/list`, params, 'get', success, error);
};

export function add(data, success, error) {
    request(`/page/add`, data, 'post', success, error);
};

export function update(data, success, error) {
    request(`/page/update/${data.id}`, data, 'post', success, error);
};

export function remove(data, success, error) {
    request(`/page/remove/${data.id}`, {}, 'post', success, error);
};

export function get({ id }, success, error) {
    request(`/page/get/${id}`, {}, 'get', success, error);
};
