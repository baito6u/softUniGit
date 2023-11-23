import * as authService from "../services/auth.js"

export function authMiddleware(ctx, next) {
    ctx.athData = authService.getAuthData();

    next();
}