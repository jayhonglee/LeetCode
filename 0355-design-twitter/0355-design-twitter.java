class Twitter {
    // Set counter (initially 0)
    // Set hashmap for each user's follows list
    // Set hashmap for each user's posts using counter
    
    int counter;
    Map<Integer, Set<Integer>> follows;
    Map<Integer, ArrayList<int[]>> posts;

    public Twitter() {
        counter = 0;
        follows = new HashMap<>();
        posts = new HashMap<>();
    }
    
    // Add to the user's posts list using counter
    public void postTweet(int userId, int tweetId) {
        posts.putIfAbsent(userId, new ArrayList<>());
        posts.get(userId).add(new int[] {tweetId, counter});

        counter++;
    }
    
    // Get the user's follows
    // Using min heap, push all the posts
    public List<Integer> getNewsFeed(int userId) {
        follows.putIfAbsent(userId, new HashSet<>());

        Set<Integer> following = follows.get(userId);
        following.add(userId);

        PriorityQueue<int[]> minHeap = new PriorityQueue<>((int[] post1, int[] post2) -> post2[1] - post1[1]);

        for(int user : following) {
            ArrayList<int[]> postsArr = posts.get(user);

            if(postsArr == null) continue;
            for(int[] post : postsArr) {
                minHeap.add(post);
            }
        }

        List<Integer> feed = new ArrayList<>();
        int latestFeedCount = 0;

        while (!minHeap.isEmpty() && latestFeedCount < 10) {
            feed.add(minHeap.poll()[0]);
            latestFeedCount++;
        }

        return feed;
    }
    
    // Update the follower's follows list
    public void follow(int followerId, int followeeId) {
        follows.putIfAbsent(followerId, new HashSet<>());
        follows.get(followerId).add(followeeId);
    }
    
    // Get rid of the unfollowee from follower's follow list
    public void unfollow(int followerId, int followeeId) {
        if (follows.containsKey(followerId)) {
            follows.get(followerId).remove(followeeId);
        }
    }
}

/**
 * Your Twitter object will be instantiated and called as such:
 * Twitter obj = new Twitter();
 * obj.postTweet(userId,tweetId);
 * List<Integer> param_2 = obj.getNewsFeed(userId);
 * obj.follow(followerId,followeeId);
 * obj.unfollow(followerId,followeeId);
 */