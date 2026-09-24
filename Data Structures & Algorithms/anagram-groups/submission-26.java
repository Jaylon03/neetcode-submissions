class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        Map<String, List<String>> contains = new HashMap();

        for(String str : strs){
            char[] chars = str.toCharArray();
            Arrays.sort(chars);

            String key = new String(chars);

            if(!contains.containsKey(key)){
                contains.put(key, new ArrayList<>());
            }

            contains.get(key).add(str);
        }

        return new ArrayList<>(contains.values());
    }
}
