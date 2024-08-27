/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    let seen = new Set();
    
    const dfs = (room) => {
        if(seen.has(room)) return;
        
        seen.add(room);
        const keys = rooms[room];
        
        for(const key of keys) {
            dfs(key);
        }
    }
    
    dfs(0);
    
    return seen.size === rooms.length;
};