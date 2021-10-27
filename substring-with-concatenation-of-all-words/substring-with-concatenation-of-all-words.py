class Solution:
    def findSubstring(self, s: str, words: List[str]) -> List[int]:
        if not s or not words:
            return []
        if len(words) == 1:
            return [i for i in range(len(s)) if s[i:i+len(words[0])] == words[0]]
        word_len = len(words[0])
        word_num = len(words)
        word_dict = {}
        for word in words:
            if word in word_dict:
                word_dict[word] += 1
            else:
                word_dict[word] = 1
        res = []
        for i in range(len(s) - word_len * word_num + 1):
            cur_dict = {}
            for j in range(i, i + word_len * word_num, word_len):
                word = s[j:j + word_len]
                if word in word_dict:
                    if word in cur_dict:
                        cur_dict[word] += 1
                    else:
                        cur_dict[word] = 1
                    if cur_dict[word] > word_dict[word]:
                        break
                else:
                    break
            else:
                res.append(i)
        return res
