class Solution {
public:
    int longestValidParentheses(string s) {
        int max_len = 0;
        int len = s.size();
        int left = 0;
        int right = 0;
        for (int i = 0; i < len; i++) {
            if (s[i] == '(') {
                left++;
            } else {
                right++;
            }
            if (left == right) {
                max_len = max(max_len, 2 * right);
            } else if (right >= left) {
                left = 0;
                right = 0;
            }
        }
        left = 0;
        right = 0;
        for (int i = len - 1; i >= 0; i--) {
            if (s[i] == '(') {
                left++;
            } else {
                right++;
            }
            if (left == right) {
                max_len = max(max_len, 2 * left);
            } else if (left >= right) {
                left = 0;
                right = 0;
            }
        }
        return max_len;
    }
};