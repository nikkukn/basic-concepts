/*
Find the longest subsequence
*/

const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require("constants");

function LongestCommonSubsequence(str1, str2) {

    let rows = str1.length;
    let columns = str2.length;

    let temp = new Array(rows);

    for (let i = 0; i < rows; i++) {
        temp[i] = new Array(columns)
    }

    let max = 0;

    for (let i = 1; i < temp.length; i++) {
        for (let j = 1; j < temp[i].length; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                temp[i][j] = temp[i - 1][j - 1] + 1;
            } else {
                temp[i][j] = Math.max(temp[i - 1][j], temp[i][j - 1])
            }

            if (temp[i][j] > max) {
                max = temp[i][j];
            }
        }
    }

    return max;
}