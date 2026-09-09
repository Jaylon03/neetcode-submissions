class Solution {
public:
    bool isAnagram(string s, string t) {
      if(s.size() != t.size()) return false;

      unordered_map<char, int> s_counted;
      unordered_map<char, int> t_counted;


      for(int i=0; i<s.size(); i++){
        s_counted[s[i]]++;
        t_counted[t[i]]++;
      }

      for(int i=0; i<s_counted.size(); i++){
        if(s_counted[i] != t_counted[i]) return false;
      }
    }
};
