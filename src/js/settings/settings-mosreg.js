export const OAuthOptions = {
	provider: 'kasperskyMosreg',
	authUrl: 'https://login.school.mosreg.ru/oauth2',
	grantUrl: 'https://api.school.mosreg.ru/v1/authorizations',
	scope: 'Avatar,FullName,Roles,Lessons,Relatives',	
	clientId: '36ba0a70bf5549789a547a314562094f',
	redirectUrl: 'https://ad.school.mosreg.ru/promo/oauth2',
}

export const APIoptions = {	
	base: 'https://api.school.mosreg.ru/v1/',
}

export const PromoOptions = {	
	url: 'https://ad.school.mosreg.ru/promo/wishlist3',
	server: 'https://school.mosreg.ru',
	cdn: 'https://ad.csdnevnik.ru/special/staging/kaspersky-app/',
}
