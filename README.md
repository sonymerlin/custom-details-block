# Custom details block

Create a new directory for your plugin in the wp-content/plugins/ directory and upload the files

Use a tool like Webpack or the WordPress scripts package to bundle your block. Here's an example using the @wordpress/scripts package.

Install the required dependencies:

npm init -y npm install @wordpress/scripts --save-dev

Update your package.json:

"scripts": { "build": "wp-scripts build", "start": "wp-scripts start" }

Create a webpack.config.js file if needed.

Run the build command:

npm run build

Activate the plugin in WordPress dashboard
