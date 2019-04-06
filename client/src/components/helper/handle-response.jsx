import { authenticationService } from '../auth/authentication.service';

export default function handleResponse(response) {
    const data = response.data;
    if (!response.ok) {
        if ([401, 403].indexOf(response.status) !== -1) {
            // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
            authenticationService.logout();
        }
    }

    return data;
}