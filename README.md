# gatsby-plugin-escalade-stock

A simple Gatsby plugin for [prefetching Escalade stock](https://github.com/escaladesports/escalade-react-stock#prefetch-stock).

## Install

With npm:

```bash
npm install --save gatsby-plugin-escalade-stock
```

With Yarn:

```bash
yarn add gatsby-plugin-escalade-stock
```

## Implement

```javascript
// ./gatsby-config.js
module.exports = {
	plugins: [
		{
			resolve: 'gatsby-plugin-escalade-stock',
			options: {
				site: 'bear',
				ids: [
					'AT86A06455R',
					'AK1450SR',
					'AFT2032140',
				]
			}
		}
	]
}
```