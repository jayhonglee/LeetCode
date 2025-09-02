void reverseString(char* s, int sSize) {
    int start = 0, last = sSize - 1;
    while(start < last) {
        int temp = s[start];
        s[start] = s[last];
        s[last] = temp;
        
        start++;
        last--;
    }
}