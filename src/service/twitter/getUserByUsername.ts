export const getUserByUsername = async (
  username: string,
  accessToken: string
) => {
  const response = await fetch(
    `https://api.twitter.com/2/users/by/username/${username}?expansions=pinned_tweet_id&tweet.fields=attachments,author_id,context_annotations,conversation_id,created_at,entities,geo,id,in_reply_to_user_id,lang,non_public_metrics,public_metrics,organic_metrics,promoted_metrics,possibly_sensitive,referenced_tweets,reply_settings,source,text,withheld&user.fields=created_at,description,entities,id,location,name,pinned_tweet_id,profile_image_url,protected,public_metrics,url,username,verified,withheld`,
    {
      headers: { Authorization: `Bearer ${accessToken}` },
    }
  );
  return await response.json();
};
