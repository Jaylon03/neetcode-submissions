class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        Map<String, List<String>> group = new HashMap();

        for(String str : strs){
            char[] chars =  str.toCharArray();
            Arrays.sort(chars);

            String key = new String(chars);
            
            if(!group.containsKey(key)){
                group.put(key, new ArrayList<>());
            }

            group.get(key).add(str);
        }

        return new ArrayList<>(group.values());

    }
}
