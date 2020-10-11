/*
Implement a method getHashCode on string instance. The method should be available on all strings.
Formula to ccalculate string hashcode.
s[0]*31^(n-1) + s[1]*31^(n-2) + .... + s[n-1]

    * s[i] represents the ith character of the string
    * ^ refers to the exponential operand
    * n represents the length of the string
*/

let s1 = "TestGetHashCode"

const hashStringFunction = function () {
    if (!String.prototype.getHashCode) {
        String.prototype.getHashCode = function () {
            let hash = 0;

            if (this.length === 0) {
                return hash;
            }

            for (let i = 0; i < this.length; i++) {
                let char = this.charAt(i);
                hash = (hash << 5) - hash + char;
                hash = hash & hash;   //convert into 32 bit integrer
            }

            return hash;
        }
    }
}



