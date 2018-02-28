import { prefetchStock } from 'escalade-react-stock'

export function onInitialClientRender(a, options = {}){
	prefetchStock(options)
}