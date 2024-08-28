function dfs(grid1, grid2, i, j) {
    if (i < 0 || i >= grid1.length || j < 0 || j >= grid1[0].length || grid2[i][j] === 0) {
        return true;
    }

    if (grid1[i][j] === 0) {
        return false;
    }

    grid2[i][j] = 0;

    let right = dfs(grid1, grid2, i, j + 1);
    let bottom = dfs(grid1, grid2, i + 1, j);
    let top = dfs(grid1, grid2, i - 1, j);
    let left = dfs(grid1, grid2, i, j - 1);

    return right && bottom && top && left;
}

var countSubIslands = function (grid1, grid2) {
    let count = 0;

    for (let i = 0; i < grid2.length; i++) {
        for (let j = 0; j < grid2[0].length; j++) {
            if (grid2[i][j] === 1) {
                if (dfs(grid1, grid2, i, j)) {
                    count++;
                }
            }
        }
    }

    return count;
};


let grid1 = [[1, 1, 1, 0, 0], [0, 1, 1, 1, 1], [0, 0, 0, 0, 0], [1, 0, 0, 0, 0], [1, 1, 0, 1, 1]];
let grid2 = [[1, 1, 1, 0, 0], [0, 0, 1, 1, 1], [0, 1, 0, 0, 0], [1, 0, 1, 1, 0], [0, 1, 0, 1, 0]];

console.log(countSubIslands(grid1, grid2));
