export async function fetchPostsByGroup(groupname: string): Promise<any> {
    // Implement the database query logic to retrieve posts associated with the specified group
    // Return the fetched posts
}

export function checkGroupMembership(req: any, res: any, next: any): void {
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