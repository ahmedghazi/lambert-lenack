export const seo = `
	...,
	metaImage{
		asset->
	}
`

// export const figure = `
// 	...,
// 	image{
// 		asset->
// 	},
// 	caption,
// 	link->{
// 		_type,
// 		slug
// 	}
// `

export const blockContent = `
	...,
	en[]{
		...,
		markDefs[] {
			...,
			_type == "linkInternal" => {
				...,
				reference->,

			},
		},
		_type == 'icon' => {
			...,
			image{
				asset->
			},
    }
	},
	fr[]{
		...,
		markDefs[] {
			...,
			_type == "linkInternal" => {
				...,
				reference->,

			},

		},
		_type == 'icon' => {
			...,
			image{
				asset->
			},
    }
	}
`

export const textUI = `
  _type == 'textUI' => {
    ...,
    text{
      ${blockContent}
    }
  }
`
export const listProjectsUI = `
	_type == 'listProjectsUI' => {
		...,
		items[]->{
			_type,
			slug,
			title,
  		tag->,
			imageCover{
				...,
				asset->
			},
		},
	}
`
export const listArticlesUI = `
	_type == 'listArticlesUI' => {
		...,
		items[]->{
			title,
			text,
			date,
			imageCover{
				...,
				asset->
			},
			link{
				...,
				link->{
					_type,
					slug,
      	},
			}
		},
	}
`

export const sliderArticlesUI = `
	_type == 'sliderArticlesUI' => {
		...,
		items[]->{
			title,
			text,
			date,
			imageCover{
				...,
				asset->
			},
			link{
				...,
				link->{
					_type,
					slug,
					tag->,
      	},
			}
		},
	}
`

export const modules = `
	...,
	${textUI},
	${listProjectsUI},
	${listArticlesUI},
	${sliderArticlesUI}
`
