// import { groq } from 'next-sanity'
// import { sanityFetch } from './sanity.client'
// import { PageModulaire, Settings } from '../types/schema'
// import { modules, seo } from './fragments'
// import { revalidatePath } from "next/cache";

import type { PageModulaire } from '~/types/schema'
import { modules, seo } from './fragments'

/*****************************************************************************************************
 * SETTINGS
 */
export const settingsQuery = groq`*[_type == "settings"][0]{
  ...,

  navPrimary[]{
    ...,
    _type == 'linkInternal' => {
      ...,
      link->{
        _type,
        slug,
      },
    },

  },
  navSecondary[]{
    ...,
    _type == 'linkInternal' => {
      ...,
      link->{
        _type,
        slug,
      },
    },
  },

}`

// export async function getSettings(): Promise<Settings> {
//   return sanityFetch({
//     query: settingsQuery,
//     tags: ['settings'],
//   })
//   // return client.fetch(

//   // );
// }

/*****************************************************************************************************
 * PAGE MODULAIRE
 */
export const homeQuery = groq`*[_type == "pageModulaire" && homePage == true][0]{
  ...,
  seo{
    ${seo}
  },
  modules[]{
    ${modules}
  }
}`

/*****************************************************************************************************
 * PAGE MODULAIRE
 */
export const pageModulaireQuery = groq`*[_type == "pageModulaire" && slug.current == $slug][0]{
  ...,
  seo{
    ${seo}
  },
  modules[]{
    ${modules}
  }
}`

// export async function getPageModulaire(slug: string): Promise<PageModulaire> {
//   // revalidatePath(slug);
//   // console.log(slug);
//   // console.log(pageModulaireQuery);
//   return sanityFetch({
//     query: pageModulaireQuery,
//     tags: ['pageModulaire'],
//     qParams: { slug: slug },
//   })
//   // return cachedClient(pageModulaireQuery, { slug: slug });
// }

/*****************************************************************************************************
 * PAGE PROJECT
 */
export const projectQuery = groq`*[_type == "project" && slug.current == $slug][0]{
  ...,
  seo{
    ${seo}
  },
  slider[]{
    asset->
  }
}`

// export async function getPageModulaire(slug: string): Promise<PageModulaire> {
//   // revalidatePath(slug);
//   // console.log(slug);
//   // console.log(pageModulaireQuery);
//   return sanityFetch({
//     query: pageModulaireQuery,
//     tags: ['pageModulaire'],
//     qParams: { slug: slug },
//   })
//   // return cachedClient(pageModulaireQuery, { slug: slug });
// }
