export const getTweetById = async (id, accessToken) => {
  const response = await fetch(
    "https://api.twitter.com/2/tweets/" +
      id +
      "?media.fields=duration_ms,height,media_key,preview_image_url,type,url,width,alt_text" +
      "&expansions=attachments.poll_ids,attachments.media_keys,author_id,entities.mentions.username,geo.place_id,in_reply_to_user_id,referenced_tweets.id,referenced_tweets.id.author_id" +
      "&place.fields=contained_within,country,country_code,full_name,geo,id,name,place_type" +
      "&poll.fields=duration_minutes,end_datetime,id,options,voting_status" +
      "&tweet.fields=attachments,author_id,context_annotations,conversation_id,created_at,entities,geo,id,in_reply_to_user_id,lang,public_metrics,possibly_sensitive,referenced_tweets,reply_settings,source,text,withheld" +
      "&user.fields=created_at,description,entities,id,location,name,pinned_tweet_id,profile_image_url,protected,public_metrics,url,username,verified,withheld",
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  const result = await response.json();
};
