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
 * Get the proejt for a given slug
 * @param {Array} listProjet Projets into which searching the projet
 * @param {String} slug Slug to search for
 */
export const getProjetBySlug = (projet, slug) => (
  projet.find((currentProjet) => slugifyTitle(currentProjet.titre) === slug)
);