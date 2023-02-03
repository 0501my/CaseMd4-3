"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkAdmin = void 0;
const checkAdmin = (req, res, next) => {
    if (req.decode.role === 'admin') {
        next();
    }
    else {
        res.status(401).send('Unauthorized');
    }
};
exports.checkAdmin = checkAdmin;
//# sourceMappingURL=checkadmin.js.map