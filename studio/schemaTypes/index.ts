// import home from './singletons/home'
import pageModulaire from './documents/pageModulaire'
import project from './documents/project'
import tag from './documents/tag'
// import infos from './singletons/infos'
import settings from './singletons/settings'
import article from './documents/article'

import localeString from './locale/localeString'
import localeBlockContent from './locale/localeBlockContent'

import blockContent from './objects/blockContent'
import linkExternal from './objects/linkExternal'
import linkInternal from './objects/linkInternal'
import seo from './objects/seo'
import keyVal from './objects/keyVal'

import figure from './objects/figure'
import textUI from './objects/modules/textUI'
import listProjectsUI from './objects/modules/listProjectsUI'
import listArticlesUI from './objects/modules/listArticlesUI'

export const schemaTypes = [
  // home,

  // infos,
  settings,
  pageModulaire,
  project,
  tag,
  article,

  localeString,
  localeBlockContent,

  blockContent,
  linkExternal,
  linkInternal,
  seo,
  keyVal,

  figure,

  textUI,
  listProjectsUI,
  listArticlesUI,
]
export default schemaTypes
