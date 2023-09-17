"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkGroupMembership = exports.fetchPostsByGroup = void 0;
async function fetchPostsByGroup(groupname) {
    // Implement the database query logic to retrieve posts associated with the specified group
    // Return the fetched posts
}
exports.fetchPostsByGroup = fetchPostsByGroup;
function checkGroupMembership(req, res, next) {
    // Check wether user is in a certain group or not
    const { groupname } = req.params;
    const user = req.user;
    // Ensure user.groups is populated and is an array
    if (!Array.isArray(user.groups)) {
        return res.status(500).json({ error: 'Internal server error' });
    }
    // Check if the user is a member of the specified group
    const isMember = user.groups.includes(groupname);
    if (!isMember) {
        return res.status(403).json({ error: 'Access denied' });
    }
    next();
}
exports.checkGroupMembership = checkGroupMembership;
