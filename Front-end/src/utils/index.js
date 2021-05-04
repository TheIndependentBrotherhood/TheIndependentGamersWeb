/*
permet d'obtenir un slug à partir d'une chaîne de caractères => chaîne de
caractères simplifiée, qui passera bien comme URL (notamment remplacement des
espaces par des tirets)
*/
import slugify from 'slugify';

export const slugifyTitle = (title) => (
  slugify(title, {
    lower: true,
  })
);

/**
 * Get the Travles for a given slug
 * @param {Array} listTravels Travles into which searching the recipe
 * @param {String} slug Slug to search for
 */
export const getPostBySlug = (listPost, slug) => {
  const post = listPost.find((currentPost) => slugifyTitle(currentPost.title) === slug);
  return post;
};

export const GetFormattedDate = (date) => {
  const todayTime = new Date(date);
  const month = todayTime.getMonth()+1;
  const day = todayTime.getDate();
  const year = todayTime.getFullYear();

  return `${day}/${month}/${year}`;
};

export const contCaracter = (text) => {
    if(text.length > 255 ){
        return text.substring(0, 255) + '...' ;
    }
    return text;
}

export const getMessageForPost = (listMessage, postId) => {
  const messages = listMessage.filter(message => message.postId);
  console.log(listMessage);
  console.log(messages);
  return messages;
} 