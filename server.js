import path from 'path'
import express from 'express'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackConfig from './webpack.config'

const app = express();

app.use(webpackDevMiddleware(webpack(webpackConfig), {
  publicPath: webpackConfig.output.publicPath,
  stats: { colors: true }
}));

app.use('/dist', express.static(__dirname + '/dist'))


app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});


app.listen(3000, 'localhost', function (err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('listening on http://127.0.0.1:3000')
})
