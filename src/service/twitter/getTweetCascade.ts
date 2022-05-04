import { getTweetById } from "./getTweetById";

export const getTweetCascade = async (id, accessToken) => {
  const parentTweet = await getTweetById(id, accessToken);

  if (parentTweet.data && parentTweet.data.referenced_tweets) {
    for (const ref of parentTweet.data.referenced_tweets) {
      refTweet = await getTweetById(ref.id, accessToken);
      ref.data = refTweet.data;
      ref.includes = refTweet.includes;
      ref.errors = refTweet.errors;
    }
  }

  return { ...parentTweet };
};
